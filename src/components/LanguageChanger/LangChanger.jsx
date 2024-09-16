import "./langchanger.css";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import i18n from "../../i18n/i18n";

const LanguageSelector = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    navigate(`/${lang}${location.pathname.replace(`/${i18n.language}`, "")}`);
  };

  return (
    <div className="lang-selector-wrapper">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="form-select"
        aria-label="Select language"
        value={i18n.language}
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
