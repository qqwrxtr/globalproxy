import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./dashboard.css";

import dashboard from "./../../assets/img/dashboard.svg";
import Subpoints from "../Subpoints/Subpoints";

const Dashboard = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

    const subpoints = [
        { text: t("TextDash1") },
        { text: t("TextDash2") },
        { text: t("TextDash3") },
        { text: t("TextDash4") },
        { text: t("TextDash5") },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
    };

    return (
        <motion.div 
            ref={ref}
            className="container container_dashboard"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <motion.div 
                        className="dashboard_title text-center"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1, transition: { delay: 0.4, duration: 0.8 } } : { opacity: 0 }}
                    >
                        <p>{t("Dashboard2")}</p>
                    </motion.div>
                </div>
            </div>
            <div className="row row_content_dashboard flex-wrap-reverse d-flex flex-row-reverse ">
                <div className="col-xl-6 col-12 d-flex flex-column align-items-center">
                    <motion.div className="dashimg" variants={imageVariants}>
                        <img src={dashboard} alt="" className="img-fluid" />
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

export default Dashboard;
