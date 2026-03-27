// Consolidated portfolio data from all resumes

const portfolioData = {
  personal: {
    name: "Vishwadeepsinh Makwana",
    firstName: "Vishwadeepsinh",
    lastName: "Makwana",
    phone: "617-352-9436",
    email: "mvishwadeepsinh@gmail.com",
    linkedin: "https://linkedin.com/in/vishwadeepsinh-makwana",
    github: "https://github.com/vishwadeepsinh",
    location: "Boston, MA",
    roles: [
      "Data Analyst",
      "Data Engineer",
      "BI Developer",
    ],
    summary:
      "Data professional with 2+ years of experience translating large-scale operational and financial datasets into actionable insights, scalable pipelines, and executive dashboards. Skilled in SQL, Python, Tableau, Power BI, and Snowflake — consistently delivering impact across 9M+ records, optimizing query performance by 38%, and automating 5+ hours/week of manual reporting.",
  },

  skills: [
    {
      category: "Analytics & Visualization",
      icon: "chart",
      items: [
        "Tableau",
        "Power BI",
        "Power Query",
        "DAX",
        "Excel",
        "Pivot Tables",
        "KPI Dashboards",
      ],
    },
    {
      category: "SQL & Databases",
      icon: "database",
      items: [
        "SQL",
        "T-SQL",
        "PL-SQL",
        "CTEs",
        "Window Functions",
        "Snowflake",
        "PostgreSQL",
        "Oracle",
      ],
    },
    {
      category: "Python & Analytics",
      icon: "code",
      items: [
        "Python",
        "pandas",
        "NumPy",
        "Streamlit",
        "Data Wrangling",
        "Statistical Analysis",
      ],
    },
    {
      category: "Data Engineering",
      icon: "pipeline",
      items: [
        "ETL / ELT Pipelines",
        "Data Modeling",
        "REST API Ingestion",
        "Pipeline Monitoring",
        "Data Quality",
      ],
    },
    {
      category: "Cloud & Platforms",
      icon: "cloud",
      items: [
        "Azure",
        "Databricks",
        "Docker",
        "Distributed Processing",
        "Cloud Data Platforms",
      ],
    },
    {
      category: "Tools & Practices",
      icon: "tools",
      items: [
        "Git",
        "CI/CD",
        "SDLC",
        "Agile",
        "Data Documentation",
        "Stakeholder Communication",
      ],
    },
  ],

  experience: [
    {
      id: 1,
      title: "Data Analytics Developer / BI Engineer",
      company: "Dooit - Influential Leadership",
      location: "Boston, MA",
      period: "Jan 2025 – Jun 2025",
      type: "Internship",
      highlights: [
        "Designed and maintained scalable SQL and Python ELT pipelines integrating multi-source operational datasets into structured analytics datasets supporting KPI monitoring and executive reporting.",
        "Developed automated data transformation workflows and Power BI dashboards that standardized business reporting processes and reduced manual reporting effort by 5+ hours per week.",
        "Implemented proactive data quality validation and anomaly detection checks to identify inconsistencies in source datasets and ensure accuracy of downstream analytical products.",
        "Collaborated with analysts and business stakeholders to translate reporting requirements into scalable data models and analytics datasets used across operational decision-making workflows.",
      ],
    },
    {
      id: 2,
      title: "Data Analyst / BI Developer",
      company: "Northeastern University",
      location: "Boston, MA",
      period: "Aug 2024 – Dec 2024",
      type: "Internship",
      highlights: [
        "Engineered analytics datasets from 9M+ operational and financial records using complex SQL transformations to support large-scale reporting pipelines and business intelligence dashboards.",
        "Optimized high-volume SQL queries and aggregation workflows across relational datasets, improving data processing performance by 38% and accelerating analytical workloads.",
        "Performed exploratory data analysis and statistical validation to detect anomalies and ensure reliability and integrity of reporting datasets used for institutional analytics.",
        "Documented data models, transformation logic, and data lineage to improve maintainability and reproducibility of analytics pipelines used by analysts and reporting teams.",
      ],
    },
    {
      id: 3,
      title: "Data Analyst / Data Engineer",
      company: "LDRP-ITR",
      location: "Gandhinagar, India",
      period: "Jan 2022 – May 2023",
      type: "Full-time",
      highlights: [
        "Analyzed high-frequency financial market data ingested from 4 external REST APIs into structured PostgreSQL tables, delivering insights across 2 production dashboards consumed daily by 10 analysts.",
        "Designed and documented 6 analytics-ready reporting datasets by applying normalization workflows and modular SQL transformations, reducing analyst data preparation time by 40%.",
        "Built a Python and Streamlit analytical dashboard surfacing 8 portfolio KPIs including ROI, drawdown, and Sharpe ratio for 5 non-technical stakeholders.",
        "Implemented 4 monitoring and alerting rule sets with automated validation checks, reducing data reliability incidents by 30% and maintaining 99%+ data availability over 16 months.",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "SEC EDGAR Financial Analytics Pipeline",
      description:
        "End-to-end analytics pipeline extracting corporate financial filings from the SEC EDGAR REST API. Transforms nested JSON disclosures into 6 normalized relational tables across 2K+ records and 6+ tickers for downstream Tableau dashboarding.",
      impact:
        "Reduced analytical reporting preparation time by an estimated 50% per cycle with automated validation checks and year-over-year KPI comparisons.",
      tech: ["Python", "SQL", "PostgreSQL", "Docker", "Tableau"],
      period: "Jan 2026 – Present",
      metrics: [
        { label: "Records", value: "2K+" },
        { label: "Tables", value: "6" },
        { label: "KPIs", value: "5" },
      ],
    },
    {
      id: 2,
      title: "CMS Open Payments Analysis & Report",
      description:
        "Automated data ingestion and transformation pipeline processing CMS Open Payments healthcare datasets. Converts 500K+ raw public healthcare records into structured analytics-ready datasets for reporting.",
      impact:
        "Identified 22% concentration of total payments to 5% of physicians. Published as a reusable Power BI template enabling one-click refresh for all future reporting cycles.",
      tech: ["Python", "SQL", "Power BI", "PostgreSQL"],
      period: "Oct 2024 – Jan 2025",
      metrics: [
        { label: "Records", value: "500K+" },
        { label: "Pages", value: "4" },
        { label: "Findings", value: "3" },
      ],
    },
  ],

  education: [
    {
      degree: "Master of Science in Applied Machine Intelligence",
      school: "Northeastern University",
      location: "Boston, MA",
      period: "Sep 2023 – Dec 2025",
      gpa: "3.93 / 4.00",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "LDRP-ITR",
      location: "Gandhinagar, India",
      period: "Aug 2019 – May 2023",
      gpa: null,
    },
  ],

  certifications: [
    {
      name: "Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft",
      status: "Completed",
    },
    {
      name: "Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      status: "In Progress",
    },
    {
      name: "Fabric Data Engineer Associate (DP-700)",
      issuer: "Microsoft",
      status: "In Progress",
    },
  ],
};

export default portfolioData;
