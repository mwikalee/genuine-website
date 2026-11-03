
import { useRef, useState } from "react";
import "./index.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {/* Navigation */}
      <header className="navbar">
      <a href="/" className="logo">
  <img src="/GBLogof.jpg" alt="" />
  <span>GENUINE<span className="logo-dot">.</span></span>
</a>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setIsMenuOpen(false);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={`nav-links${isMenuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsMenuOpen(false);
              menuButtonRef.current?.focus();
            }
          }}
        >
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)}>Our Products</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

        <a
  href="https://wa.me/254111502020?text=Hello%20Genuine%2C%20I%27d%20like%20to%20request%20a%20quote."
  target="_blank"
  rel="noreferrer"
  className="nav-cta"
>
  Get a Quote <span>↗</span>
</a>
      </header>

      <main id="main-content">
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            CORPORATE GIFTS & BRANDING
          </div>

          <h1>
            Make your brand
            <br />
            <span>impossible</span> to ignore.
          </h1>

          <p className="hero-description">
            Thoughtfully branded promotional products that put your
            business in people's hands and keep your brand remembered.
          </p>

          <div className="hero-actions">
            <a href="#products" className="primary-button">
              Explore Our Products <span>→</span>
            </a>

            <a
  href="https://wa.me/254111502020?text=Hello%20Genuine%2C%20I%27d%20like%20to%20make%20an%20enquiry."
  target="_blank"
  rel="noreferrer"
  className="secondary-button"
>
  Talk to Our Team
</a>
          </div>

          <div className="hero-note">
            <span className="note-dot" aria-hidden="true"></span>
            Give your brand something worth remembering.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-background"></div>

          <div className="image-card image-card-main">
          <img
  src="/GD Shirt.jpg"
  alt="Genuine branded shirt"
/>
            <div className="image-caption">
              <span aria-hidden="true">01 /</span> Branded apparel
            </div>
          </div>

          <div className="image-card image-card-small">
            <img
  src="/GB Umbrellas.jpg"
  alt="Genuine branded umbrella"
/>
          </div>

          <div className="floating-label">
            <span className="floating-label-icon" aria-hidden="true">✳</span>
            <div>
              <strong>Your Brand.</strong>
              <small>Made memorable.</small>
            </div>
          </div>

          <div className="visual-number" aria-hidden="true">01</div>
        </div>
      </section>

      {/* Bottom information strip */}
      <section className="intro-strip">
        <p>BRANDS THAT STAY WITH YOU.</p>
        <span>Promotional products</span>
        <span>Corporate gifts</span>
        <span>Custom branding</span>
      </section>

      
      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-heading">
          <span className="section-label">GET TO KNOW US</span>
          <h2>
            More than products.
            <br />
            <span>We create brand experiences.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            Genuine helps businesses make lasting impressions through
            promotional products, corporate gifts and branded merchandise.
            We bring your brand closer to the people who matter.
          </p>

          <a href="#contact" className="text-link">
            Let's work together <span>↗</span>
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="products-heading">
          <div>
            <span className="section-label">MADE TO REPRESENT YOUR BRAND</span>
            <h2>Products that make<br />an impression.</h2>
          </div>

          <p>
            Explore a selection of promotional products and corporate
            gifts that help keep your brand visible.
          </p>
        </div>

        <div className="product-grid">
          <article className="product-card">
            <div className="product-image">
              <img
  src="/GD Pen.jpg"
  alt="Genuine branded pen"
/>
              <span className="product-number" aria-hidden="true">01</span>
            </div>
            <div className="product-info">
              <div>
                <h3>Branded Stationery</h3>
                <p>Notebooks, pens and diaries</p>
              </div>
              <span className="product-arrow" aria-hidden="true">↗</span>
            </div>
          </article>

          <article className="product-card">
            <div className="product-image">
              <img
  src="/GD Water Bottle.jpg"
  alt="Genuine branded water bottle"
/>
              <span className="product-number" aria-hidden="true">02</span>
            </div>
            <div className="product-info">
              <div>
                <h3>Drinkware</h3>
                <p>Bottles, mugs and tumblers</p>
              </div>
              <span className="product-arrow" aria-hidden="true">↗</span>
            </div>
          </article>

          <article className="product-card">
            <div className="product-image">
             <img
  src="/GD Shopping Bag.jpg"
  alt="Genuine branded shopping bag"
/>
              <span className="product-number" aria-hidden="true">03</span>
            </div>
            <div className="product-info">
              <div>
                <h3>Branded Bags</h3>
                <p>Shopping bags and backpacks</p>
              </div>
              <span className="product-arrow" aria-hidden="true">↗</span>
            </div>
          </article>

          <article className="product-card">
            <div className="product-image">
             <img
  src="/GD Cups.jpg"
  alt="Genuine branded cups"
/>
              <span className="product-number" aria-hidden="true">04</span>
            </div>
            <div className="product-info">
              <div>
                <h3>Corporate Gifts</h3>
                <p>Thoughtful gifts for every occasion</p>
              </div>
              <span className="product-arrow" aria-hidden="true">↗</span>
            </div>
          </article>
        </div>

        <div className="products-bottom">
          <p>Looking for something specific?</p>
          <a href="#contact" className="text-link">
            Ask us about it <span>↗</span>
          </a>
        </div>
      </section>

      {/* Why Choose Genuine */}
      <section className="why-section">
        <div className="why-heading">
          <span className="section-label">THE GENUINE DIFFERENCE</span>
          <h2>
            Your brand deserves
            <br />
            to be <span>remembered.</span>
          </h2>
          <p>
            Every interaction is an opportunity to make an impression.
            Give your brand the visibility it deserves.
          </p>
        </div>

        <div className="benefits-grid">
          <article className="benefit-card">
            <span className="benefit-icon" aria-hidden="true">✳</span>
            <span className="benefit-number" aria-hidden="true">01</span>
            <h3>Brand Visibility</h3>
            <p>
              Put your brand in everyday spaces and keep it
              in sight long after the first interaction.
            </p>
          </article>

          <article className="benefit-card">
            <span className="benefit-icon" aria-hidden="true">◇</span>
            <span className="benefit-number" aria-hidden="true">02</span>
            <h3>Personalised Touch</h3>
            <p>
              Promotional products that help communicate
              your brand's identity and message.
            </p>
          </article>

          <article className="benefit-card">
            <span className="benefit-icon" aria-hidden="true">↗</span>
            <span className="benefit-number" aria-hidden="true">03</span>
            <h3>Memorable Gifting</h3>
            <p>
              Make business relationships more meaningful
              with thoughtful branded gifts.
            </p>
          </article>
        </div>
      </section>

      {/* How It Works */}
      <section className="process-section">
        <div className="process-heading">
          <span className="section-label">SIMPLE FROM START TO FINISH</span>
          <h2>Getting started is easy.</h2>
          <p>
            From your first enquiry to choosing your products,
            we'll help you take the next step.
          </p>
        </div>

        <div className="process-grid">
          <article className="process-step">
            <span>01</span>
            <h3>Tell Us What You Need</h3>
            <p>
              Share your ideas, requirements and the products
              you're interested in.
            </p>
          </article>

          <article className="process-step">
            <span>02</span>
            <h3>Explore Your Options</h3>
            <p>
              Discuss suitable promotional products and
              branding options with our team.
            </p>
          </article>

          <article className="process-step">
            <span>03</span>
            <h3>Make Your Enquiry</h3>
            <p>
              Get a quotation based on your requirements and take the next step towards bringing your branded products to life
            </p>
          </article>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <span className="section-label">LET'S MAKE IT GENUINE</span>
          <h2>
            Ready to make
            <br />
            your brand <span>stand out?</span>
          </h2>
          <p>
            Tell us what you have in mind. Let's find the right
            promotional products for your brand.
          </p>

          <div className="contact-actions">
            <a href="tel:0111502020" className="contact-button">
              Call Us: 0111 502 020 <span>↗</span>
            </a>

            <a
              href="https://genuine.co.ke"
              target="_blank"
              rel="noreferrer"
              className="contact-secondary"
            >
              Visit genuine.co.ke
            </a>
          </div>
        </div>

        <div className="contact-decoration" aria-hidden="true">
          <span>G</span>
          <div className="decoration-dot"></div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="logo">
              GENUINE<span>.</span>
            </a>
            <p>
              Promotional products and corporate gifts
              that keep your brand remembered.
            </p>
          </div>

          <div className="footer-column">
            <h2>Explore</h2>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Our Products</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h2>Get in Touch</h2>
            <a href="tel:0111502020">0111 502 020</a>
            <a href="https://genuine.co.ke" target="_blank" rel="noreferrer">
              genuine.co.ke
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Genuine. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

    </>
  );
}

export default App;
