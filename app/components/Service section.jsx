export default function ServicesSection() {
  const services = [
    {
      title: "The Goddess Empowerment + Digital Luxe Academy",
      tag: "Core Program • Self-Paced + Support",
      desc: "A full digital ecosystem for women rebuilding their life, money, and online presence. Learn how to turn your story, skills, and gifts into aligned digital income without burning out or oversharing.",
      ideal:
        "Perfect for: creators, service providers, and moms ready to step into CEO energy with structure, not chaos.",
      link: "https://shop.beacons.ai/digitalluxegoddess/55bb08a3-f5ae-4d8c-a513-b1795bbb944c",
      cta: "Explore The Academy"
    },
    {
      title: "1:1 The Empowered Alignment Mentorship",
      tag: "High-Touch • Limited Spots",
      desc: "Private 1:1 support focused on alignment, boundaries, and building a digital life that actually feels safe and sustainable. We connect your healing, your schedule, and your income strategy in one place.",
      ideal:
        "Perfect for: women navigating co-parenting, career pivots, or starting over who want personal guidance instead of generic advice.",
      link: "https://shop.beacons.ai/digitalluxegoddess/ee1e3726-952e-4f81-bbc6-2a70975855b8",
      cta: "Apply for 1:1 Support"
    },
    {
      title: "The Goddess Empowerment Journals",
      tag: "Physical & Digital • Printify Store",
      desc: "Journals designed for women who process through writing. Use them to brain-dump, plan content, track triggers, map goals, and turn lived experience into strategy instead of chaos.",
      ideal:
        "Perfect for: writers, survivors, creators, and busy moms who need a safe place to plan life, business, and content.",
      link: "https://the-goddess-empowerment.printify.me/",
      cta: "Shop Journals"
    },
    {
      title: "Free Instagram Faceless Guide",
      tag: "Free Resource • Instant Access",
      desc: "A free guide to building a powerful Instagram presence without showing your face. Learn how to use B-roll, text, audio, and storytelling to grow your brand while protecting your privacy.",
      ideal:
        "Perfect for: survivors, private moms, 9–5 workers, and anyone who wants visibility without feeling exposed.",
      link: "https://www.canva.com/design/DAGiBpm_H3s/XndvWg9CNvhhIto3QcGQAQ/edit?utm_content=DAGiBpm_H3s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      cta: "Get the Free Guide"
    }
  ];

  return (
    <section id="services">
      <h2>Ways to Work with Digital Luxe Goddess</h2>
      <p
        style={{
          color: "#9ca3af",
          fontSize: "0.9rem",
          maxWidth: "42rem",
          marginBottom: "1.25rem"
        }}
      >
        Everything I offer is designed for women who want to build digital income
        with strong boundaries, safety, and clarity. Start with the Academy,
        go deeper with 1:1, ground yourself with journals, or begin with a free guide.
      </p>

      <div className="grid-2">
        {services.map((s) => (
          <article
            key={s.title}
            className="card"
          >
            <div className="badge" style={{ marginBottom: "0.6rem" }}>
              <span className="badge-dot" />
              <span>{s.tag}</span>
            </div>
            <h3 style={{ marginTop: 0 }}>{s.title}</h3>
            <p style={{ color: "#d1d5db", fontSize: "0.9rem" }}>{s.desc}</p>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "0.85rem",
                marginTop: "0.4rem"
              }}
            >
              {s.ideal}
            </p>
            <a
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{ marginTop: "0.8rem", fontSize: "0.8rem" }}
            >
              {s.cta}
            </a>
          </article>
        ))}
      </div>

      <p
        style={{
          color: "#6b7280",
          fontSize: "0.8rem",
          marginTop: "0.9rem"
        }}
      >
        All programs and offers are managed through{" "}
        <a
          href="https://beacons.ai/digitalluxegoddess"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f97316", textDecoration: "none" }}
        >
          beacons.ai/digitalluxegoddess
        </a>{" "}
        so your onboarding stays simple and aligned.
      </p>
    </section>
  );
}
