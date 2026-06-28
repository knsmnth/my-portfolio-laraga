import React, { useState, useEffect } from 'react';
import './App.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  tagClasses: string[];
  gradient: string;
  icon: string;
}

interface TimelineItem {
  id: number;
  badge: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Track scrolling to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setFormSubmitted(true);
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "ClassiFiber Mobile Application",
      category: "MOBILE APP",
      description: "A comprehensive fiber classification mobile application designed for farmers and agricultural experts to grade fibers in real-time.",
      tags: ["React Native", "TensorFlow Lite", "UI Design"],
      tagClasses: ["tag-green", "tag-blue", "tag-darkgreen"],
      gradient: "linear-gradient(135deg, #114B71, #2B694D)",
      icon: "📱"
    },
    {
      id: 2,
      title: "VSU Infirmary Ushering System",
      category: "WEB APPLICATION",
      description: "An automated ushering and patient queue management system designed for the VSU Infirmary to optimize clinic workflows.",
      tags: ["React", "Node.js", "PostgreSQL"],
      tagClasses: ["tag-green", "tag-blue", "tag-darkgreen"],
      gradient: "linear-gradient(135deg, #0F5238, #114B71)",
      icon: "🏥"
    },
    {
      id: 3,
      title: "Enterprise POS System",
      category: "DESKTOP APP",
      description: "A high-performance offline-first Point of Sale system for retail operations, featuring real-time inventory tracking and analytics.",
      tags: ["React", "Electron", "SQLite"],
      tagClasses: ["tag-green", "tag-blue", "tag-darkgreen"],
      gradient: "linear-gradient(135deg, #2B694D, #0F5238)",
      icon: "💼"
    },
    {
      id: 4,
      title: "Modern E-commerce Platform",
      category: "WEB APPLICATION",
      description: "A premium e-commerce platform built with focus on conversion rate optimization, lightning fast page loads, and elegant animations.",
      tags: ["Next.js", "Stripe API", "CSS Modules"],
      tagClasses: ["tag-green", "tag-blue", "tag-darkgreen"],
      gradient: "linear-gradient(135deg, #2D6A4F, #1b4332)",
      icon: "🛒"
    }
  ];

  const experience: TimelineItem[] = [
    {
      id: 1,
      badge: "JUL 2025 - SEPT 2025",
      role: "Software Engineer Intern",
      company: "Pixel8 Web Solutions",
      period: "July 2025 - September 2025",
      description: "Contributed to enterprise web development workflows, focusing on front-end scalability, component reuse, and integration tests."
    },
    {
      id: 2,
      badge: "QUALITY ASSURANCE FOCUS",
      role: "Quality Assurance Intern",
      company: "Wela School System",
      period: "January 2025 - April 2025",
      description: "Spearheaded regression testing and UI validation for school management modules, ensuring 99.9% release stability."
    },
    {
      id: 3,
      badge: "CREATIVE STRATEGY",
      role: "Graphic Designer",
      company: "City Investments Promotion & Tourism Office",
      period: "June 2023 - December 2024",
      description: "Developed visual identities, UI wireframes, and digital assets to promote local tourism and investment opportunities."
    }
  ];

  const education: EducationItem[] = [
    {
      id: 1,
      degree: "B.S. in Computer Science",
      institution: "Visayas State University",
      period: "2022 - 2026"
    },
    {
      id: 2,
      degree: "Secondary Education",
      institution: "Regional Science High School",
      period: "2016 - 2022"
    }
  ];

  const skills: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Vanilla CSS & Flexbox", level: 95 },
        { name: "HTML5 / Semantic Web", level: 95 }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js / Express", level: 80 },
        { name: "PostgreSQL / SQLite", level: 78 },
        { name: "RESTful API Design", level: 85 },
        { name: "Firebase integration", level: 75 }
      ]
    },
    {
      title: "Quality Assurance",
      skills: [
        { name: "Regression Testing", level: 90 },
        { name: "UI Validation", level: 88 },
        { name: "Integration Testing", level: 82 },
        { name: "Test Planning", level: 85 }
      ]
    },
    {
      title: "Creative Strategy",
      skills: [
        { name: "UI/UX Design (Figma)", level: 92 },
        { name: "Brand Identity", level: 88 },
        { name: "Graphic Design", level: 90 },
        { name: "Digital Prototyping", level: 85 }
      ]
    }
  ];

  return (
    <div className="portfolio-app">
      {/* Navigation Header */}
      <header className="main-header">
        <div className="header-container">
          <a href="#about" className="logo-text">
            K<span>L</span>
          </a>

          <button 
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            id="nav-toggle"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`main-nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              <li>
                <a 
                  href="#about" 
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={activeSection === 'projects' ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className={activeSection === 'experience' ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={activeSection === 'skills' ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
            <a href="#contact" className="nav-resume-btn badge-geist">
              Let's Talk
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        <div className="container hero-container">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-geist">AVAILABLE FOR HIRE</span>
            </div>
            
            <h1 className="hero-title">
              Bridging Rigor <br />
              with Organic Vitality
            </h1>
            
            <p className="hero-description text-inter">
              I am a Software Engineer and Designer. I specialize in building robust web and mobile software systems with meticulous front-end scalability, verified quality assurance, and creative digital strategies.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary badge-geist">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary badge-geist">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="image-wrapper">
              <div className="image-overlay"></div>
              
              {/* Premium abstract SVG profile graphic to replace placeholder */}
              <svg className="hero-svg-avatar" viewBox="0 0 576 576" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0F5238" />
                    <stop offset="50%" stopColor="#2B694D" />
                    <stop offset="100%" stopColor="#B0F1CC" />
                  </linearGradient>
                  <linearGradient id="bgGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F3F4F0" />
                    <stop offset="100%" stopColor="#EDEEEA" />
                  </linearGradient>
                  <clipPath id="avatarClip">
                    <rect width="576" height="576" rx="48" />
                  </clipPath>
                </defs>
                <g clipPath="url(#avatarClip)">
                  <rect width="576" height="576" fill="url(#bgGrad)" />
                  <circle cx="288" cy="288" r="220" fill="url(#avatarGrad)" opacity="0.15" />
                  <circle cx="288" cy="288" r="160" fill="url(#avatarGrad)" opacity="0.3" />
                  {/* Styled abstract silhouette/representation of a builder */}
                  <path d="M288 160 C230 160 210 200 210 250 C210 300 230 330 288 330 C346 330 366 300 366 250 C366 200 346 160 288 160 Z" fill="url(#avatarGrad)" />
                  <path d="M160 490 C160 410 210 370 288 370 C366 370 416 410 416 490" stroke="url(#avatarGrad)" strokeWidth="32" strokeLinecap="round" />
                  <path d="M120 440 L456 440" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="16 16" opacity="0.5" />
                  <circle cx="160" cy="160" r="12" fill="#B0F1CC" />
                  <circle cx="420" cy="380" r="8" fill="#2B694D" />
                </g>
              </svg>
              
              {/* Floating decorative element from Figma */}
              <div className="floating-card">
                <div className="floating-card-shadow"></div>
                <div className="floating-card-content">
                  <div className="floating-icon-wrapper">
                    <div className="pulse-indicator"></div>
                    <span className="floating-icon">💻</span>
                  </div>
                  <div className="floating-text-wrapper">
                    <span className="floating-title badge-geist">ACTIVE NOW</span>
                    <span className="floating-subtitle text-inter">Laraga Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="projects-header">
            <div className="projects-title-block">
              <h2 className="section-title">Selected Projects</h2>
              <p className="section-subtitle text-inter">
                A selection of applications demonstrating backend integration, meticulous UI scaling, and robust user-oriented workflows.
              </p>
            </div>
            {/* Custom Pagination Line Dots from Figma */}
            <div className="pagination-dots">
              <span className="dot dot-active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-image-container" style={{ background: project.gradient }}>
                  <div className="project-image-overlay"></div>
                  <div className="project-icon-placeholder">{project.icon}</div>
                  <span className="project-badge badge-geist">{project.category}</span>
                </div>
                
                <div className="project-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-description text-inter">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={`project-tag badge-geist ${project.tagClasses[idx] || ''}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="experience-section">
        <div className="container experience-container">
          {/* Left Column: Heading + Education */}
          <div className="experience-left">
            <h2 className="section-title">Experience</h2>
            <p className="experience-intro text-inter">
              A trajectory focused on quality, design, and robust software implementation across varied tech domains.
            </p>

            <div className="education-box">
              <h3 className="education-title">Education</h3>
              <div className="education-list">
                {education.map((edu) => (
                  <div key={edu.id} className="education-item">
                    <h4 className="edu-degree text-inter">{edu.degree}</h4>
                    <p className="edu-institution text-inter">{edu.institution} | {edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="experience-right">
            <div className="timeline-connector"></div>
            
            <div className="timeline-list">
              {experience.map((exp) => (
                <div key={exp.id} className="timeline-item-wrapper">
                  <div className="timeline-dot-container">
                    <div className="timeline-dot-outer"></div>
                    <div className="timeline-dot-inner"></div>
                  </div>
                  
                  <div className="timeline-card">
                    <span className="timeline-badge badge-geist">{exp.badge}</span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company text-inter">{exp.company}</h4>
                    <p className="timeline-desc text-inter">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="skills-header">
            <h2 className="section-title">Skills & Capabilities</h2>
            <p className="section-subtitle text-inter">
              A versatile toolset combining rigorous software development with creative visual strategies.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((category, idx) => (
              <div key={idx} className="skills-card">
                <h3 className="skills-category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name text-inter">{skill.name}</span>
                        <span className="skill-percentage badge-geist">{skill.level}%</span>
                      </div>
                      <div className="skill-progress-bar">
                        <div className="skill-progress-fill" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-card">
            <div className="contact-content-inner">
              <h2 className="contact-title">Let's build something together</h2>
              <p className="contact-desc text-inter">
                I am currently open to internships, full-time positions, and freelance opportunities. Drop a message or email me directly at <a href="mailto:laragakeanasamantha@gmail.com" className="email-link">laragakeanasamantha@gmail.com</a>.
              </p>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="form-name" className="badge-geist">Name</label>
                    <input 
                      id="form-name"
                      type="text" 
                      placeholder="Your Name" 
                      value={contactForm.name} 
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="form-email" className="badge-geist">Email</label>
                    <input 
                      id="form-email"
                      type="email" 
                      placeholder="Your Email" 
                      value={contactForm.email} 
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} 
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="form-message" className="badge-geist">Message</label>
                  <textarea 
                    id="form-message"
                    rows={4} 
                    placeholder="Your message details..." 
                    value={contactForm.message} 
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit badge-geist">
                  Send Message
                </button>
              </form>

              {formSubmitted && (
                <div className="form-success-alert text-inter">
                  Thank you! Your message has been sent successfully. I will get back to you shortly.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container footer-container">
          <span className="footer-copyright text-inter">
            &copy; {new Date().getFullYear()} Keana Laraga. All rights reserved.
          </span>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="badge-geist" id="link-github">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="badge-geist" id="link-linkedin">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
