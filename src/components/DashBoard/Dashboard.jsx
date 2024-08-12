import React from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import "./dashboard.css";
import { titleAnimationVariants } from "./../TitleAnimation/TitleAnimation.jsx";
import dashboard from "./../../assets/img/dashboard.png";
import Subpoints from "../Subpoints/Subpoints";

const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
};

const Dashboard = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    const subpoints = useMemo(() => [
        { text: t("TextDash1") },
        { text: t("TextDash2") },
        { text: t("TextDash3") },
        { text: t("TextDash4") },
        { text: t("TextDash5") },
    ], [t]);

    return (
        <motion.div 
            ref={ref}
            className="container container_dashboard"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            id="dashboard"
        >
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <motion.div 
                        className="dashboard_title text-center"
                        initial={titleAnimationVariants.initial}
                        animate={isInView ? titleAnimationVariants.animate : titleAnimationVariants.initial}
                        transition={titleAnimationVariants.transition}
                    >
                        <p>{t("Dashboard2")}</p>
                    </motion.div>
                </div>
            </div>
            <div className="row row_content_dashboard flex-wrap-reverse d-flex flex-row-reverse ">
                <div className="col-xl-6 col-12 d-flex flex-column align-items-center">
                    <motion.div className="dashimg" variants={imageVariants}>
                        <img src={dashboard} alt="" className="img-fluid" loading="lazy" />
                    </motion.div>
                </div>
                <div className="col-xl-6 col-12 d-flex flex-column align-items-center">
                    <motion.div className="text_dashboard" variants={containerVariants}>
                        <div className="title_dashboard">
                            <p>{t("TitleDash")}</p>
                        </div>
                        {subpoints.map((offer, index) => (
                            <motion.div className="subpoints" key={index} variants={itemVariants}>
                                <Subpoints text={offer.text} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default React.memo(Dashboard);
