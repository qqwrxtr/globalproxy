import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import FeaturesBlock from "../FeaturesBlock.jsx/FeaturesBlock";
import "./features.css";

import stopwatch from "./../../assets/img/stopwatch.svg";
import speedometr from "./../../assets/img/speedometer.svg";
import data from "./../../assets/img/data.svg";
import router from "./../../assets/img/router.svg";
import ip from "./../../assets/img/ip.svg";
import tech from "./../../assets/img/tech.svg";

const featureAnimation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: (index) => ({
        duration: 0.5,
        delay: index * 0.1
    })
};

const FeatureItem = ({ feature, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="featureblock col-4 d-flex flex-column align-items-center col-xxl-4 col-md-6 col-12"
            initial={featureAnimation.initial}
            animate={isInView ? featureAnimation.animate : featureAnimation.initial}
            transition={featureAnimation.transition(index)}
        >
            <FeaturesBlock
                img={feature.img}
                title={feature.title}
                subtitle={feature.subtitle}
            />
        </motion.div>
    );
};

const Features = () => {
    const { t } = useTranslation();

    const features = [
        {
            img: `${stopwatch}`,
            title: t("3Trial"),
            subtitle: t("3TrialSub"),
        },
        {
            img: `${speedometr}`,
            title: t("High_Speed"),
            subtitle: t("High_Speed_Sub"),
        },
        {
            img: `${data}`,
            title: t("Data"),
            subtitle: t("Data_Sub"),
        },
        {
            img: `${router}`,
            title: t("Network"),
            subtitle: t("Network_Sub"),
        },
        {
            img: `${ip}`,
            title: t("IP2"),
            subtitle: t("IP_Sub"),
        },
        {
            img: `${tech}`,
            title: t("Tech"),
            subtitle: t("Tech_Sub"),
        }
    ];

    return (
        <div className="container container_features d-flex flex-column align-items-center justify-content-center" id="features">
            <div className="row">
                <div className="col-12 title_main_features">
                    <p>{t("Our Features")}</p>
                </div>
            </div>
            <div className="row row_features">
                {features.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        feature={feature}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Features;
