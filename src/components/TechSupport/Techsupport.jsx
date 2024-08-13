import { useTranslation } from "react-i18next";
import "./techsupport.css";
import Subpoints from "../Subpoints/Subpoints";
import globus from "./../../assets/img/globus.svg";
import { titleAnimationVariants } from "./../../Utils/TitleAnimation/TitleAnimation.jsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TechSupport = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    const { t } = useTranslation();

    const subpoints = [
        { text: t("TextTech1") },
        { text: t("TextTech2") },
        { text: t("TextTech3") }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            id="support"
            className="container container_tech d-flex flex-column justify-content-center"
        >
            <div className="row w-100">
                <div className="col-12 tech_title d-flex justify-content-center align-items-center">
                    <div
                        initial={titleAnimationVariants.initial}
                        animate={isInView ? titleAnimationVariants.animate : titleAnimationVariants.initial}
                        transition={titleAnimationVariants.transition}
                    >
                        <p>{t("Tech_Support")}</p>
                    </div>
                </div>
            </div>
            <div
                className="row d-flex justify-content-center for_wrap_tech"
                variants={containerVariants}
            >
                <div className="col-md-4 col-12 col_gap_tech">
                    <div className="text_part_tech" variants={itemVariants}>
                        <div className="title_tech">
                            <p>{t("TitleTech")}</p>
                        </div>
                        <div className="subtitle_tech">
                            <p>{t("SubtitleTech")}</p>
                        </div>
                    </div>
                    <div className="subpoints_container" variants={containerVariants}>
                        {subpoints.map((points, index) => (
                            <div className="subpoints" key={index} variants={itemVariants}>
                                <Subpoints text={points.text} variant="tech" />
                            </div>
                        ))}
                    </div>
                    <div className="contact_us_button_tech" variants={itemVariants}>
                        <a href="">
                            <button>{t("Contact_Us")}</button>
                        </a>
                    </div>
                </div>
                <div className="col-md-4 col-12 img_tech d-flex align-items-center justify-content-lg-end justify-content-center" variants={itemVariants}>
                    <div className="card_footer_img">
                        <img src={globus} alt="Globus" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechSupport;
