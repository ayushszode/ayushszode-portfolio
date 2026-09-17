import Link from "next/link";

const github = "https://github.com/ayushszode/fpa-financial-performance-analysis";
const dashboard = "https://raw.githubusercontent.com/ayushszode/fpa-financial-performance-analysis/main/images/executive_dashboard.png";

const kpis = [
  { label: "YTD Revenue", value: "£45.04m", note: "+1.0% vs Budget" },
  { label: "YTD EBITDA", value: "£9.05m", note: "−8.7% vs Budget" },
  { label: "Gross Margin", value: "39.7%", note: "vs 41.2% Budget" },
  { label: "FY Revenue Forecast", value: "£69.71m", note: "+0.8% vs Budget" },
  { label: "FY EBITDA Forecast", value: "£14.52m", note: "−5.6% vs Budget" },
];

export default function FpaProjectPage(){return <main className="case"><div className="wrap">
  <Link className="back" href="/#projects">← Back to projects</Link>
  <p className="kicker">FP&A · FINANCIAL ANALYTICS · COMPLETED</p>
  <h1>FP&A Financial Performance & Budget Variance Analysis</h1>
  <p className="caseLead">An independent FP&A portfolio project for fictional UK multi-channel retailer Northstar Home Retail, using a synthetic management-accounting dataset to evaluate Actual vs Budget performance, profitability, operating costs and full-year outlook.</p>
  <div className="tags"><span>Excel</span><span>SQL</span><span>Python</span><span>Budget vs Actual</span><span>Variance Analysis</span><span>Forecasting</span></div>
  <a className="btn" href={github} target="_blank">View GitHub ↗</a>
  <img className="casePreview" src={dashboard} alt="FP&A executive dashboard preview"/>
  <div className="caseKpis">{kpis.map(k=><article key={k.label}><span>{k.label}</span><b>{k.value}</b><small>{k.note}</small></article>)}</div>
  <div className="caseSections">
    <article><b>01</b><div><h2>Business problem</h2><p>Management needed to understand whether Revenue was ahead or behind Budget, whether top-line growth was converting into profit, which categories, regions and channels were driving variance, where Gross Margin pressure was emerging and what current performance implied for the full-year outlook.</p></div></article>
    <article><b>02</b><div><h2>Dataset & preparation</h2><p>The project contains 1,200 Actual rows, 720 Budget rows and 720 Forecast rows across 4 regions, 3 sales channels and 5 product categories. Actual, Budget and Forecast records were structured and aligned by Date, Region, Channel and Category, with checks for Revenue and EBITDA completeness and positive Revenue values.</p></div></article>
    <article><b>03</b><div><h2>Analysis</h2><p>Budget vs Actual variance and variance percentages were calculated across Revenue and EBITDA, alongside COGS, Gross Profit, Gross Margin, Operating Expenses and EBITDA Margin. SQL and Python supported category, regional, channel, logistics-cost, rolling-average and management-exception analysis.</p></div></article>
    <article><b>04</b><div><h2>Forecast method</h2><p>The full-year forecast uses January–August 2026 Actual results and September–December Budget values adjusted using YTD category achievement. It is intentionally transparent and interview-friendly, and is not a machine-learning forecast.</p></div></article>
    <article><b>05</b><div><h2>Key insights</h2><p>YTD Revenue was approximately 1.0% above Budget, but EBITDA was approximately 8.7% below plan and Gross Margin was 39.7% versus 41.2% Budget. Garden was about 4.1% below YTD Revenue Budget, while Building Materials (+5.8%) and Flooring (+6.1%) performed strongly. Online was the strongest channel and North had the highest Logistics Cost ratio.</p></div></article>
    <article><b>06</b><div><h2>Management recommendations</h2><p>Review promotional intensity in weaker categories, investigate supplier and input-cost drivers behind margin pressure, perform a logistics-efficiency review in the North, protect growth in stronger categories, monitor contribution profitability alongside Revenue and refresh the rolling forecast monthly.</p></div></article>
  </div>
  <div className="integrityNote"><b>Accuracy note</b><p>The dataset is fully synthetic. Excel is the completed core financial model; SQL and Python support the analysis. Power BI DAX measures and a build guide were prepared only as an optional future extension — no .pbix dashboard is claimed.</p></div>
  <Link className="textLink" href="/#contact">Discuss this project →</Link>
</div></main>}
