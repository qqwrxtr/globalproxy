import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import './info.css';
import { useTranslation } from 'react-i18next';

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
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const InfoBlock = React.memo(() => {
    const { t } = useTranslation();

    return (
        <div className="container container_info w-100 d-flex align-items-center justify-content-center" style={{padding: "50px 20px 0" }}>
            <motion.div
                className="row w-100 d-flex justify-content-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="col-12 bg_color pt-4">
                    <div className="row d-flex justify-content-center w-100 flex-xxl-nowrap flex-xl-nowrap flex-lg-wrap row_blocks">
                        
                        <motion.div className="info_block col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12" variants={itemVariants}>
                            <div className="title_info_abt">
                                <p><CountUp end={250} /> GB</p>
                            </div>
                            <div className="subtitle_info_abt text_big">
                                <p>{t("Data_limit")}</p>
                            </div>
                            <div className="border-btm-sm"></div>
                        </motion.div>

                        <div className="vr d-none d-sm-block"></div>

                        <motion.div className="info_block col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12" variants={itemVariants}>
                            <div className="title_info_abt">
                                <p><CountUp end={100000} /> +</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>{t("IP")}</p>
                            </div>
                            <div className="border-btm-sm"></div>
                        </motion.div>

                        <div className="vr d-none d-xxl-block d-xl-block"></div>

                        <motion.div className="info_block col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12" variants={itemVariants}>
                            <div className="title_info_abt">
                                <p><CountUp end={3} /> +</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>{t("Locations")}</p>
                            </div>
                            <div className="border-btm-sm"></div>
                        </motion.div>

                        <div className="vr d-none d-sm-block"></div>

                        <motion.div className="info_block col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12" variants={itemVariants}>
                            <div className="title_info_abt">
                                <p><CountUp end={35} decimals={0} />+ Mbps</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>{t("Port_Speed")}</p>
                            </div>
                            <div className="border-btm-sm"></div>
                        </motion.div>

                        <div className="vr d-xl-block d-xxl-block d-none"></div>

                        <motion.div className="last-row-item col-xxl-2 col-xl-2 col-lg-12 col-sm-12" variants={itemVariants}>
                            <div className="title_info_abt">
                                <p><CountUp end={2} />+ {t("Operators")}</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>{t("Country")}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
});

export default InfoBlock;
