import Link from "next/link";

const github = "https://github.com/ayushszode/consumer-credit-risk-platform";
const live = "https://ayushszode-credit-risk.streamlit.app";
const cover = "https://raw.githubusercontent.com/ayushszode/consumer-credit-risk-platform/main/images/cover.png";
const appShot = "https://raw.githubusercontent.com/ayushszode/consumer-credit-risk-platform/main/images/app_demo.png";

const kpis = [
  { label: "Loans in scope", value: "2012–2015", note: "36-month LendingClub loans" },
  { label: "Test year", value: "2015", note: "Out-of-time, never used for training" },
  { label: "Models compared", value: "3", note: "Scorecard, boosting, lender-grade benchmark" },
  { label: "Automated tests", value: "41", note: "Run on GitHub Actions" },
  { label: "Dashboard pages", value: "5", note: "Live Streamlit app" },
];

export default function ConsumerCreditRiskPage(){return <main className="case"><div className="wrap">
  <Link className="back" href="/#projects">← Back to projects</Link>
  <p className="kicker">CREDIT RISK · MACHINE LEARNING · NEW</p>
  <h1>Consumer Credit Risk Platform</h1>
  <p className="caseLead">An end-to-end credit decision project on public LendingClub loan data: from a raw loan file to an explainable approve, refer or decline decision, with the validation, loss estimate and monitoring a lender would need before using a model.</p>
  <div className="tags"><span>Python</span><span>SQL</span><span>DuckDB</span><span>scikit-learn</span><span>Logistic Regression</span><span>Gradient Boosting</span><span>FastAPI</span><span>Streamlit</span></div>
  <div className="actions"><a className="btn" href={github} target="_blank">View GitHub ↗</a><a className="btn ghost" href={live} target="_blank">Open live demo ↗</a></div>
  <img className="casePreview" src={cover} alt="Consumer Credit Risk Platform overview"/>
  <div className="caseKpis">{kpis.map(k=><article key={k.label}><span>{k.label}</span><b>{k.value}</b><small>{k.note}</small></article>)}</div>
  <div className="caseSections">
    <article><b>01</b><div><h2>Business problem</h2><p>A personal lender has to decide quickly who to lend to and be able to explain every decision to the customer, a credit committee and a regulator. A model score on its own is not enough: the lender also needs cut-offs, an estimate of losses, a fair way to compare a new model with the current one, and a way to notice when the model stops working.</p></div></article>
    <article><b>02</b><div><h2>Data and population</h2><p>36-month individual loans issued between 2012 and 2015, whose outcomes are known. A loan counts as a default if it was charged off or defaulted at any point in its life. The data is cleaned with SQL in DuckDB, and every exclusion rule records how many loans it removed. The model is trained on 2012–2013, tuned on 2014 and tested once on 2015.</p></div></article>
    <article><b>03</b><div><h2>Leakage control</h2><p>Every column in the file is listed in a feature register. Fields only known after a loan was funded, such as payments and recoveries, are blocked, and the pipeline stops if one reaches a model. LendingClub&apos;s own grade and interest rate are kept out of the main model and used only in a separate benchmark.</p></div></article>
    <article><b>04</b><div><h2>Scorecard vs gradient boosting</h2><p>The main model is a weight-of-evidence scorecard (600 points at odds of 20 to 1, 20 points to double the odds), so every decision can be traced to points and reason codes. A gradient boosting model is the challenger. The rule for replacing the scorecard was set before the test year was scored: boosting must improve AUC by at least 0.01, with a confidence interval above zero, and stay calibrated.</p></div></article>
    <article><b>05</b><div><h2>Lending policy and expected loss</h2><p>Predicted default risk is turned into five risk bands and approve, refer and decline cut-offs, with the approval rate and bad rate shown for every threshold. Expected loss is estimated as PD × LGD × EAD, with a sensitivity table, and the project also sets out how a champion and challenger would be tested live.</p></div></article>
    <article><b>06</b><div><h2>Monitoring and delivery</h2><p>Population Stability Index checks the score and every feature quarter by quarter. Decisions are served with plain-English reasons through a FastAPI service and a five-page Streamlit app, and 41 automated tests run on every change.</p></div></article>
  </div>
  <img className="casePreview" src={appShot} alt="Live Streamlit demo: scoring an applicant"/>
  <div className="integrityNote"><b>Accuracy note</b><p>The live demo currently runs on synthetic data and says so on every page; results from the full LendingClub run will be added once it is complete. The data comes from a US lender between 2012 and 2018 and covers approved loans only, so the model is not presented as representative of UK lending. Every number shown comes from the pipeline&apos;s own output files.</p></div>
  <Link className="textLink" href="/#contact">Discuss this project →</Link>
</div></main>}
