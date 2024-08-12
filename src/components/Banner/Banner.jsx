import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './banner.css';
import main_bglg from './../../assets/video/mainbg_992.gif';
import main_bgmd from './../../assets/video/mainbg_768.gif';
import main_bgsm from './../../assets/video/mainbg_425.gif';

const Banner = () => {
    const { t } = useTranslation();

    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className="banner_container">
            <div className="row">
                <div className="absolute_bg container-fluid">
                    <img src={main_bglg} alt="" className='d-lg-block d-none d-md-none d-sm-none'/>
                    <img src={main_bgmd} alt="" className='d-md-block d-lg-none d-sm-none d-none'/>
                    <img src={main_bgsm} alt="" className='d-sm-block d-md-none'/>
                </div>
            </div>
            <div className="row d-flex flex-column align-items-center text-center text_banner">
                <div className="col-12 column_content_banner">
                    <motion.div className="title_banner" initial="hidden" animate="visible" variants={textVariant}>
                        <h2>{t("Welcome to")} <span className="main_color">Proxy Lab!</span></h2>
                    </motion.div>
                    <motion.div className="subtitle" initial="hidden" animate="visible" variants={textVariant}>
                        <p>{t("Banner_info")}</p>
                    </motion.div>
                    <div className="sign_up_now_button d-flex justify-content-center" initial="hidden" animate="visible" variants={textVariant}>
                        <a href="https://proxy-lab.com/register" target="_blank" className="button">
                            <div className="txt_sign_up_now">
                                <p>{t("Sign Up Now")}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
