import React from "react";
import "./langchanger.css";
import i18n from "../../i18n/i18n";

const LanguageSelector = () => {
    const languages = ['en', 'ru'];
    const changeLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div className="lang-selector-wrapper">
            <select
                onChange={changeLanguage}
                className="form-select"
                aria-label="Select language"
            >
                {languages.map((lang) => (
                    <option key={lang} value={lang} selected={i18n.language === lang}>
                        {lang.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default React.memo(LanguageSelector);
