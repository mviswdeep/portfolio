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
    ],
    summary:
      "Data professional with hands-on experience across the full analytics lifecycle, from building ETL pipelines and designing data models to creating interactive dashboards and delivering insights that drive business decisions. I've worked with cross-functional teams to automate reporting workflows, validate data quality at scale, and translate complex datasets into clear, actionable narratives for stakeholders. With a Master's in Applied Machine Intelligence and a strong foundation in SQL, Python, and modern BI tools, I'm looking to bring that same analytical rigor and engineering mindset to my next data analyst or data engineering role.",
  },

  heroMetrics: [
    { value: "2.5+", label: "Years Experience" },
    { value: "500K+", label: "Records Processed" },
    { value: "50+", label: "Specialties Covered" },
    { value: "3.93", label: "GPA" },
  ],

  skills: [
    {
      category: "Data Infrastructure & Engineering",
      icon: "pipeline",
      items: [
        "PostgreSQL",
        "Snowflake",
        "AWS",
        "Azure",
        "REST API Ingestion",
        "ETL/ELT Workflows",
        "dbt",
        "Airflow",
        "Docker",
        "Git",
      ],
    },
    {
      category: "Querying & Programming",
      icon: "code",
      items: [
        "SQL",
        "Joins",
        "Aggregations",
        "CTEs",
        "Window Functions",
        "Python",
        "pandas",
        "NumPy",
      ],
    },
    {
      category: "Data Analytics & Reporting",
      icon: "chart",
      items: [
        "KPI Dashboards",
        "Trend Analysis",
        "Cohort Analysis",
        "Automated Reporting",
        "Data Validation",
        "Variance Analysis",
      ],
    },
    {
      category: "Visualization & BI Tools",
      icon: "chart",
      items: [
        "Power BI",
        "DAX",
        "Power Query",
        "Tableau",
        "Streamlit",
      ],
    },

    {
      category: "Data Modeling & Quality",
      icon: "database",
      items: [
        "Data Modeling",
        "Star Schema",
        "Data Quality Testing",
        "CI/CD",
      ],
    },
    {
      category: "Collaboration",
      icon: "tools",
      items: [
        "Cross functional Partnership",
        "Engineering & Product Teams",
        "Stakeholder Reporting",
        "Technical Documentation",
      ],
    },
  ],

  experience: [
    {
      id: 1,
      title: "Data Analyst Intern",
      company: "ITMC Systems",
      location: "Boston, MA",
      period: "Jan 2025 – Jul 2025",
      type: "Internship",
      highlights: [],
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Bajrang Engineering",
      location: "Ahmedabad, India",
      period: "Sep 2021 – Jul 2023",
      type: "Full-time",
      highlights: [],
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      company: "Bajrang Engineering",
      location: "Ahmedabad, India",
      period: "Feb 2021 – Aug 2021",
      type: "Internship",
      highlights: [],
    },
  ],

  projects: [
    {
      id: 1,
      title: "SEC EDGAR Financial Analytics Pipeline",
      description:
        "SEC filings arrive as deeply nested, inconsistent records; built an extraction and validation pipeline normalizing data into six structured tables across 2K+ companies, enabling revenue and EPS trend analysis.",
      impact:
        "Identified data quality issues across company filings, developed automated validation checks and documented data structures and calculation logic, ensuring every figure used in downstream forecasting was fully traceable and accurate.",
      tech: ["Python", "SQL", "PostgreSQL", "Excel"],
      period: "Jan 2026 – Present",
      metrics: [
        { label: "Companies", value: "2K+" },
        { label: "Tables", value: "6" },
      ],
    },
    {
      id: 2,
      title: "Investment Portfolio Analytics Platform",
      description:
        "Engineered an analytics platform ingesting market data from 5 providers on a daily automated schedule, computing performance KPIs including VaR, Maximum Drawdown, and Sharpe/Sortino ratios for ongoing trend monitoring.",
      impact:
        "Built an interactive dashboard delivering automated daily performance analytics with self-service drill-down, replacing manual periodic rebuilds and giving stakeholders always-current investment metrics without waiting on manual report cycles each week.",
      tech: ["Python", "SQL", "Streamlit"],
      period: "Jan 2026 – Present",
      metrics: [
        { label: "Providers", value: "5" },
        { label: "Metrics", value: "VaR/Sharpe" },
      ],
    },
    {
      id: 3,
      title: "CMS Open Payments Financial Data Pipeline",
      description:
        "Raw healthcare payment records lacked structure for trend tracking; built an ingestion and validation pipeline processing 500K+ records into a clean, reporting-ready dataset for stakeholder review and ongoing oversight.",
      impact:
        "Analysis surfaced that 22% of payments concentrated among 5% of providers, a cohort-level pattern documented in a stakeholder report with a reusable monitoring template for future reporting cycles across the program.",
      tech: ["Python", "SQL", "Excel", "Power BI"],
      period: "Oct 2024 – Jan 2025",
      metrics: [
        { label: "Records", value: "500K+" },
        { label: "Providers", value: "5%" },
      ],
    },
    {
      id: 4,
      title: "Medicare Claims Analytics Pipeline",
      description:
        "CMS Medicare Part D claims data spans 50+ provider specialties with no standardized structure; built an automated, orchestrated pipeline transforming raw claims into audit-logged, analysis-ready tables for downstream review.",
      impact:
        "Designed HIPAA-aligned data handling and validation checks throughout the pipeline, ensuring traceable transformations across every stage and giving downstream analysts a reliable, fully documented source for ongoing reporting needs.",
      tech: ["Python", "dbt", "Snowflake", "Airflow"],
      period: "Feb 2025 – Apr 2025",
      metrics: [
        { label: "Specialties", value: "50+" },
        { label: "Compliance", value: "HIPAA" },
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
      name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft",
      status: "Completed",
    },
    {
      name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      status: "In Progress",
    },
  ],

  emailJS: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
};

export default portfolioData;
