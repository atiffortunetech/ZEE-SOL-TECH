import { ImageResponse } from "next/og";

export const alt = "ZEE Sol Tech — Software House, Web Design & Custom Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #020617 0%, #0f172a 48%, #115e59 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          ZEE Sol Tech
          <span style={{ color: "#2dd4bf", marginLeft: 4 }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900 }}>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.5 }}>
            Software house for brands, websites & custom products
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.78)", lineHeight: 1.35 }}>
            Logo design · Web development · CRM · SaaS · Mobile apps
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#99f6e4" }}>zeesoltech.com</div>
      </div>
    ),
    { ...size },
  );
}
