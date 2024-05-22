"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", marginTop: "-180px" }}>
        {/* <img
          src="/assets/logo.jpg"
          alt="Zertify"
          style={{ width: 300, height: 300, margin: "0 auto" }}
        /> */}
        <div style={{ fontSize: 200, fontFamily: "monospace" }}>Welcome!</div>
      </div>

      <Link
        href="/dashboard"
        style={{
          marginTop: "20px",
          display: "inline-block",
          backgroundColor: "#85086E",
          color: "white",
          padding: "10px 15px",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Explore stays
      </Link>
    </main>
  );
}
