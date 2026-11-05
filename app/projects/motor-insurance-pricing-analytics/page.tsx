import Link from "next/link";

const github = "https://github.com/ayushszode/motor-insurance-pricing-analytics";
const raw = "https://raw.githubusercontent.com/ayushszode/motor-insurance-pricing-analytics/main";
const dashboard = `${raw}/images/excel_dashboard_preview.png`;
const figures = [
  { src: `${raw}/research_outputs/figures/frequency_calibration.png`, caption: "Claim frequency on held-out policies: predicted and observed stay close across all ten risk groups." },
  { src: `${raw}/research_outputs/figures/severity_calibration.png`, caption: "Claim cost on held-out policies: right on average, but far off for the cheapest and most expensive groups." },
];

const kpis = [
  { label: "Policies", value: "678,013", note: "358,499 policy-years of exposure" },
  { label: "Claims / 100 policy-years", value: "10.07", note: "Across the whole portfolio" },
  { label: "Pure premium", value: "228.14", note: "Per policy-year, frequency × cost" },
  { label: "Frequency model", value: "1.0065", note: "Observed / expected, held-out policies" },
  { label: "Drivers 18–25", value: "3.93×", note: "Portfolio pure premium, one factor" },
];

export default function MotorInsurancePricingPage(){return <main className="case"><div className="wrap">
  <Link className="back" href="/#projects">← Back to projects</Link>
  <p className="kicker">INSURANCE PRICING · ACTUARIAL ANALYTICS · COMPLETED</p>
  <h1>Motor Insurance Pricing & Risk Analytics</h1>
  <p className="caseLead">How much should a motor insurer expect each policy to cost it in claims? I worked it out the way a pricing team would, on 678,013 French motor policies: split the risk into how often people claim and how much a claim costs, model each one with a GLM, and test the result on policies held back.</p>
  <div className="tags"><span>Python</span><span>statsmodels</span><span>Excel</span><span>SQL</span><span>Poisson GLM</span><span>Gamma GLM</span><span>GitHub Actions</span></div>
  <div className="actions"><a className="btn" href={github} target="_blank">View GitHub ↗</a></div>
  <img className="casePreview" src={dashboard} alt="Excel pricing dashboard"/>
  <div className="caseKpis">{kpis.map(k=><article key={k.label}><span>{k.label}</span><b>{k.value}</b><small>{k.note}</small></article>)}</div>
  <div className="caseSections">
    <article><b>01</b><div><h2>The question</h2><p>An insurer has to charge each customer enough to cover the claims they&apos;re likely to make, and be able to explain why one customer pays more than another. That needs two answers for every type of policy: how often it&apos;s likely to claim, and how much a claim is likely to cost. Multiply them and you get the pure premium.</p></div></article>
    <article><b>02</b><div><h2>The data, and its catch</h2><p>The public freMTPL2 dataset: 678,013 policies with 36,102 claims, and a second file of claim amounts. The two don&apos;t line up: there are only 26,639 claim amounts, and 9,117 policies have more claims than amounts. Instead of forcing them to agree, I report the pure premium and the observed loss cost from the claims that do have amounts as two separate numbers.</p></div></article>
    <article><b>03</b><div><h2>One factor at a time</h2><p>Drivers aged 18 to 25 come out at 3.93 times the portfolio pure premium (896.64 against 228.14), and the worst Bonus-Malus band at 3.36 times. Newer cars claim more often, and area B is the most expensive because its claims are larger. These views can mislead, though: young drivers also tend to have high Bonus-Malus scores, so the next step looks at every factor together.</p></div></article>
    <article><b>04</b><div><h2>The models</h2><p>A Poisson GLM for claim frequency, with exposure as an offset so a policy held for half a year counts as half a year, and a Gamma GLM for claim cost. Both use driver age, vehicle age, Bonus-Malus, vehicle power, area, fuel, region, brand and population density. One 80/20 split by policy keeps all of a policy&apos;s claims on the same side of the test.</p></div></article>
    <article><b>05</b><div><h2>What held up, and what didn&apos;t</h2><p>The frequency model works: on held-out policies observed claims were 1.0065 times the prediction, and it ranks risk well. With everything else equal, the worst Bonus-Malus band claims 5.3 times as often as the best. Age turned out to matter more for cost: young drivers&apos; claims are expected to cost about twice as much. The claim-cost model gets the overall total right (0.9893) but not the differences between groups, because a few very large claims pull it around. Combined, actual losses on held-out policies were 75% of the prediction. I wrote the whole analysis up as a research paper.</p></div></article>
    <article><b>06</b><div><h2>Excel pricing workbook</h2><p>Six sheets: a guide, the dashboard, segment analysis, an illustrative pricing calculator, its assumptions and the data tables. The expense and profit loadings in the calculator are made-up assumptions and labelled that way. It&apos;s there to show how a price is built up, not to quote real premiums.</p></div></article>
  </div>
  <h2 className="galleryTitle">Testing on held-out policies</h2>
  <div className="appGallery pair">{figures.map(f=><figure key={f.src}><img src={f.src} alt={f.caption} loading="lazy"/><figcaption>{f.caption}</figcaption></figure>)}</div>
  <div className="integrityNote"><b>Accuracy note</b><p>The data is historical French motor third-party liability data, so it isn&apos;t presented as a current UK insurance book. The project stops at the pure premium: a real price also needs expenses, commission, reinsurance, capital and governance review. Every number here comes from the project&apos;s own results files.</p></div>
  <Link className="textLink" href="/#contact">Discuss this project →</Link>
</div></main>}
