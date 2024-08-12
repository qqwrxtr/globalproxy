import React, { useState, useEffect } from "react";
import "./offersblock.css";
import top from "./../../assets/img/top.svg";
import { useTranslation } from "react-i18next";

const OffersBlock = (props) => {

    const {t} = useTranslation();

    const [adjustedImgHeight, setAdjustedImgHeight] = useState(props.imgheight);

    useEffect(() => {
        const updateImgHeight = () => {
            const initialHeight = parseInt(props.imgheight, 10);
    
            if(window.innerWidth < 351){
                setAdjustedImgHeight(`${initialHeight - 18}px`);
            } else if (window.innerWidth < 391) {
                setAdjustedImgHeight(`${initialHeight - 15}px`);
            } else if (window.innerWidth < 531) {
                setAdjustedImgHeight(`${initialHeight - 10}px`);
            } else {
                setAdjustedImgHeight(`${initialHeight}px`);
            }
        };
    
        updateImgHeight();
    
        window.addEventListener('resize', updateImgHeight);
    
        return () => {
            window.removeEventListener('resize', updateImgHeight);
        };
    }, [props.imgheight]);
    

    return (
        <div className="offers_block">
            <div className="block1 d-flex align-items-center justify-content-center flex-column">
                <div className="title_title d-flex align-items-center justify-content-center">
                    <div className="txt_title_blocks">
                        <p>{t("Mobile")} Proxy {props.title}</p>
                    </div>
                    <div className="img_title_blocks">
                        <img src={props.flag} alt="" />
                    </div>
                </div>
                <div className="subtitle_offers">
                    <p>{props.subtitle}</p>
                </div>
            </div>
            <div className="block2">
                <div className="price_block d-flex flex-column align-items-center justify-content-center">
                    <div className="price1">
                        <p className="position-relative">
                            <span className="dollar">$</span>
                            <span className="price">{props.price1}</span>
                            <span className="time_price">/ 2 {t("week")}</span>
                        </p>
                    </div>
                    <div className="price2">
                        <img src={top} alt="" className="position-absolute"/>
                        <p className="position-relative">
                            <span className="dollar">$</span>
                            <span className="price">{props.price2}</span>
                            <span className="time_price">/ 1 {t("month")}</span>
                        </p>
                    </div>
                    <div className="price3">
                        <p className="position-relative">
                            <span className="dollar">$</span>
                            <span className="price">{props.price3}</span>
                            <span className="time_price">/ 2 {t("month")}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="block3 d-flex align-items-center justify-content-center flex-column">
                <div className="operators">
                    <div className="operators_title">
                        <p>{t("Operators")}</p>
                    </div>
                    <div className="operators_img">
                        {Object.values(props.operators).map((img, index) => (
                            <img
                                src={img}
                                alt=""
                                key={index}
                                style={{ height: adjustedImgHeight }}
                            />
                        ))}
                    </div>
                </div>
                <div className="buy_now">
                    <button>
                        <p>{t("BuyNow")}</p> 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OffersBlock;
