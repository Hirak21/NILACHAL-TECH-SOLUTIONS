import { ImageResponse } from "next/og";

export const alt = "Nilachal Tech Solutions — Digital Systems for Local Business Growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#d6a936",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "700",
              color: "#0a0a0a",
              fontFamily: "sans-serif",
            }}
          >
            N
          </div>
          <span
            style={{
              color: "#f5f3ee",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Nilachal Tech Solutions
          </span>
        </div>
        <div
          style={{
            color: "#f5f3ee",
            fontSize: "48px",
            fontWeight: "600",
            lineHeight: "1.1",
            fontFamily: "sans-serif",
            letterSpacing: "-0.02em",
            maxWidth: "800px",
          }}
        >
          Digital Systems for Local Business Growth
        </div>
        <div
          style={{
            color: "#8c8c8c",
            fontSize: "20px",
            marginTop: "24px",
            fontFamily: "sans-serif",
          }}
        >
          Guwahati, Assam · nilachaltech.com
        </div>
      </div>
    ),
    { ...size }
  );
}
