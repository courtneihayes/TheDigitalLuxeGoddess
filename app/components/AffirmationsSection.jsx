import { useState } from "react";

const affirmations = [
  "My story, my boundaries, and my rates are valid.",
  "I deserve clients who respect my time, my safety, and my genius.",
  "I can build wealth without burning myself out.",
  "Every piece of content can attract aligned people to my world.",
  "I’m allowed to outgrow situations that keep me small."
];

export default function AffirmationsSection() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((prev) => (prev + 1) % affirmations.length);
  }

  return (
    <section>
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Affirmation Corner</h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#e5e7eb",
            marginBottom: "0.8rem"
          }}
        >
          Before you price, pitch, or post — ground yourself:
        </p>
        <blockquote
          style={{
            fontStyle: "italic",
            fontSize: "0.95rem",
            borderLeft: "3px solid #f97316",
            paddingLeft: "0.75rem",
            margin: 0,
            color: "#fefce8"
          }}
        >
          “{affirmations[index]}”
        </blockquote>
        <button
          onClick={next}
          style={{ marginTop: "0.8rem", fontSize: "0.8rem" }}
        >
          Next Affirmation
        </button>
      </div>
    </section>
  );
}
