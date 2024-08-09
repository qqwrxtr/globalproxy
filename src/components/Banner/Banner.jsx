import "./banner.css"
import main_bg from "./../../assets/video/mainbg.mp4"

const Banner = () => {
    return ( 
        <div className="banner_container">
            <div className="row">
                <div className="absolute_bg container-fluid">
                        <video autoPlay muted loop>
                            <source src={main_bg} type="video/mp4"/>
                        </video>
                </div>
            </div>
            <div className="row d-flex flex-column align-items-center text-center text_banner">
                <div className="col-12 column_content_banner">
                    <div className="title_banner">
                        <h2>Welcome to <span className="main_color">Proxy Lab!</span></h2>
                    </div>
                    <div className="subtitle">
                        <p>Elevate your browsing with Proxy Lab’s high-speed mobile proxies. Enjoy seamless connections, unmatched reliability, and extensive IP coverage. </p>
                    </div>
                    <div className="sign_up_now_button d-flex justify-content-center">
                        <a href="https://proxy-lab.com/register" target="_blank">
                            <div className="txt_sign_up_now">
                                <p>Sign Up Now</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;
