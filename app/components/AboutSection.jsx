export default function AboutSection() {
  return (
    <section id="about">
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Who I Work With</h2>
        <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
          I support women-led brands, Black-owned businesses, and service
          providers who are tired of complicated funnels and just want:
        </p>
        <ul
          style={{
            color: "#d1d5db",
            fontSize: "0.9rem",
            marginTop: "0.75rem"
          }}
        >
          <li>• People in your city finding you on Google and social</li>
          <li>• Clear, direct messaging that respects your boundaries</li>
          <li>• A simple Beacons page that turns interest into income</li>
          <li>• Content that works even on days you need rest</li>
        </ul>
      </div>
    </section>
  );
}
