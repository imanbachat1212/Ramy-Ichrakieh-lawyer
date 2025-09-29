import React from "react";
import { useTranslation } from "react-i18next";



function UAELibrary() {
       const { t,i18n } = useTranslation();
      const isArabic = i18n.language === "ar";

  const uaeLaws = [
    {
      title: t("uaeLaws.civil"),
      url: "https://uaelegislation.gov.ae/ar/legislations/1025/download",
    },
    {
      title: t("uaeLaws.criminal"),
      url: "https://u.ae/-/media/Documents-2024/Penal-Code-as-amended.pdf",
    },
    {
      title: t("uaeLaws.labor"),
      url: "https://uaelegislation.gov.ae/ar/legislations/1541/download",
    },
    {
      title: t("uaeLaws.personalStatus"),
      url: "https://uaelegislation.gov.ae/ar/legislations/2770/download",
    },
    {
      title: t("uaeLaws.dataProtection"),
      url: "https://uaelegislation.gov.ae/ar/legislations/1972/download",
    },
    {
      title: t("uaeLaws.procedures"),
      url: "https://uaelegislation.gov.ae/ar/legislations/1609/download",
    },
    {
      title: t("uaeLaws.cyber"),
      url: "https://uaelegislation.gov.ae/ar/legislations/1526/download",
    },
    {
      title: t("uaeLaws.residency"),
      url: "https://uaelegislation.gov.ae/ar/legislations/1528/download",
    },
    {
      title: t("uaeLaws.supremeCourt"),
      url: "https://uaelegislation.gov.ae/ar/legislations/1581/download",
    },
    {
      title: t("uaeLaws.donations"),
      url: "https://uaelegislation.gov.ae/ar/legislations/1500/download",
    },
    {
      title: t("uaeLaws.discrimination"),
      url: "https://uaelegislation.gov.ae/ar/legislations/2131/download",
    },
    {
      title: t("uaeLaws.traffic"),
      url: "https://uaelegislation.gov.ae/ar/legislations/2598/download",
    },
    {
      title: t("uaeLaws.hr"),
      url: "https://uaelegislation.gov.ae/ar/legislations/1594/download",
    },
    {
      title: t("uaeLaws.companies"),
      url: "https://uaelegislation.gov.ae/ar/legislations/2782/download",
    },
  ];
  return (
    <div style={{ padding: "3rem",  textAlign: "center" }} dir={isArabic ? "rtl" : "ltr"}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>  {t("libraryUAETitle")}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
          justifyItems: "center",
        }}
      >
        {uaeLaws.map((law, index) => (
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
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📄</div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>{law.title}</h3>
            <a
              href={law.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                backgroundColor: "#d0bf90",
                color: "#d0bf90",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.2s",
              }}
        
            >
               {t("lawButton")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UAELibrary;
