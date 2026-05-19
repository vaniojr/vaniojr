import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "radial-gradient(circle at 20% 20%, #0ea5e933 0%, transparent 38%), radial-gradient(circle at 80% 10%, #38bdf822 0%, transparent 32%), #09090b",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#a1a1aa" }}>
          vaniojr.com.br
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, lineHeight: 1.08, maxWidth: 940, fontWeight: 700 }}>
            Building AI-powered systems, automation and digital products.
          </div>
          <div style={{ fontSize: 30, color: "#d4d4d8" }}>AI • Automation • SaaS • Digital Products</div>
        </div>
      </div>
    ),
    size,
  );
}
