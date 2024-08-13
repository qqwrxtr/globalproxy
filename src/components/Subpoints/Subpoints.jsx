import subpoint from "./../../assets/img/confirm.svg";
import s from "./subpoints.module.css";

const Subpoints = ({ text, variant }) => {
    const blockClass = variant === "dashboard" ? s.subpoint_block_dashboard : s.subpoint_block_tech;
    const imgClass = variant === "dashboard" ? s.img_subpoint_dashboard : s.img_subpoint_tech;
    const textClass = variant === "dashboard" ? s.subpoint_text_dashboard : s.subpoint_text_tech;
    const asterisk = variant === "dashboard" ? s.asterisk_dash : s.asterisk_tech;

    return (
        <div className={blockClass}>
            <div className={imgClass}>
                <img src={subpoint} alt="" />
            </div>
            <div className={textClass}>
                <p><span className={asterisk}>*</span> {text}</p>
            </div>
        </div>
    );
};

export default Subpoints;
