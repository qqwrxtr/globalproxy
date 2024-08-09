import "./banner.css"
import main_bg from "./../../assets/video/mianbg.gif"
import { useTranslation } from "react-i18next";

const Banner = () => {

    const {t} = useTranslation();

    return ( 
        <div className="banner_container">
            <div className="row">
                <div className="absolute_bg container-fluid">
                    <img src={main_bg} alt="" />
                </div>
            </div>
            <div className="row d-flex flex-column align-items-center text-center text_banner">
                <div className="col-12 column_content_banner">
                    <div className="title_banner">
                        <h2>{t("Welcome to")} <span className="main_color">Proxy Lab!</span></h2>
                    </div>
                    <div className="subtitle">
                        <p>{t("Banner_info")}</p>
                    </div>
                    <div className="sign_up_now_button d-flex justify-content-center">
                        <a href="https://proxy-lab.com/register" target="_blank">
                            <div className="txt_sign_up_now">
                                <p>{t("Sign Up Now")}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;
