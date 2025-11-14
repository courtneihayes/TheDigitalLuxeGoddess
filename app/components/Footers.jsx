export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1f2937",
        marginTop: "2rem",
        padding: "1.25rem"
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          fontSize: "0.75rem",
          color: "#6b7280",
          display: "flex",
          justifyContent: "space-between",
          gap: "0.75rem",
          flexWrap: "wrap"
        }}
      >
        <span>
          © {new Date().getFullYear()} Digital Luxe Goddess Academy™ • Goddess Empowerment™.  
          All rights reserved.
        </span>

        <span>
          Empowerment education, digital products, 1:1 alignment coaching, creator
          resources, journals & downloadable guides — serving Baton Rouge, Prairieville,
          Gonzales, Denham Springs & creators across the United States.
        </span>

        <span>
          Explore all programs & products:{" "}
          <a
            href="https://beacons.ai/digitalluxegoddess"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#f97316", textDecoration: "none" }}
          >
            beacons.ai/digitalluxegoddess
          </a>
        </span>
      </div>
    </footer>
  );
}
