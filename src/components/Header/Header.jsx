import proxylogo from "./../../assets/img/SvgjsSvg1003.png";
import React from "react";
import LangChanger from "./../LanguageChanger/LangChanger.jsx";
import registericon from "./../../assets/img/portrait.svg";
import "./header.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Header = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1,
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: index * 0.2,
            },
        }),
    };

    return (
        <div className="container container_header">
            <motion.nav
                className="navbar navbar-expand-xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="container-fluid">
                    <motion.div className="navbar-brand d-flex align-items-center" variants={itemVariants}>
                        <img src={proxylogo} alt="Proxy Lab Logo" className="img_logo" />
                        <p className="txt_logo">Proxy Lab</p>
                    </motion.div>

                    <motion.div className="d-flex align-items-center ms-auto order-xl-3" variants={itemVariants}>
                        <LangChanger />

                        <motion.a
                            href="https://proxy-lab.com/register"
                            target="_blank"
                            className="button_register"
                            variants={itemVariants}
                        >
                            <motion.button className="buton register">
                                <img src={registericon} alt="Register Icon" />
                                <p>{t("Sign Up")}</p>
                            </motion.button>
                        </motion.a>

                        <motion.a
                            href="https://proxy-lab.com/login"
                            target="_blank"
                            className="button_login"
                            variants={itemVariants}
                        >
                            <motion.button className="buton login">
                                <p>{t("Sign In")}</p>
                            </motion.button>
                        </motion.a>

                        <motion.button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            variants={itemVariants}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </motion.button>
                    </motion.div>

                    <motion.div className="collapse navbar-collapse order-xl-2" id="navbarSupportedContent">
                        <motion.ul className="navbar-nav me-auto mb-2 mb-xl-0 menu">
                            {["Offers", "Features", "Dashboard", "Support"].map((item, index) => (
                                <motion.li
                                    className="nav-item"
                                    key={item}
                                    variants={navItemVariants}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <a className="nav-link" href={`#${item.toLowerCase()}`}>
                                        {t(item)}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </motion.nav>
        </div>
    );
};

export default Header;
