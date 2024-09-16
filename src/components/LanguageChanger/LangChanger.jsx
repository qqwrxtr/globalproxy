import "./langchanger.css";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import i18n from "../../i18n/i18n";

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    navigate(`/${lang}${location.pathname.replace(`/${i18n.language}`, "")}`);
  };

  return (
    <div className="lang-selector-wrapper">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="form-select"
        aria-label="Select language"
        value={currentLanguage}
      >
        {["en", "ru"].map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(LanguageSelector);
