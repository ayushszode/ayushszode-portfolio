import Link from "next/link";

const github = "https://github.com/ayushszode/motor-insurance-pricing-analytics";
const dashboard = "https://raw.githubusercontent.com/ayushszode/motor-insurance-pricing-analytics/main/images/excel_dashboard_preview.png";

const kpis = [
  { label: "Policies", value: "678,013", note: "Full frequency portfolio" },
  { label: "Policy-years exposure", value: "358,499", note: "Observed exposure" },
  { label: "Claims / 100 policy-years", value: "10.07", note: "Portfolio claim frequency" },
  { label: "Average claim severity", value: "2,265.51", note: "Matched severity rows" },
  { label: "Pure premium", value: "228.14", note: "Frequency × severity benchmark" },
];

export default function MotorInsurancePricingPage(){return <main className="case"><div className="wrap">
  <Link className="back" href="/#projects">← Back to projects</Link>
  <p className="kicker">INSURANCE PRICING · ACTUARIAL ANALYTICS · COMPLETED</p>
  <h1>Motor Insurance Pricing & Risk Analytics</h1>
  <p className="caseLead">An independent pricing portfolio project using the freMTPL2 French Motor Third-Party Liability dataset to analyse claim frequency, claim severity, exposure, rating-factor risk and indicated pure premium across a large motor insurance portfolio.</p>
  <div className="tags"><span>Python</span><span>Excel</span><span>SQL</span><span>Poisson GLM</span><span>Gamma GLM</span><span>Risk Segmentation</span></div>
  <a className="btn" href={github} target="_blank">View GitHub ↗</a>
  <img className="casePreview" src={dashboard} alt="Motor insurance pricing dashboard preview"/>
  <div className="caseKpis">{kpis.map(k=><article key={k.label}><span>{k.label}</span><b>{k.value}</b><small>{k.note}</small></article>)}</div>
  <div className="caseSections">
    <article><b>01</b><div><h2>Business problem</h2><p>Insurance pricing teams need to understand how often claims are expected to occur, how costly those claims may be and which policy characteristics are associated with higher or lower risk. The project translates those questions into a transparent frequency–severity pricing workflow.</p></div></article>
    <article><b>02</b><div><h2>Dataset & preparation</h2><p>The analysis uses the freMTPL2 frequency and severity tables. The frequency data contains 678,013 policy records with exposure, claim count and rating factors such as driver age, vehicle age, Bonus-Malus, vehicle power, area, fuel type, density and region. Claim-level severity records are linked using policy ID.</p></div></article>
    <article><b>03</b><div><h2>Pricing framework</h2><p>The project separates pricing into expected claim frequency and expected claim severity. These are combined using the classical relationship: indicated pure premium = expected annual claim frequency × expected claim severity.</p></div></article>
    <article><b>04</b><div><h2>Statistical modelling</h2><p>The reproducible Python workflow includes an interpretable Poisson GLM with a log-exposure offset for claim frequency and a Gamma GLM with a log link for positive claim severity. This supports multivariate analysis alongside the descriptive one-factor portfolio views.</p></div></article>
    <article><b>05</b><div><h2>Portfolio insights</h2><p>Driver age and Bonus-Malus show strong descriptive differentiation. The 18–25 driver-age band has an indicated pure premium of 896.64, around 3.93× the portfolio benchmark, while the Bonus-Malus &gt;100 band reaches 765.88 and around 3.36× the benchmark. These are univariate signals rather than causal conclusions.</p></div></article>
    <article><b>06</b><div><h2>Excel pricing model</h2><p>The Excel deliverable presents portfolio KPIs, segment-level relativities and an illustrative scenario calculator. Commercial loadings are explicitly labelled as assumptions so the workbook demonstrates pricing logic without presenting the output as a production insurance quote.</p></div></article>
  </div>
  <div className="integrityNote"><b>Accuracy note</b><p>The source data is historical French motor TPL data and is not presented as a current UK insurance book. The project distinguishes descriptive one-factor relativities from the multivariate GLM workflow and clearly separates pure premium from broader commercial pricing requirements.</p></div>
  <Link className="textLink" href="/#contact">Discuss this project →</Link>
</div></main>}