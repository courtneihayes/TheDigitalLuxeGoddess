export default function ServicesSection() {
  const services = [
    {
      title: "Evergreen Website + Beacons Setup",
      desc: "Done-for-you Next.js site like this one plus Beacons alignment and offer clarity.",
      ideal: "Creators, cleaners, beauty pros, local service businesses."
    },
    {
      title: "Social Media Systems & Content Planning",
      desc: "90-day content plan that feeds your DMs and Beacons, not a random algorithm.",
      ideal: "If you’re posting but not getting booked."
    },
    {
      title: "UGC & Creative Direction",
      desc: "Scroll-stopping content mapped to your Beacons offers and local audience.",
      ideal: "Brands who want authentic, women-centered storytelling."
    }
  ];

  return (
    <section id="services">
      <h2>Ways We Can Work Together</h2>
      <div
        className="grid-2"
        style={{ marginTop: "1.25rem" }}
      >
        {services.map((s) => (
          <div
            key={s.title}
            className="card"
          >
            <h3 style={{ marginTop: 0 }}>{s.title}</h3>
            <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>{s.desc}</p>
            <p
              style={{
                color: "#e5e7eb",
                fontSize: "0.85rem",
                marginTop: "0.4rem"
              }}
            >
              <strong>Perfect for:</strong> {s.ideal}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
