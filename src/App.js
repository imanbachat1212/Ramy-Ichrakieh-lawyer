import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Low from "./pages/Low.jsx";
import About from "./pages/About.jsx";
import LBLibrary from "./pages/LBLibrary.jsx";
import UAELibrary from "./pages/UAELibrary.jsx";
import LowTeam from "./pages/LowTeam.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import { useTranslation } from "react-i18next";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init();
    document.title =
      i18n.language === "ar"
        ? "محامي لبنان | محامي طرابلس | مكتب إشراقية للمحاماة"
        : "Lawyer in Lebanon | Lawyer in Tripoli | Ishraqieh Law Firm";
  }, [i18n.language]);
  // AOS.refresh();
  return (
    <>
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Low />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/LBLibrary" element={<LBLibrary />} />
            <Route path="/UAELibrary" element={<UAELibrary />} />
            <Route path="/lowteam" element={<LowTeam />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

          <Footer />
          <FloatingWhatsApp
            phoneNumber="+96103114402"
            accountName={t("whatsapp.accountName")}
            chatMessage={t("whatsapp.chatMessage")}
            statusMessage={t("whatsapp.statusMessage")}
            placeholder={t("whatsapp.placeholder")}
            avatar={require("./images/logo-footer.png")}
            allowClickAway
            notification
            notificationSound
            darkMode
          />
        </Router>
      </div>
    </>
  );
};

export default App;
