const posts = [
  {
    title:
      "How Baton Rouge Small Businesses Can Turn Instagram Followers Into Paying Clients",
    slug: "baton-rouge-instagram-followers-to-clients",
    audience: "Local service businesses",
    outcome: "DM scripts + Beacons link strategy"
  },
  {
    title:
      "The Simple Content System I Use for Airbnb Hosts in Baton Rouge & Prairieville",
    slug: "airbnb-host-content-system-baton-rouge",
    audience: "Airbnb & short-term rental hosts",
    outcome: "Weekly posting rhythm + guest experience"
  },
  {
    title:
      "No Email List? No Problem. How to Sell Directly From TikTok and Beacons",
    slug: "sell-from-tiktok-and-beacons",
    audience: "Creators & UGC beginners",
    outcome: "DM + Beacons funnel"
  },
  {
    title: "Content Boundaries for Black Women Building Online Businesses",
    slug: "content-boundaries-for-black-women",
    audience: "Black women entrepreneurs",
    outcome: "Safety, consent, and pricing"
  },
  {
    title:
      "Evergreen Content Ideas for Baton Rouge Cleaners, Beauty Pros, and Service Providers",
    slug: "evergreen-content-ideas-baton-rouge",
    audience: "Local service providers",
    outcome: "Evergreen SEO blog & Reels ideas"
  },
  {
    title:
      "How to Use One Beacons Page as Your Whole Offer Ecosystem (Without Confusing People)",
    slug: "beacons-offer-ecosystem",
    audience: "Multi-offer creators",
    outcome: "Offer stack & Beacons layout"
  }
];

export default function BlogSection() {
  return (
    <section id="blog">
      <h2>Evergreen Content Hub</h2>
      <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
        Each topic below can be a full blog post, carousel, or TikTok that sends
        people back here or straight to your Beacons.
      </p>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          marginTop: "1rem"
        }}
      >
        {posts.map((post) => (
          <article
            key={post.slug}
            className="card"
          >
            <h3 style={{ marginTop: 0 }}>{post.title}</h3>
            <p style={{ color: "#9ca3af", fontSize: "0.85rem" }}>
              <strong>For:</strong> {post.audience}
            </p>
            <p style={{ color: "#d1d5db", fontSize: "0.85rem" }}>
              <strong>Outcome:</strong> {post.outcome}
            </p>
            <p style={{ color: "#6b7280", fontSize: "0.8rem" }}>
              Slug: <code>{post.slug}</code>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
