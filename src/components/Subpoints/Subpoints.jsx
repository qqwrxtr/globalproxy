import subpoint from "./../../assets/img/confirm.svg"
import "./subpoints.css"

const Subpoints = (props) => {
    return ( 
        <div className="subpoint_block">
            <div className="img_subpoint">
                <img src={subpoint} alt="" />
            </div>
            <div className="subpoint_text">
                <p>{props.text}</p>
            </div>
        </div>
     );
}
 
export default Subpoints;