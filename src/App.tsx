// src/App.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Sparkles, Sprout, Trash2, Broom, Bug, ShowerHead, CheckCircle, ArrowRight } from "lucide-react";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontWeight: 700, fontSize: 20 }}>{value}</div>
      <div style={{ color: "#64748b", fontSize: 12 }}>{label}</div>
    </div>
  );
}

export default function App() {
  const [form, setForm] = useState({ name: "", phone: "", area: "", service: "", message: "" });
  const waNumber = "+2547XXXXXXXX"; // TODO: your WhatsApp
  const phoneNumber = "+2547XXXXXXXX"; // TODO: your phone

  const services = [
    { name: "Valet Trash Pickup", icon: Trash2, blurb: "Door-to-door pickup 5x/week for apartments and gated estates." },
    { name: "Curbside Collection", icon: Broom, blurb: "Standard bin pickup from curb or gate for homes & small businesses." },
    { name: "Bulk & Junk Removal", icon: Sprout, blurb: "On-call removal of furniture, appliances, debris—priced per load." },
    { name: "Fumigation & Pest Control", icon: Bug, blurb: "Safe treatments for cockroaches, rodents, termites, mosquitoes." },
    { name: "Pressure Washing", icon: ShowerHead, blurb: "Driveways, walkways, storefronts—plus periodic bin washing." },
  ];

  const priceHints = [
    { title: "Valet Trash", price: "KES 20–30 / unit / day" },
    { title: "Curbside", price: "KES 300–600 / month" },
    { title: "Bulk/Junk", price: "From KES 1,500 / trip" },
    { title: "Fumigation", price: "KES 1,000–4,000 / service" },
    { title: "Pressure Wash", price: "From KES 500" },
  ];

  function openWhatsAppQuick(text: string) {
    const msg = encodeURIComponent(text);
    const url = `https://wa.me/${waNumber.replace(/[^\d]/g, "")}?text=${msg}`;
    window.open(url, "_blank");
  }
  function update(k: string, v: string) { setForm((f) => ({ ...f, [k]: v })); }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parts = [
      "Quote Request – SafiWorks",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Area: ${form.area}`,
      `Service: ${form.service}`,
      form.message ? `Notes: ${form.message}` : null,
    ].filter(Boolean);
    openWhatsAppQuick(parts.join("\n"));
  }

  return (
    <div style={{ fontFamily: "Inter, system-ui, Arial", color: "#0f172a" }}>
      {/* Topbar */}
      <div style={{ position: "sticky", top: 0, zIndex: 10, background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Sparkles size={18} />
            <strong>SafiWorks</strong>
            <span style={{ marginLeft: 8, fontSize: 12, padding: "2px 6px", border: "1px solid #86efac", color: "#047857", background: "#ecfdf5", borderRadius: 999 }}>
              Licensed • NEMA & County
            </span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => openWhatsAppQuick("Hi SafiWorks, I’d like to schedule a pickup.")} style={{ border: "1px solid #e2e8f0", padding: "8px 12px", borderRadius: 12, display: "flex", alignItems: "center", gap: 6 }}>
              <MessageCircle size={16} /> WhatsApp
            </button>
            <button onClick={() => (window.location.href = `tel:${phoneNumber}`)} style={{ background: "#10b981", color: "#fff", padding: "8px 12px", borderRadius: 12, border: 0, display: "flex", alignItems: "center", gap: 6 }}>
              <Phone size={16} /> Call
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: "linear-gradient(#ecfdf5, #ffffff)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1 }}>
                Mombasa’s All-in-One <span style={{ color: "#059669" }}>Sanitation</span> Partner
              </h1>
              <p style={{ marginTop: 12, color: "#475569", fontSize: 18, maxWidth: 680 }}>
                Valet trash, curbside collection, bulk/junk removal, licensed fumigation, and pressure washing—designed for estates, apartments, and small businesses across the Coast.
              </p>
              <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => openWhatsAppQuick("I’m ready to start valet trash service.")} style={{ background: "#10b981", color: "#fff", padding: "10px 14px", borderRadius: 12, border: 0, display: "flex", alignItems: "center", gap: 6 }}>
                  Get Started <ArrowRight size={16} />
                </button>
                <button onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })} style={{ border: "1px solid #e2e8f0", padding: "10px 14px", borderRadius: 12 }}>
                  Request a Quote
                </button>
              </div>
              <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", maxWidth: 400, gap: 12 }}>
                <Stat value="5" label="Core Services" />
                <Stat value="24–48h" label="Turnaround" />
                <Stat value=">90%" label="On-time Pickup" />
              </div>
            </motion.div>

            <div style={{ border: "1px solid #d1fae5", borderRadius: 16, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <Sparkles size={18} color="#059669" />
                <strong>Transparent Pricing (Guide)</strong>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 8 }}>
                {priceHints.map((p) => (
                  <div key={p.title} style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 10 }}>
                    <div style={{ fontWeight: 600 }}>{p.title}</div>
                    <div style={{ color: "#047857" }}>{p.price}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 8, fontSize: 12, color: "#64748b" }}>*Final quotes vary by volume, access, and schedule. Ask for estate/HOA discounts.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 16px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 6 }}>Services</h2>
        <p style={{ color: "#475569", marginBottom: 16 }}>Flexible contracts for estates, apartments, and businesses.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 12 }}>
          {services.map((s) => (
            <div key={s.name} style={{ border: "1px solid #e2e8f0", borderRadius: 16, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <s.icon size={20} color="#059669" />
                <strong>{s.name}</strong>
              </div>
              <div style={{ color: "#475569", fontSize: 14 }}>{s.blurb}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section id="quote" style={{ background: "#ecfdf5", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 16px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 6 }}>Request a Quote</h2>
          <p style={{ color: "#475569", marginBottom: 16 }}>Fast response in 24–48 hours. Estate/HOA pricing available.</p>
          <form onSubmit={submit} style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 12 }}>
            <input required placeholder="Your Name" value={form.name} onChange={(e) => update("name", e.target.value)} style={inputStyle} />
            <input required placeholder="Phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} style={inputStyle} />
            <input required placeholder="Area / Estate" value={form.area} onChange={(e) => update("area", e.target.value)} style={inputStyle} />
            <input required placeholder="Service (Valet/Curb/Bulk/Fumigation/Pressure Wash)" value={form.service} onChange={(e) => update("service", e.target.value)} style={inputStyle} />
            <textarea placeholder="Notes (volume, frequency, access…)" value={form.message} onChange={(e) => update("message", e.target.value)} style={{ ...inputStyle, gridColumn: "1 / -1", minHeight: 100 }} />
            <div style={{ display: "flex", gap: 8 }}>
              <button type="submit" style={{ background: "#10b981", color: "#fff", padding: "10px 14px", borderRadius: 12, border: 0, display: "flex", alignItems: "center", gap: 6 }}>
                <ArrowRight size={16} /> Send via WhatsApp
              </button>
              <button type="button" onClick={() => openWhatsAppQuick("Hello SafiWorks, I have a quick question.")} style={{ border: "1px solid #e2e8f0", padding: "10px 14px", borderRadius: 12, display: "flex", alignItems: "center", gap: 6 }}>
                <MessageCircle size={16} /> Chat First
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 600 }}>
              <Sprout size={18} /> SafiWorks
            </div>
            <div style={{ color: "#475569", fontSize: 14 }}>Mombasa, Kenya • Waste Transport (NEMA) • County License</div>
            <div style={{ color: "#94a3b8", fontSize: 12 }}>© {new Date().getFullYear()} SafiWorks. All rights reserved.</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => openWhatsAppQuick("Hello SafiWorks")} style={{ border: "1px solid #e2e8f0", padding: "8px 12px", borderRadius: 12, display: "flex", alignItems: "center", gap: 6 }}>
              <MessageCircle size={16} /> WhatsApp
            </button>
            <button onClick={() => (window.location.href = `tel:${phoneNumber}`)} style={{ background: "#10b981", color: "#fff", padding: "8px 12px", borderRadius: 12, border: 0, display: "flex", alignItems: "center", gap: 6 }}>
              <Phone size={16} /> Call
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #e2e8f0",
  outline: "none",
  fontSize: 14,
};
