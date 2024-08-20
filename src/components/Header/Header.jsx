import React, { useCallback, Suspense, lazy } from "react";
import proxylogo from "./../../assets/img/SvgjsSvg1003.png";
import registericon from "./../../assets/img/portrait.svg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./header.css";

const LangChanger = lazy(() => import("./../LanguageChanger/LangChanger.jsx"));
const BtnDarkMode = lazy(() => import("../BtnDarkMode/BtnDarkMode.jsx"));

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

const Header = React.memo(() => {
    const { t, i18n } = useTranslation();

    const menuItems = ["Offers", "Features", "Dashboard", "Support"] || [];

    const renderMenuItems = useCallback(() => (
        (menuItems || []).map((item, index) => (
            <motion.li
                className={`nav-item ${index === 0 && i18n.language === 'ru' ? 'd-none' : ''}`}
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
        ))
    ), [menuItems, i18n.language, t]);

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
                        <img src={proxylogo} alt="GlobalProxy Logo" className="img_logo" />
                        <p className="txt_logo">Global Proxy</p>
                    </motion.div>

                    <motion.div className="d-flex align-items-center ms-auto order-xl-3" variants={itemVariants}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <div className="dark_white mx-3">
                                <BtnDarkMode />
                            </div>
                            <LangChanger />
                        </Suspense>

                        <motion.a
                            href="https://app.globalproxy.org/register"
                            target="_blank"
                            className="button_register"
                            variants={itemVariants}
                        >
                            <motion.button className="buton register">
                                <img src={registericon} alt="Register Icon" />
                                <p className="px-1">{t("Sign Up")}</p>
                            </motion.button>
                        </motion.a>

                        <motion.a
                            href="https://app.globalproxy.org/login"
                            target="_blank"
                            className="button_login"
                            variants={itemVariants}
                        >
                            <motion.button className="buton login">
                                <p>{t("Sign In")}</p>
                            </motion.button>
                        </motion.a>

                        <motion.button
                            className="navbar-toggler d-none"
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

                    <motion.div className="collapse navbar-collapse order-xl-2 d-xl-block d-none" id="navbarSupportedContent">
                        <motion.ul className="navbar-nav me-auto mb-2 mb-xl-0 menu">
                            {renderMenuItems()}
                        </motion.ul>
                    </motion.div>
                </div>
            </motion.nav>
        </div>
    );
});

export default Header;
