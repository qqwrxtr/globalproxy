import { useTranslation } from "react-i18next";
import "./techsupport.css"
import Subpoints from "../Subpoints/Subpoints";
import globus from "./../../assets/img/globus.svg"


const TechSupport = () => {

    const {t} = useTranslation();

    const subpoints = [
        {text:t("TextTech1")},
        {text:t("TextTech2")},
        {text:t("TextTech3")}
    ]


    return ( 
        <div className="container container_tech d-flex flex-column justify-content-center" id="support">
            <div className="row w-100">
                <div className="col-12 tech_title d-flex justify-content-center align-items-center ">
                    <p>{t("Tech_Support")}</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center for_wrap_tech">
                <div className="col-md-4 col-12 col_gap_tech">
                    <div className="text_part_tech">
                        <div className="title_tech">
                            <p>{t("TitleTech")}</p>
                        </div>
                        <div className="subtitle_tech">
                            <p>{t("SubtitleTech")}</p>
                        </div>
                    </div>
                    <div className="subpoints_container">
                        {subpoints.map((points, index) => (
                            <div className="subpoints" key={index}>
                                <Subpoints text={points.text} variant="tech"/>
                            </div>
                        ))}
                    </div>
                    <div className="contact_us_button_tech">
                        <a href="">
                            <button>{t("Contact_Us")}</button>
                        </a>
                    </div>
                </div>
                <div className="col-md-4 col-12 img_tech d-flex align-items-center justify-content-end">
                        <img src={globus} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
     );
}
 
export default TechSupport;