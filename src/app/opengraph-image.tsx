import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "rulo.digital — sistemas digitales que generan clientes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "#0A0A0A",
          color: "white",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 6,
              background: "#00FF9D",
            }}
          />
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
            rulo<span style={{ color: "#00FF9D" }}>.</span>digital
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.2 }}>
            Landing + captación en{" "}
            <span style={{ color: "#00FF9D" }}>modo express</span>
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.78)", lineHeight: 1.35 }}>
            Creo sistemas digitales que generan clientes para negocios y profesionales.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.72)" }}>
            Lanzamiento: <span style={{ color: "#00FF9D", fontWeight: 700 }}>397 €</span> · plazas
            limitadas
          </div>
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.55)" }}>rulo.digital</div>
        </div>
      </div>
    ),
    size,
  );
}
