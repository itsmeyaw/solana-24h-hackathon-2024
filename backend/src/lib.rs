use anchor_lang::prelude::*;

pub mod constant;

use crate::constant::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("DzyyyfGG6RHiDBZo9aacWTGdgycQv8YsTjGZSfNmHpQT");

#[program]
mod hello_anchor {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>, data: u64) -> Result<()> {
        ctx.accounts.new_account.data = data;
        msg!("Changed data to: {}!", data); // Message will show up in the tx logs
        Ok(())
    }

    pub fn create_property(ctx: Context<CreateProperty>) -> Result<()> {
        let property = &mut ctx.accounts.property;
        let owner = &mut ctx.accounts.owner;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    // We must specify the space in order to initialize an account.
    // First 8 bytes are default account discriminator,
    // next 8 bytes come from NewAccount.data being type u64.
    // (u64 = 64 bits unsigned integer = 8 bytes)
    #[account(init, payer = signer, space = 8 + 8)]
    pub new_account: Account<'info, NewAccount>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct NewAccount {
    data: u64,
}

#[derive(Accounts)]
pub struct CreateProperty<'info> {
    #[account(
        init, payer = owner,
        seeds = [PROPERTY_SEED, owner.key().as_ref()],
        bump,
        space = 8 + (4 + 256) + (4 + 2048) + (4 + 128) + (4 + 128) + (4 + 256)
    )]
    pub property: Account<'info, Property>,

    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Property {
    pub property_name: String,  // 4 + 256
    pub address: String,        // 4 + 2048
    pub city: String,           // 4 + 128
    pub zip: String,            // 4 + 128
    pub country: String,        // 4 + 256
}
