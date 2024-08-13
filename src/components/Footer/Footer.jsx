import { useTranslation } from "react-i18next";
import "./footer.css"

const Footer = () => {

    const { t } = useTranslation();

    return ( 
        <div className="container container_footer d-flex justify-content-center">
            <div className="row d-flex align-items-center justify-content-center row_content_footer">
                <div className="col-12 col-md-6 text-md-start text-center">
                    <div className="part_one_footer_text">
                        <div className="title_footer_part_one title_footer">
                            <p>proxy-lab.com</p>
                        </div>
                        <div className="subtitle_footer_part_one subtitle_footer">
                            <p>{t("SubtitleFooterPartOne")}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-md-start text-center">
                    <div className="part_two_footer_text">
                        <div className="title_footer_part_two title_footer">
                            <p>@ProxyLab</p>
                        </div>
                        <div className="subtitle_footer_part_two subtitle_footer">
                            <p>{t("SubtitleFooterPartTwo")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;