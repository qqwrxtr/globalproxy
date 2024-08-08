import React, { useCallback } from "react";
import "./langchanger.css";
import i18n from "../../i18n/i18n";

const LanguageSelector = () => {
    const chooseLanguage = useCallback((e) => {
        e.preventDefault();
        const newLanguage = e.target.value;
        i18n.changeLanguage(newLanguage);
    }, []);

    return (
        <div className="lang-selector-wrapper">
            <select
                onChange={chooseLanguage}
                className="form-select"
                aria-label="Select language"
            >
                <option value="en">EN</option>
                <option value="ru">RU</option>
            </select>
        </div>
    );
};

export default React.memo(LanguageSelector);
