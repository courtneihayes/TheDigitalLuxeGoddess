export default function ContactSection() {
  return (
    <section id="contact">
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Ready To Talk?</h2>
        <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
          I keep client communication simple and respectful of my energy. No
          surprise calls, no last-minute chaos.
        </p>
        <ul
          style={{
            color: "#d1d5db",
            fontSize: "0.9rem",
            marginTop: "0.6rem"
          }}
        >
          <li>Send me a DM with your project idea and budget range.</li>
          <li>
            I&apos;ll reply with a voice note or message and a clear next step.
          </li>
          <li>Once we agree, I&apos;ll send you straight to Beacons to book.</li>
        </ul>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            marginTop: "1rem",
            flexWrap: "wrap"
          }}
        >
          <a
            href="https://https://www.instagram.com/digitalluxegoddess/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            DM Me on Instagram
          </a>
          <a
            href="https://www.tiktok.com/@digitalluxegoddess"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            style={{
              background: "transparent",
              color: "#f97316",
              borderColor: "#f97316"
            }}
          >
            Message Me on TikTok
          </a>
        </div>
      </div>
    </section>
  );
}
