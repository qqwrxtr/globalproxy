import { useTranslation } from "react-i18next";
import "./footer.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from 'react-type-animation';

const Footer = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="container container_footer d-flex justify-content-center"
        >
            <div className="row d-flex align-items-center justify-content-center row_content_footer">
                <div className="col-12 col-md-6 text-md-start text-center">
                    <motion.div className="part_one_footer_text" variants={itemVariants}>
                        <a href="https://app.proxy-lab.com/proxies" className="animated_link">
                            <div className="title_footer_part_one title_footer">
                                <TypeAnimation
                                    sequence={[
                                        'proxy',
                                        100,
                                        'proxy-',
                                        1000,
                                        'proxy-lab',
                                        500,
                                        'proxy-lab.com',
                                        500,
                                        'proxy-lab',
                                        1000,
                                        'proxy-',
                                        100,
                                        'proxy',
                                    ]}
                                    wrapper="p"
                                    repeat={Infinity}
                                    speed={1}
                                />
                            </div>
                        </a>
                        <div className="subtitle_footer_part_one subtitle_footer">
                            <p>{t("SubtitleFooterPartOne")}</p>
                        </div>
                    </motion.div>
                </div>
                <div className="col-12 col-md-6 text-md-start text-center">
                    <motion.div className="part_two_footer_text" variants={itemVariants}>
                        <a href="" className="animated_link">
                            <div className="title_footer_part_two title_footer">
                                <TypeAnimation
                                sequence={[
                                    '@',
                                    100,
                                    '@Proxy',
                                    500,
                                    '@ProxyLab',
                                    500,
                                    '@Proxy',
                                    100,
                                    '@'
                                ]}
                                
                                
                                
                                
                                wrapper="p"
                                repeat={Infinity}
                                speed={1}
                                />
                            </div>
                        </a>
                        <div className="subtitle_footer_part_two subtitle_footer">
                            <p>{t("SubtitleFooterPartTwo")}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
