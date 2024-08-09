import "./offersblock.css"
import top from "./../../assets/img/top.svg"

const OffersBlock = (props) => {
    const operatorImages = Object.values(props.operators);

    return ( 
        <div className="offers_block">
            <div className="block1 d-flex align-items-center justify-content-center flex-column">
                <div className="title_title d-flex align-items-center justify-content-center">
                    <div className="txt_title_blocks">
                        <p>Mobile Proxy {props.title}</p>
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
                <div className="price_block d-flex flex-column align-items-center">
                    <div className="price1">
                        <p className="position-relative">
                            <span className="dollar">$</span>
                            <span className="price">{props.price1}</span>
                            <span className="time_price">/ 2 weeks package</span>
                        </p>
                    </div>
                    <div className="price2">
                        <img src={top} alt="" className="position-absolute"/>
                        <p className="position-relative">
                            <span className="dollar">$</span>
                            <span className="price">{props.price2}</span>
                            <span className="time_price">/ 1 month package</span>
                        </p>
                    </div>
                    <div className="price3">
                        <p className="position-relative">
                            <span className="dollar">$</span>
                            <span className="price">{props.price3}</span>
                            <span className="time_price">/ 2 months package</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="block3 d-flex align-items-center justify-content-center flex-column">
            <div className="operators">
                <div className="operators_title">
                    <p>Operators</p>
                </div>
                <div className="operators_img">
                    {operatorImages.map((img , index) => (
                        <img src={img} alt="" key={index} />
                    ))}
                </div>
                </div>
                <div className="buy_now">
                    <button>
                        <p>BUY NOW!</p> 
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default OffersBlock;