import proxylogo from "./../../assets/img/SvgjsSvg1003.png";
import React from "react";
import LangChanger from "./../LanguageChanger/LangChanger.jsx";
import registericon from "./../../assets/img/portrait.svg";
import "./header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();

    return (
        <div className="container container_header">
            <nav className="navbar navbar-expand-xl">
                <div className="container-fluid">
                    <div className="navbar-brand d-flex align-items-center">
                        <img src={proxylogo} alt="Proxy Lab Logo" className="img_logo" />
                        <p className="txt_logo">Proxy Lab</p>
                    </div>

                    <div className="d-flex align-items-center ms-auto order-xl-3">
                        <LangChanger />
                        <div className="log_register">
                            <a href="https://proxy-lab.com/register" target="_blank" className="button_register">
                                <button className="buton register">
                                    <img src={registericon} alt="Register Icon" />
                                    <p>{t("Sign Up")}</p>
                                </button>
                            </a>
                            <a href="https://proxy-lab.com/login" target="_blank" className="button_login">
                                <button className="buton login">
                                    <p>{t("Sign In")}</p>
                                </button>
                            </a>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse order-xl-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-xl-0 menu">
                            {["Offers", "Features", "Dashboard", "Support"].map((item) => (
                                <li className="nav-item" key={item}>
                                    <a className="nav-link" href={`#${item.toLowerCase()}`}>
                                        {t(item)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
