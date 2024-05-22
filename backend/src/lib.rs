use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount, Transfer};

pub mod constant;

use crate::constant::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("DzyyyfGG6RHiDBZo9aacWTGdgycQv8YsTjGZSfNmHpQT");

#[program]
mod solbnb {
    use super::*;
    use anchor_lang::Key;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }

    pub fn create_property(
        ctx: Context<CreateProperty>,
        name: String,
        address: String,
        city: String,
        zip: String,
        country: String,
        price: u64,
    ) -> Result<Pubkey> {
        let property = &mut ctx.accounts.property;
        let owner = &ctx.accounts.owner;

        property.name = name;
        property.address = address;
        property.zip = zip;
        property.city = city;
        property.country = country;
        property.owner = owner.key();
        property.price = price;

        msg!("Created property {} by {}", property.key(), owner.key());
        Ok(property.key())
    }

    pub fn rent_property(
        ctx: Context<RentProperty>,
        property_address: Pubkey,
        duration: u8,
    ) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        seeds = [b"nft_mint_authority"],
        payer = signer,
        space = 8,
        bump,
    )]
    pub mint_authority: AccountInfo<'info>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct CreateProperty<'info> {
    #[account(
        init, payer = owner,
        seeds = [PROPERTY_SEED, owner.key().as_ref()],
        bump,
        space = 8 + Property::INIT_SPACE
    )]
    pub property: Account<'info, Property>,

    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
#[derive(InitSpace)]
pub struct Property {
    pub name: String,    // 4 + 256
    pub owner: Pubkey,   // 32
    pub address: String, // 4 + 2048
    pub city: String,    // 4 + 128
    pub zip: String,     // 4 + 128
    pub country: String, // 4 + 256
    pub price: u64,      // 8
}

#[derive(Accounts)]
#[instruction(property_address: Pubkey)]
pub struct RentProperty<'info> {
    #[account(
        mut,
        seeds = [PROPERTY_SEED, owner.key().as_ref()],
        bump
    )]
    pub property: Account<'info, Property>,
    #[account(
        init, payer = owner,
        seeds = [RENT_SEED, owner.key().as_ref()],
        bump,
        space = 8 + RentProof::INIT_SPACE
    )]
    pub rent_proof: Account<'info, RentProof>,

    #[account(mut)]
    pub tenant: Signer<'info>,
    pub mint: Account<'info, Mint>, // Mint for the NFT
    #[account(
        mut,
        payer = tenant,
        associated_token::mint = mint,
        associated_token::authority = tenant
    )]
    pub tenant_token_account: Account<'info, TokenAccount>,
    #[account(
        mut,
        seeds = [b"nft_mint_authority"],
        bump,
    )]
    pub mint_authority: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
}

#[account]
#[derive(InitSpace)]
pub struct RentProof {
    pub tenant: Pubkey,             // 32
    pub property: Pubkey,           // 32
    pub from: u64,                  // 8
    pub to: u64,                    // 8
    pub smart_contract_key: Pubkey, //32
}

#[error_code]
pub enum RentError {
    #[msg("Insufficient funds to rent the property.")]
    InsufficientFunds,
}