import "./techsupport.css";
import { motion, useInView } from "framer-motion";
import React from "react";

import Subpoints from "../Subpoints/Subpoints";
import globus from "./../../assets/img/tech_img.png";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const TechSupport = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.4 });
  const { t } = useTranslation();

  const subpoints = [
    { text: t("TextTech1") },
    { text: t("TextTech2") },
    { text: t("TextTech3") },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      id="support"
      className="container container_tech d-flex flex-column justify-content-center margin_for_container"
    >
      <div className="row w-100">
        <div className="col-12 tech_title d-flex justify-content-center align-items-center">
          <motion.div variants={itemVariants} transition={{ delay: 0 }}>
            <p>{t("Tech_Support")}</p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="row d-flex justify-content-center for_wrap_tech"
        variants={containerVariants}
      >
        <div className="col-xl-4 col-12 col_gap_tech">
          <motion.div className="text_part_tech">
            <motion.div
              className="title_tech"
              variants={itemVariants}
              transition={{ delay: 0.2 }}
            >
              <p>{t("TitleTech")}</p>
            </motion.div>
            <motion.div
              className="subtitle_tech"
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              <p>{t("SubtitleTech")}</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="subpoints_container"
            variants={containerVariants}
          >
            {subpoints.map((points, index) => (
              <motion.div
                className="subpoints"
                key={index}
                variants={itemVariants}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <Subpoints text={points.text} variant="tech" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="contact_us_button_tech"
            variants={itemVariants}
            transition={{ delay: 1 }}
          >
            <a
              href="https://t.me/GlobalProxy_support"
              target="_blank"
              rel="noreferrer"
            >
              <button>{t("Contact_Us")}</button>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="col-xl-4 col-12 img_tech d-flex align-items-center justify-content-center justify-content-xl-end"
          variants={itemVariants}
          transition={{ delay: 1.2 }}
        >
          <div className="card_footer_img">
            <motion.img
              src={globus}
              alt="Globus"
              className="img-fluid"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TechSupport;
