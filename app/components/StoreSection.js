export default function StoreSection() {
  return (
    <div style={styles.container}>
      <div style={styles.storeSection}>
        <h2 style={styles.heading}>Shop My Digital Collection</h2>
        <p style={styles.subheading}>
          All products, templates, and exclusive content available on my Beacons page.
          Instant access, secure checkout, and personal support from me.
        </p>
        <div style={styles.iframeContainer}>
          <iframe
            src="https://beacons.ai/digitalluxegoddess"
            title="Digital Luxe Goddess Shop"
            style={styles.iframe}
            allowFullScreen
          />
        </div>
        <a 
          href="https://beacons.ai/digitalluxegoddess" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.ctaButton}
          className="cta-button"
        >
          Shop All Products →
        </a>
      </div>
      <style jsx>{`
        .cta-button {
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 14, 50, 0.6);
          background: #101010;
          border-color: #ff0e32;
        }
      `}</style>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '60px auto',
    padding: '0 20px',
  },
  storeSection: {
    background: '#ffffff',
    padding: '50px 30px',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    border: '3px solid #ff0e32',
  },
  heading: {
    color: '#ff0e32',
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  subheading: {
    color: '#101010',
    fontSize: '1.2em',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  iframeContainer: {
    width: '100%',
    height: '800px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.15)',
    marginBottom: '30px',
    border: '2px solid #101010',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
  ctaButton: {
    display: 'inline-block',
    background: '#ff0e32',
    color: '#ffffff',
    padding: '18px 45px',
    textDecoration: 'none',
    borderRadius: '50px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    boxShadow: '0 5px 15px rgba(255, 14, 50, 0.4)',
    marginTop: '20px',
    border: '2px solid #ff0e32',
  },
}
