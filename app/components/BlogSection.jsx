const posts = [
  {
    title:
      "Healing in Public Without Oversharing: Content Boundaries for Black Women Online",
    slug: "healing-in-public-without-oversharing",
    audience: "Black women creators, coaches, and service providers",
    outcome:
      "Learn how to share your story with intention, protect your peace, and still attract aligned clients."
  },
  {
    title: "How to Build a Faceless Instagram That Still Feels Personal",
    slug: "faceless-instagram-that-feels-personal",
    audience: "Moms, survivors, and private creators who don’t want to show their face",
    outcome:
      "Step-by-step ways to use B-roll, text, and voiceovers to grow without sacrificing safety or anonymity."
  },
  {
    title:
      "From Survival Mode to Digital Income: Turning Your Lessons Into Ethical Digital Products",
    slug: "turn-lessons-into-ethical-digital-products",
    audience: "Women who have a story, a skill, or a testimony and want to monetize it responsibly",
    outcome:
      "A framework for creating offers (courses, guides, templates) without exploiting your trauma."
  },
  {
    title:
      "The Digital Luxe Stack: How I’d Go From $0 to $10K Using Beacons, Social Media & Simple Systems",
    slug: "digital-luxe-stack-0-to-10k",
    audience: "Early-stage creators & service providers ready for consistent digital income",
    outcome:
      "A clear breakdown of offers, price points, and content needed to hit your first $10K month."
  },
  {
    title:
      "Soft Life, Strong Boundaries: Systems for Single Moms & Creators Building a Business",
    slug: "soft-life-strong-boundaries-systems",
    audience: "Single moms, co-parents, and women rebuilding after toxic dynamics",
    outcome:
      "Daily routines, communication boundaries, and business systems that protect your energy and income."
  },
  {
    title:
      "Journaling as a Business Strategy: Using The Goddess Empowerment Journals to Plan Content & Revenue",
    slug: "journaling-as-business-strategy",
    audience: "Women who process through writing and want to turn that into content and offers",
    outcome:
      "Prompts to go from brain-dump to content calendar to digital products that live on Beacons."
  }
];

export default function BlogSection() {
  return (
    <section id="blog">
      <h2>Digital Luxe Goddess Blog</h2>
      <p style={{ color: "#9ca3af", fontSize: "0.9rem", maxWidth: "40rem" }}>
        These are the core topics of the Digital Luxe Goddess Academy: healing,
        boundaries, digital income, and content that doesn't exploit your story.
        Each headline can become a full blog post, carousel, TikTok, or live stream
        That points back to your Beacons offers.
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
