import OffersBlock from "../OffersBlock/OffersBlock";
import "./offers.css"
import denmark from "./../../assets/img/denmark.svg";
import three from "./../../assets//img/3.svg";
import telia from "./../../assets//img/Telia.svg";
import lebara from "./../../assets//img/lebara.svg";



const offersData = [
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
    },
  ];
const Offers = () => {
    return ( 
        <div className="container">
            <div className="row d-flex justify-content-center">
                {offersData.map((offer, index) => (
                    <div className="col-4">
                        <OffersBlock
                            key={index}
                            title={offer.title}
                            flag={offer.flag}
                            subtitle={offer.subtitle}
                            price1={offer.price1}
                            price2={offer.price2}
                            price3={offer.price3}
                            operators={offer.operators}
                        />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Offers;