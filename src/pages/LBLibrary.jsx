import React from "react";
import { useTranslation } from "react-i18next";



function LBLibrary() {
   const { t,i18n } = useTranslation();
  const isArabic = i18n.language === "ar";


  const laws = [
    {
      title: t("laws.civil"),
      url: "https://data.infopro.com.lb/file/Obligations%20and%20Contracts%20Law.pdf",
    },
    {
      title: t("laws.criminal"),
      url: "https://ccls-lebanon.org/wp-content/uploads/2023/12/Penal-Code_AR.pdf",
    },
    {
      title: t("laws.commercial"),
      url: "https://kms.uac-org.org/content/uploads/InvestmentSub/170629113551385~%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A.pdf",
    },
    {
      title: t("laws.labor"),
      url: "https://www.labor.gov.lb/Temp/Files/574b61dd-1233-4507-9da1-d4a3e3a6129a.pdf",
    },
    {
      title: t("laws.personalStatus"),
      url: "https://www.cawtarclearinghouse.org/storage/4232/%D9%82%D8%A7%D9%86%D9%88%D9%86-%D8%A7%D9%84%D8%A7%D8%AD%D9%88%D8%A7%D9%84-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9-%D9%84%D8%B9%D8%A7%D9%85-1959.pdf",
    },
    {
      title: t("laws.dataProtection"),
      url: "https://www.bdl.gov.lb/CB%20Com/Laws%20And%20Regulations/Laws/Law_81_AR%C2%A72572_1.pdf",
    },
  ];
  return (
    <div style={{ padding: "3rem", textAlign: "center" }} dir={isArabic ? "rtl" : "ltr"}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>  {t("libraryLebaneseTitle")}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
          justifyItems: "center",
        }}
      >
        {laws.map((law, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "1.5rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              transition: "all 0.3s ease",
              width: "100%",
              maxWidth: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
             onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.3)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.backgroundColor = "#f0f0f0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#ffffff";
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              📄
            </div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>{law.title}</h3>
            <a
              href={law.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                backgroundColor: "#d0bf90",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#d0bf90")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#d0bf90")}
            >
                    {t("lawButton")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LBLibrary;
