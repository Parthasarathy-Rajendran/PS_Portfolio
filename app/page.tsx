"use client";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <h1>Parthasarathy R</h1>
        <p> React.js Software Developer | MERN Full Stack Developer </p>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          Hi, I’m <strong>Parthasarathy</strong> — Dedicated Software Developer
          with a diploma in Computer Science and{" "}
          <strong>1 year of hands-on experience</strong>, including as a junior
          Software Developer at<strong> Kyvor Genomics</strong>. Specialized in
          React.JS and frontend development, with a strong focus on building
          responsive, high-performance web interfaces and have built more than
          <strong>15+ client websites</strong> through{" "}
          <strong>Innovation Digital Solutions</strong>. Proficient in
          JavaScript, HTML, CSS and backend integration, with a solid
          understanding of REST APIs and full-stack workflows. Passionate about
          delivering seamless, user-friendly experiences and writing clean,
          maintainable code.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>
            <strong>Frontend:</strong> React.js, Next.js, JavaSript, HTML, CSS,
            Tailwind
          </li>
          <li>
            <strong>Backend:</strong> Next.js, Express.js
          </li>
          <li>
            <strong>Database:</strong> MongoDB, MySQL,
          </li>
          <li>
            <strong>Mobile:</strong> Flutter, REST API integration
          </li>
          <li>
            <strong>Other:</strong> GitHub
          </li>
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section id="about" className="section">
        <h2>Experience</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Left side */}
          <div>
            <p>
              <b>React JS Software Developer -</b>
            </p>
            <p>
              <i>KYVOR GENOMICS Pvt Ltd</i>
            </p>
          </div>

          {/* Right side */}
          <div style={{ textAlign: "right" }}>
            <p>Jun-2024 to Nov-2024</p>
            <p>Chennai, Tamil Nadu, India</p>
          </div>
        </div>
        <p>
          • Developed and maintained responsive, data-driven web applications
          using React.js, Redux, HTML5, CSS3, and JavaScript. <br />
          • Designed PGx pipeline interfaces with advanced form handling and
          file upload capabilities for patient-specific genomic analysis.
          <br />
          • Implemented Excel-to-PDF clinical report generation using xlsx and
          jsPDF, ensuring accuracy and consistency across multi-page reports.
          <br />
          • Integrated RESTful APIs to dynamically manage and display patient
          and genomic data in real-time.
          <br />
          • Optimized application performance and rendering efficiency,
          achieving over 50% improvement in load times and responsiveness.
          <br />• Ensured cross-platform compatibility and modern UI/UX using
          Bootstrap and Tailwind CSS.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Left side */}
          <div>
            <p>
              <b>Frontend Developer -</b>
            </p>
            <p>
              <i>INNOVATIVE DIGITAL SOLUTION</i>
            </p>
          </div>

          {/* Right side */}
          <div style={{ textAlign: "right" }}>
            <p>Oct-2023 To Apr-2024</p>
            <p>Chennai, Tamil Nadu, India</p>
          </div>
        </div>
        <p>
          • Delivered 15+ responsive, client-specific websites using React.js,
          HTML, CSS, and JavaScript.
          <br />
          • Customized templates and integrated minor branding tweaks to meet
          client requirements.
          <br />
          • Ensured cross-browser compatibility and optimized performance across
          devices.
          <br />
          • Collaborated directly with clients to deliver projects on time.
          <br />
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>🧠 Data Visualization Dashboard (MERN)</h3>
          <p>
            Data-driven dashboard using Chart.js, MongoDB, and API integration.
            Includes filtering and region-based visual insights.
          </p>
        </div>

        <div className="project-card">
          <h3>🌐 Kyvor Genomics Website</h3>
          <p>
            Developed the official company website to showcase services and
            enable user interaction. Built a responsive frontend using HTML,
            CSS, and JavaScript, and implemented backend functionality using PHP
            for dynamic content and form submissions. Ensured cross-browser
            compatibility and optimized overall performance.
          </p>
        </div>

        <div className="project-card">
          <h3>🌐 Sivan Printers Website</h3>
          <p>
            Designed and developed a basic informational website for Sivan
            Printers using HTML, CSS, and JavaScript. Ensured mobile
            responsiveness, clean layout, and easy navigation to effectively
            showcase the printing services offered by the business.
          </p>
        </div>

        <div className="project-card">
          <h3>📱 KitPush Fitness Tracker</h3>
          <p>
            React + Java + MySQL fitness tracking app with motivational design
            and user progress tracking.
          </p>
        </div>

        <div className="project-card">
          <h3>🛍️ Flutter E-commerce App</h3>
          <p>
            E-commerce app using Flutter + fakestoreapi.com with authentication,
            product filters, and cart features.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Left side */}
          <div>
            <p>
              <b>Diploma in Computer Science Engineering -</b>
            </p>
            <p>
              <i>Thai Moogambigai Polytechnic College</i>
            </p>
          </div>

          {/* Right side */}
          <div style={{ textAlign: "right" }}>
            <p>2019 - 2022</p>
            <p>Mogappair West, Chennai, Tamil Nadu, India</p>
          </div>
        </div>
        <p>
          Completed diploma with a strong foundation in programming, web
          technologies, and database management. Actively participated in
          development projects and gained practical knowledge of full-stack
          workflows.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>📧 Email: parthasarathy.dev@gmail.com</p>
        <p>💼 LinkedIn: www.linkedin.com/in/parthasarathy2001</p>
        <p>📍 Tamil Nadu, India</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          © 2025 <span>Parthasarathy R</span> | Built with ❤️ using Next.js
        </p>
      </footer>
    </div>
  );
}
