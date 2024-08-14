import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import s from "./dashboard.module.css";
import dashboard from "./../../assets/img/dashboard.png";
import Subpoints from "../Subpoints/Subpoints";
import { titleAnimationVariants } from "./../../Utils/TitleAnimation/TitleAnimation.jsx";
import { motion, useAnimation, useInView } from "framer-motion";

const Dashboard = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    const titleControls = useAnimation();
    const subpointsControls = useAnimation();
    const buttonControls = useAnimation();
    const imgControls = useAnimation();

    const subpoints = [
        { text: t("TextDash1") },
        { text: t("TextDash2") },
        { text: t("TextDash3") },
        { text: t("TextDash4") },
        { text: t("TextDash5") },
    ];

    React.useEffect(() => {
        if (isInView) {
            titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } })
                .then(() => {
                    if (window.innerWidth < 1200) {
                        return imgControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
                    }
                })
                .then(() => {
                    return subpointsControls.start((index) => ({
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: index * 0.2 },
                    }));
                })
                .then(() => {
                    return buttonControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
                })
                .then(() => {
                    if (window.innerWidth >= 1200) {
                        return imgControls.start({ opacity: 1, y: 0, transition: { duration: 0.3 } });
                    }
                });
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            id="dashboard"
            className={`container ${s.container_dashboard} margin_for_container`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
        >
            <motion.div
                className="row"
                initial={titleAnimationVariants.initial}
                animate={isInView ? titleAnimationVariants.animate : ""}
                transition={{ ...titleAnimationVariants.transition, delay: 0 }}
            >
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div className={`${s.dashboard_title} text-center`}>
                        <p>{t("Dashboard2")}</p>
                    </div>
                </div>
            </motion.div>
            <div className="row d-xl-none d-flex dashboard_for_phone mt-lg-5 mt-md-44 mt-sm-3 mt-2">
                <motion.div
                    className={s.title_dashboard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={titleControls}
                >
                    <p>{t("TitleDash")}</p>
                </motion.div>
            </div>
            <div
                className={`row ${s.row_content_dashboard} flex-wrap-reverse d-flex flex-row align-items-center ${s.content_row}`}
            >
                <motion.div
                    className="col-xl-6 col-12 d-flex flex-column align-items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={titleControls}
                >
                    <div className={s.text_dashboard}>
                        <motion.div
                            className={`${s.title_dashboard} d-xl-flex d-none`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={titleControls}
                        >
                            <p>{t("TitleDash")}</p>
                        </motion.div>
                        <motion.div
                            className={`${s.dashimg} d-xl-none d-flex justify-content-center`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={imgControls}
                        >
                            <motion.img
                                src={dashboard}
                                alt="Dashboard"
                                className="img-fluid"
                                loading="lazy"
                                initial={{ opacity: 0, y: 20 }}
                                animate={imgControls}
                            />
                        </motion.div>

                        {subpoints.map((offer, index) => (
                            <motion.div
                                className={s.subpoints}
                                key={index}
                                custom={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={subpointsControls}
                            >
                                <Subpoints text={offer.text} variant="dashboard" />
                            </motion.div>
                        ))}
                        <motion.div
                            className={s.button_get_start_dashboard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={buttonControls}
                        >
                            <a
                                href="https://app.proxy-lab.com/register"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button>{t("GetStart")}</button>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    className={`col-xl-6 col-12 d-flex flex-column align-items-center d-xl-flex d-none ${s.dashimg}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={imgControls}
                >
                    <div className={s.dashimg}>
                        <motion.img
                            src={dashboard}
                            alt="Dashboard"
                            className="img-fluid"
                            loading="lazy"
                            initial={{ opacity: 0, y: 20 }}
                            animate={imgControls}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default React.memo(Dashboard);
