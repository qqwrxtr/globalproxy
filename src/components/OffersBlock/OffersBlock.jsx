import React, { useEffect, useCallback, useState } from "react";
import "./offersblock.css";
import top from "./../../assets/img/top.svg";
import { useTranslation } from "react-i18next";

const OffersBlock = ({ imgheight, title, flag, subtitle, price1, price2, price3, operators }) => {
    const { t } = useTranslation();
    const [adjustedImgHeight, setAdjustedImgHeight] = useState(imgheight);

    const updateImgHeight = useCallback(() => {
        const initialHeight = parseInt(imgheight, 10);
        let newHeight = initialHeight;

        if (window.innerWidth> 1920) newHeight += 8;
        else if (window.innerWidth <= 1920) newHeight = initialHeight;
        else if (window.innerWidth < 351) newHeight -= 18;
        else if (window.innerWidth < 391) newHeight -= 15;
        else if (window.innerWidth < 531) newHeight -= 10;

        setAdjustedImgHeight(`${newHeight}px`);
    }, [imgheight]);

    useEffect(() => {
        updateImgHeight();
        window.addEventListener("resize", updateImgHeight);

        return () => window.removeEventListener("resize", updateImgHeight);
    }, [updateImgHeight]);

    return (
        <div className="offers_block">
            <div className="block1 d-flex align-items-center justify-content-center flex-column">
                <div className="title_title d-flex align-items-center justify-content-center">
                    <div className="txt_title_blocks">
                        <p>{t("Mobile")} Proxy {title}</p>
                    </div>
                    <div className="img_title_blocks">
                        <img src={flag} alt="" />
                    </div>
                </div>
                <div className="subtitle_offers">
                    <p>{subtitle}</p>
                </div>
            </div>
            <div className="block2">
                <div className="price_block d-flex flex-column align-items-center justify-content-center">
                    {[price1, price2, price3].map((price, index) => (
                        <div key={index} className={`price${index + 1}`}>
                            {index === 1 && <img src={top} alt="" className="position-absolute" />}
                            <p className="position-relative">
                                <span className="dollar">$</span>
                                <span className="price">{price}</span>
                                <span className="time_price">/ {index === 0 ? `2 ${t("week")}` : index === 1 ? `1 ${t("month")}` : `2 ${t("month")}`}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="block3 d-flex align-items-center justify-content-center flex-column">
                <div className="operators">
                    <div className="operators_title">
                        <p>{t("Operators")}</p>
                    </div>
                    <div className="operators_img">
                        {Object.values(operators).map((img, index) => (
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
                    <a href="https://app.proxy-lab.com/purchase">
                        <button>
                            <p>{t("BuyNow")}</p>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default React.memo(OffersBlock);
