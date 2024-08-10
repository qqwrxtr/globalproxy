import OffersBlock from "../OffersBlock/OffersBlock";
import "./offers.css";
import denmark from "./../../assets/img/denmark.svg";
import romania from "./../../assets/img/romania.svg";
import moldova from "./../../assets/img/moldova.svg";
import three from "./../../assets/img/3.svg";
import telia from "./../../assets/img/Telia.svg";
import lebara from "./../../assets/img/lebara.svg";
import telero from "./../../assets/img/telero.svg";
import orange from "./../../assets/img/orange.svg";
import moldcell from "./../../assets/img/moldcell.svg";
import unite from "./../../assets/img/unite.svg";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Offers = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const offersData = [
        {
            title: "4G Romania",
            flag: romania,
            subtitle: `${t("Subtitle")}`,
            price1: "35",
            price2: "60",
            price3: "100",
            operators: {
                operator1: telero,
            },
            imgheight: "40",
        },
        {
            title: "4G Denmark",
            flag: denmark,
            subtitle: `${t("Subtitle")}`,
            price1: "50",
            price2: "80",
            price3: "140",
            operators: {
                operator1: three,
                operator2: telia,
                operator3: lebara,
            },
            imgheight: "40",
        },
        {
            title: "4G Moldova",
            flag: moldova,
            subtitle: `${t("Subtitle")}`,
            price1: "25",
            price2: "45",
            price3: "80",
            operators: {
                operator1: orange,
                operator2: moldcell,
                operator3: unite,
            },
            imgheight: "36",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="container container_offers" id="offers" ref={ref}>
            <motion.div
                className="row"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="col-12 d-flex justify-content-center text_title_offer">
                    <p>{t("Offer")}</p>
                </div>
            </motion.div>
            <motion.div
                className="row d-flex justify-content-center align-items-center px-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {offersData.map((offer, index) => (
                    <motion.div
                        key={index}
                        className="offerblock col-4 d-flex flex-column align-items-center col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-12"
                        variants={itemVariants}
                    >
                        <OffersBlock
                            title={offer.title}
                            flag={offer.flag}
                            subtitle={offer.subtitle}
                            price1={offer.price1}
                            price2={offer.price2}
                            price3={offer.price3}
                            operators={offer.operators}
                            imgheight={offer.imgheight}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Offers;
