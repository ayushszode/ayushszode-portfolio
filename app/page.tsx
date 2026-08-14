import Reveal from "@/components/Reveal";
import ToolStrip from "@/components/ToolStrip";
import ProjectFilter from "@/components/ProjectFilter";
import ContactForm from "@/components/ContactForm";
import { publications, selectedCredentials, site, stats } from "@/lib/site";

const skills = [
  { title: "Data Analytics & BI", items: ["Power BI", "Power Query", "Advanced Excel", "Tableau", "DAX", "KPI Reporting", "Dashboard Design", "Data Cleaning", "Data Validation", "Exploratory Analysis"] },
  { title: "Programming & Databases", items: ["Python", "Pandas", "NumPy", "SQL", "Jupyter Notebook", "Matplotlib", "Plotly"] },
  { title: "Machine Learning & AI", items: ["scikit-learn", "Predictive Modelling", "Forecasting", "Classification", "Anomaly Detection", "Feature Engineering", "Generative AI", "LLMs", "Computer Vision"] },
  { title: "Cloud & Tools", items: ["GitHub", "Streamlit", "Databricks", "AWS Educate", "Google Cloud AI", "Vertex AI", "Google Cloud Skills Boost"] },
];

export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-grid" aria-hidden />
        <div className="hero-glow glow-one" aria-hidden />
        <div className="hero-glow glow-two" aria-hidden />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="availability"><span /> {site.availability}</div>
            <p className="eyebrow">@{site.handle} · {site.location}</p>
            <h1>Ayush Sanjay Zode</h1>
            <p className="hero-role">{site.role}</p>
            <p className="hero-lead">I turn complex data into clear, actionable business insights through analytics, dashboards, automation and predictive modelling.</p>
            <div className="hero-actions">
              <a className="button" href="#projects">View Projects</a>
              <a className="button button-secondary" href={site.resume} download>Download Resume</a>
              <a className="icon-link" href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="icon-link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Analytics workflow">
            <div className="panel-top"><span>Analytics workflow</span><i>LIVE</i></div>
            <div className="pipeline">
              {['Raw Data','Cleaning','Analysis','Modelling','Dashboard','Insights'].map((item, i) => <div className="pipeline-node" key={item}><b>{String(i+1).padStart(2,'0')}</b><span>{item}</span></div>)}
            </div>
            <div className="mini-chart" aria-hidden><i/><i/><i/><i/><i/><i/><i/><i/></div>
            <div className="panel-foot"><span>Business question</span><strong>→</strong><span>Decision-ready insight</span></div>
          </div>
        </div>
        <div className="container stats-strip">{stats.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
      </section>

      <section className="section" id="about"><div className="container two-column"><Reveal><span className="eyebrow">About me</span><h2>Analytics with a business purpose.</h2></Reveal><Reveal delay={80}><p className="large-copy">I’m an MSc Data Science & Artificial Intelligence candidate at the University of Liverpool with hands-on analytics experience across operational reporting, student-recruitment analysis, business intelligence and predictive modelling.</p><p>My work focuses on the full path from messy raw data to something a stakeholder can actually use: cleaning and validation, structured analysis, KPI reporting, interactive dashboards and clear recommendations. I’m particularly interested in Data Analyst, BI Analyst and business-focused analytics opportunities in the UK.</p></Reveal></div></section>

      <section className="section section-alt" aria-labelledby="what-i-do-title"><div className="container"><Reveal><span className="eyebrow">What I do</span><h2 id="what-i-do-title">Three ways I create value with data.</h2></Reveal><div className="service-grid">{[["01", "Data Analysis", "Clean, validate and explore structured data to uncover trends, patterns and decision-relevant insights."],["02", "Business Intelligence", "Build stakeholder-ready Power BI and Excel reporting with KPIs, data modelling and repeatable workflows."],["03", "Predictive Analytics", "Use Python and machine-learning workflows to evaluate patterns, forecast outcomes and communicate future outlooks."]].map(([num, title, text], i) => <Reveal key={title} delay={i*70}><article className="service-card"><span>{num}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>

      <section className="section tools-section"><div className="container"><Reveal><span className="eyebrow">Tools I work with</span><ToolStrip /></Reveal></div></section>

      <section className="section" id="experience"><div className="container"><Reveal><span className="eyebrow">Experience</span><h2>Hands-on analytics in real business settings.</h2></Reveal><div className="timeline"><Reveal><article className="timeline-item"><div className="timeline-marker"/><div className="timeline-date">Jan 2025 — Jul 2025</div><div className="timeline-content"><h3>Data Analyst Intern</h3><p className="company">MyEdBuddy · Noida, India · Hybrid</p><ul><li>Collected, cleaned, organised and validated operational and student-enquiry datasets for reporting and decision-making.</li><li>Analysed recruitment patterns by source city, study destination, university preference and scholarship category.</li><li>Prepared structured Excel reports and summaries that converted raw enquiry and enrollment information into clear business insights.</li></ul></div></article></Reveal><Reveal><article className="timeline-item"><div className="timeline-marker"/><div className="timeline-date">Apr 2021 — Mar 2023</div><div className="timeline-content"><h3>Data Analyst · Part-time</h3><p className="company">Snehal Enterprises · Nagpur, India</p><ul><li>Analysed operational datasets to identify recurring trends, data-quality issues and performance patterns.</li><li>Developed repeatable reporting workflows using Power Query, reducing repetitive manual data preparation.</li><li>Built interactive Power BI dashboards and communicated KPIs and findings to non-technical stakeholders.</li></ul></div></article></Reveal></div></div></section>

      <section className="section section-alt" id="projects"><div className="container"><Reveal><span className="eyebrow">Selected work</span><div className="section-heading-row"><div><h2>Projects built around real analytical questions.</h2><p>From business intelligence to forecasting and applied machine learning.</p></div><a className="text-link" href={site.github} target="_blank" rel="noreferrer">View GitHub ↗</a></div></Reveal><ProjectFilter /></div></section>

      <section className="section" id="skills"><div className="container"><Reveal><span className="eyebrow">Skills</span><h2>A practical analytics toolkit.</h2></Reveal><div className="skills-grid">{skills.map((group, i) => <Reveal key={group.title} delay={i*50}><article className="skill-group"><h3>{group.title}</h3><div className="skill-list">{group.items.map((x) => <span key={x}>{x}</span>)}</div></article></Reveal>)}</div></div></section>

      <section className="section section-alt" id="education"><div className="container"><Reveal><span className="eyebrow">Education</span><h2>Academic foundation.</h2></Reveal><div className="education-grid"><Reveal><article className="education-card"><span>Expected Sep 2026</span><h3>MSc Data Science & Artificial Intelligence</h3><p>University of Liverpool, United Kingdom</p><small>Current dissertation: UK Labour Market Forecasting and Workforce Analytics Using ONS Data.</small></article></Reveal><Reveal delay={60}><article className="education-card"><span>2020 — 2025</span><h3>BEng Electronics & Communications Engineering</h3><p>Vidyalankar Institute of Technology, India</p></article></Reveal></div></div></section>

      <section className="section" id="credentials"><div className="container"><Reveal><span className="eyebrow">Credentials</span><div className="section-heading-row"><div><h2>Selected certifications.</h2><p>Focused on analytics, BI, cloud and applied AI.</p></div><a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">View all credentials ↗</a></div></Reveal><div className="credential-grid">{selectedCredentials.map((credential, i) => <Reveal key={credential} delay={i*35}><div className="credential-card"><i>✓</i><span>{credential}</span></div></Reveal>)}</div></div></section>

      <section className="section section-alt" id="research"><div className="container"><Reveal><span className="eyebrow">Research & publications</span><h2>Research experience beyond dashboards.</h2></Reveal><div className="research-grid">{publications.map((title, i) => <Reveal key={title} delay={i*50}><article className="research-card"><span>International Journal of Science, Engineering & Technology · Nov 2024</span><h3>{title}</h3><p>Publication link will be added when the public source is available.</p></article></Reveal>)}</div></div></section>

      <section className="section contact-section" id="contact"><div className="container contact-grid"><Reveal><span className="eyebrow">Contact</span><h2>Let’s turn data into decisions.</h2><p className="large-copy">I’m open to Data Analyst and business-focused analytics opportunities in the UK.</p><div className="contact-links"><a href={`mailto:${site.email}`}><small>Email</small><strong>{site.email}</strong></a><a href={site.linkedin} target="_blank" rel="noreferrer"><small>LinkedIn</small><strong>Connect with me ↗</strong></a><a href={site.github} target="_blank" rel="noreferrer"><small>GitHub</small><strong>@{site.handle} ↗</strong></a></div></Reveal><Reveal delay={80}><ContactForm /></Reveal></div></section>
    </main>
  );
}
