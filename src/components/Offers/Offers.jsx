import OffersBlock from "../OffersBlock/OffersBlock";
import "./offers.css"
import denmark from "./../../assets/img/denmark.svg";
import romania from "./../../assets/img/romania.svg"
import moldova from "./../../assets/img/moldova.svg"
import three from "./../../assets//img/3.svg";
import telia from "./../../assets//img/Telia.svg";
import lebara from "./../../assets//img/lebara.svg";
import telero from "./../../assets//img/telero.svg";
import orange from "./../../assets//img/orange.svg";
import moldcell from "./../../assets//img/moldcell.svg";
import unite from "./../../assets//img/unite.svg";

const offersData = [
    {
        title: "4G Romania",
        flag: romania,
        subtitle: "Fast response times. Enjoy high-speed connections over 35+ Mbps.",
        price1: "35",
        price2: "60",
        price3: "100",
        operators: {
          operator1: telero,
        },
        imgheight:"40",
    },
    {
      title: "4G Denmark",
      flag: denmark,
      subtitle: "Fast response times. Enjoy high-speed connections over 35+ Mbps.",
      price1: "50",
      price2: "80",
      price3: "140",
      operators: {
        operator1: three,
        operator2: telia,
        operator3: lebara,
      },
      imgheight:"40"
    },
    {
        title: "4G Moldova",
        flag: moldova,
        subtitle: "Fast response times. Enjoy high-speed connections over 35+ Mbps.",
        price1: "25",
        price2: "45",
        price3: "80",
        operators: {
          operator1: orange,
          operator2: moldcell,
          operator3: unite,
        },
        imgheight:"36"
      },
  ];
const Offers = () => {
    return ( 
        <div className="container container_offers" id="offers">
          <div className="row">
            <div className="col-12 d-flex justify-content-center text_title_offer">
              <p>What we offer</p>
            </div>
          </div>
            <div className="row d-flex justify-content-center align-items-center px-3">
                {offersData.map((offer, index) => (
                    <div className="offerblock col-4 d-flex flex-column align-items-center col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-12">
                        <OffersBlock
                            key={index}
                            title={offer.title}
                            flag={offer.flag}
                            subtitle={offer.subtitle}
                            price1={offer.price1}
                            price2={offer.price2}
                            price3={offer.price3}
                            operators={offer.operators}
                            imgheight={offer.imgheight}
                        />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Offers;