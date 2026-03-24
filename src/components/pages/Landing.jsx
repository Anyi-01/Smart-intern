import Icon from "../ui/Icon";

export default function Landing({ onLogin, onSignup }) {
  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">
          <Icon name="star" size={20} />
          Smart Internship Finder
        </div>
        <div className="nav-right">
          <button className="btn-text" onClick={onLogin}>Login</button>
          <button className="btn-primary" onClick={onSignup}>Get Started</button>
        </div>
      </nav>

      <section className="hero">
        <h1>Find Internships <span className="text-primary">That Match You</span></h1>
        <p>Discover opportunities that align with your skills, interests, and career goals. Let AI do the heavy lifting while you focus on landing your dream internship.</p>
        
        <div className="button-group">
          <button className="btn-primary" onClick={onSignup}>Get Started</button>
          <button className="btn-outline" onClick={onLogin}>Browse Internships</button>
        </div>

        <div className="hero-image">
          <div className="image-bg"></div>
          <div className="badge">
            <div className="percentage">92%</div>
            <div>
              <strong>Perfect Match!</strong>
              <span>Frontend Developer Intern</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands of students who found their dream internships</p>
        <button className="btn-light" onClick={onSignup}>Get Started for Free</button>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="logo-secondary">
              <Icon name="star" size={16} />
              Smart Internship Finder
            </div>
            <p>Connecting talented students with amazing opportunities</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Features</li>
              <li>How It Works</li>
              <li>Benefits</li>
            </ul>
          </div>

          <div>
            <h4>Connect With Us</h4>
            <ul>
              {[
                ["twitter", "Twitter"],
                ["linkedin", "LinkedIn"],
                ["github", "GitHub"],
                ["instagram", "Instagram"],
              ].map(([icon, label]) => (
                <li key={icon}>
                  <Icon name={icon} size={15} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
