import Icon from "../ui/Icon";
import internImg from "./intern.jpg";
import "./Landing.css";



export default function Landing({ onLogin, onSignup }) {
  const WHY_CARDS = [
  {
    icon: "briefcase",
    title: "Real Work Experience",
    desc: "Build hands-on skills that classrooms can't teach. Work on live projects and add real achievements to your resume.",
  },
  {
    icon: "users",
    title: "Grow Your Network",
    desc: "Connect with industry professionals, mentors, and peers who can open doors throughout your career.",
  },
  {
    icon: "trending-up",
    title: "Boost Your Career",
    desc: "Interns are 70% more likely to receive full-time job offers. Turn your internship into a stepping stone.",
  },
  {
    icon: "star",
    title: "Discover Your Path",
    desc: "Explore different industries and roles before committing. Find what truly excites and motivates you.",
  },
  {
    icon: "award",
    title: "Stand Out to Employers",
    desc: "Graduates with internship experience earn more and get hired faster than those without it.",
  },
  {
    icon: "zap",
    title: "Learn Agile & Fast",
    desc: "Adapt to real workplace dynamics, deadlines, and teamwork — skills no textbook can fully prepare you for.",
  },
];

  return (
    <div className="container">
      {/* ── Nav ── */}
      <nav className="nav">
        <div className="logo">
          <Icon name="star" size={20} />
          iFinn
        </div>
        <div className="nav-right">
          <button className="btn-text" onClick={onLogin}>Login</button>
          <button className="btn-primary" onClick={onSignup}>Get Started</button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Internships <span className="text-primary">That Match You</span></h1>
          <p>Discover opportunities that align with your skills, interests, and career goals. Let AI do the heavy lifting while you focus on landing your dream internship.</p>
          <div className="button-group">
            <button className="btn-primary" onClick={onSignup}>Get Started</button>
            <button className="btn-outline" onClick={onLogin}>Browse Internships</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={internImg} alt="Interns collaborating in a modern office" />
        </div>
      </section>

      {/* ── Why Apply ── */}
      <section className="why">
        <div className="why-header">
          <span className="why-badge">Why It Matters</span>
          <h2>Why Apply for Internships?</h2>
          <p>Internships are the fastest bridge between education and a thriving career. Here's what you gain.</p>
        </div>

        <div className="why-grid">
          {WHY_CARDS.map(({ icon, title, desc }) => (
            <div className="why-card" key={title}>
              <div className="why-icon">
                <Icon name={icon} size={22} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands of students who found their dream internships</p>
        <button className="btn-light" onClick={onSignup}>Get Started for Free</button>
      </section>

      {/* ── Footer ── */}
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