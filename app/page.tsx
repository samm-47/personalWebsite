import './globals.css';

const HomePage = () => {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#about" className="navbar-link">About</a>
        <a href="#work" className="navbar-link">Work Experience</a>
        <a href="#portfolio" className="navbar-link">Portfolio</a>
        <a href="#resume" className="navbar-link">Resume</a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="home">
        <div className="hero">
          <img src="/circleHeadshot2.png" alt="Samir Patel" className="headshot" />
          <div className="hero-text">
            <h1>Samir Patel</h1>
            
            <div className="hero-buttons">
            <h2>Software Engineer </h2>
              <a href="https://github.com/samm-47" className="btn" target="_blank">
                <img src="/githubImage.png" alt="Github" className="github-icon" />
              </a>
              <a href="http://linkedin.com/in/samir-patel-80169622b" className="btn" target="_blank">
                <img src="/linkedin.png" alt="LinkedIn" className="linkedin-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
  <div className="about-content">
    <div className="about-text">
      <h2>About Me</h2>
      <p>
        Hello! I’m a student at <strong>Arizona State University</strong> pursuing a 
        <strong> Bachelor's and Master's in Computer Science</strong> with a 
        <strong> minor in Statistics</strong>. I have experience in software engineering, 
        and I am enthusiastic about expanding my knowledge in 
        <strong> Machine Learning</strong> and <strong>AI development</strong>.
      </p>
    </div>
    
  </div>
</section>


      <section id="work" className="work-experience">
  <h2>Work Experience</h2>
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>Software Engineering Intern - <a href="https://www.citizensbank.com" target="_blank" className="company-name citizens">Citizens Bank</a>💰</h3>
        <p>
          • Developed an adaptable validation framework to enable controlled access to application features
          by taking in an object and a list of validations via a JSON file, designed to be accessible for cross-team usage beyond the platform team.<br/>
          • Utilized the validation framework to create an asynchronous validation API that can validate and update the retrieved information. <br/>
          <br></br>
          <strong> Technical Skills Utilized: </strong> Java, SpringBoot, Intellij, MongoDB, REST APIs, Postman, Unit Testing
        </p>
      </div>
      <div className="timeline-date">
        <span>May 28th, 2024 - August 2nd, 2024</span>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>Software Engineering Intern - <a href="https://www.minvestfinance.com" target="_blank" className="company-name minvest">Minvest Finance</a>📈</h3>
        <p>
          • Participated in backend development for the Minvest Beta Version, enabling users to visualize the numerical variance between their target beta and the stock's beta through the use of web scraping.<br/>
          • Developed the MinvestED platform with React.js, enabling data storage for users to log back in and resume their sessions.<br/>
          • Developed and implemented a dynamic live progress bar feature for video playback and engineered real-time quiz functionality, delivering immediate feedback on user responses. <br/>
          <br></br>
          <strong> Technical Skills Utilized: </strong> React.js, Pandas, Flask, Python, Alpha Vantage API
        </p>
      </div>
      <div className="timeline-date">
        <span>December 28th, 2023 - March 13th, 2024</span>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>Software Engineering Intern - <a href="https://www.gm.com" target="_blank" className="company-name gm">General Motors</a>🛻</h3>
        <p>
          • Collaborated across multiple teams to enhance GM's Test Drive website through frontend and backend software development, optimizing the testing platform for various software applications within GMIT and Engineering.<br/>
          • Resulted in significant gains in testing capacity due to the integration of the dashboard and issue classification model.<br></br>
          <br></br>
          <strong> Technical Skills Utilized: </strong> React.js, Pandas, Flask, Azure DevOps Server, Natural Language Processing, SQL, Python
        </p>
      </div>
      <div className="timeline-date">
        <span>May 15th, 2023 - August 18th, 2023</span>
      </div>
    </div>
  </div>
</section>




      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <h2>Portfolio</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>InstaMeals 🥣</h3>
            <span className="project-date">December 2024 - Present</span>
            <p>Developed a Python application using the Google Gemini API to generate recipes from leftover ingredients, enabling users to save recipes, revisit them later, and send them via email. Currently serving 10 live users.</p>
            <a href="https://github.com/samm-47/InstaMeals" target="_blank" className="btn">
        <img src="/githubImage.png" alt="GitHub Logo" className="github-logo" />
      </a>
      <a href="https://instameals-tknk.onrender.com/" target="_blank" className="btn">
        <img src="/testIt.png" alt="Testing Project" className="test-logo" />
      </a>
          </div>
          <div className="project-card">
            <h3>Injury Prediction 🏀</h3>
            <span className="project-date">September 2024 - December 2024</span>
            <p>Developed a machine learning project using a Kaggle dataset to predict player injury likelihood, leveraging Random Forest and Logistic Regression models, with Logistic Regression achieving better accuracy (57%) and F1-score (0.60). Identified Training Intensity, Player Weight, and Player Height as key predictors.</p>
            <a href="https://github.com/samm-47/injuryPrediction" target="_blank" className="btn">
        <img src="/githubImage.png" alt="GitHub Logo" className="github-logo" />
      </a>
          </div>
          <div className="project-card">
            <h3>LLM-Powered Text Summarization Tool 📝</h3>
            <span className="project-date">September 2024 - November 2024</span>
            <p>Developed a web tool leveraging GPT-4 for generating concise text summaries. Built with Streamlit, it features adjustable summary lengths, file downloads, and multi-document uploads, enhancing usability and exploring API integrations.</p>
            <a href="https://github.com/samm-47/LLM-Powered-Text-Summarization-Tool" target="_blank" className="btn">
        <img src="/githubImage.png" alt="GitHub Logo" className="github-logo" />
      </a>
          </div>
        </div>
        <h3></h3>
        <div className="projects-grid">
        <div className="project-card">
            <h3> Pediatric Office Automation 🧑🏽‍⚕️</h3>
            <span className="project-date">January 2024 - May 2024</span>
            <p>Led a team of five in developing a Java-based healthcare application with portals for doctors, nurses, and patients. Managed timelines, resources, and task delegation while contributing as the primary developer. Implemented a real-time chat feature with automatic history saving for seamless communication with medical professionals.</p>
            
          </div>
          <div className="project-card">
            <h3>Amazon Stock Predictor 💸</h3>
            <span className="project-date">February 2023 - March 2023</span>
            <p>Created a Python-based web app utilizing machine learning to predict AMZN stock trends. Designed a tailored random forest model for reliable forecasts, integrating price movements, trading volumes, and financial indicators, with results validated through backtesting.</p>
            <a href="https://github.com/samm-47/Amazon-Stock-Predictor" target="_blank" className="btn">
        <img src="/githubImage.png" alt="GitHub Logo" className="github-logo" />
      </a>
          </div>
          <div className="project-card center-card">
          <h3>Additional Projects 🧑🏽‍💻</h3>
          <p>To view more projects, please visit the GitHub link below. Thank you!</p>
          <a href="https://github.com/samm-47" target="_blank" className="btn">
            <img src="/githubImage.png" alt="GitHub Logo" className="github-logo" />
          </a>
        </div>
          </div>
          
        
        
      </section>


      {/* Resume Section */}
      <section id="resume" className="resume">
      <h2>Resume</h2>
      <div className="pdf-container">
      <iframe src="/resume.pdf" width="100%" height="600px"></iframe>
      </div>
    </section>
    </div>
  );
};

export default HomePage;
