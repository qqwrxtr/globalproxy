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
            <div className="row">
                <nav className="navbar navbar-expand-xl">
                    <div className="container-fluid">
                        <div className="navbar-brand d-flex align-items-center">
                            <div className="img_logo">
                                <img src={proxylogo} alt="Proxy Lab Logo" />
                            </div>
                            <div className="txt_logo">
                                <p>Proxy Lab</p>
                            </div>
                        </div>
                        
                        <div className="d-flex align-items-center ms-auto order-xl-3">
                            <LangChanger />
                            <div className="log_register" style={{height:"40px",margin:"0 10px"}}>
                                <div className="registere me-xl-2 mb-2 mb-xl-0">
                                    <a href="https://proxy-lab.com/register" target="_blank">
                                        <button className="buton register">
                                            <div className="icon">
                                                <img src={registericon} alt="Register Icon" />
                                            </div>
                                            <div className="txt_register">
                                                <p>Register</p>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                                <div className="login">
                                    <a href="https://proxy-lab.com/login" target="_blank">
                                        <button className="buton login">
                                            <div className="txt_login">
                                                <p>Sign In</p>
                                            </div>
                                        </button>
                                    </a>
                                </div>
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
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        {t("Offers")}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        {t("Features")}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        {t("Dashboard")}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        {t("Support")}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
