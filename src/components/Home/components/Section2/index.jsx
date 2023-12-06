import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../Image/Image";
import Product1 from '../../../../assets/images/product1.jpg'
import CountDown from "../../../CountDown";
const Section2 = () => {
    return(
        <section className="section2">
            <div className="main">
                <div className="special_Offer">
                    <div className="item">
                        <div className="info">
                            <Link to={"/"} className="Title">After Sun Hydrating & Cooling Gel</Link>
                            <ul>
                                <li>
                                    <span className="caption">Product Type : </span>
                                    <span className="value"> Facial cream </span>
                                </li>
                                <li>
                                    <span className="caption">Skin Type : </span>
                                    <span className="value"> All skin types </span>
                                </li>
                                <li>
                                    <span className="caption">Characteristics : </span>
                                    <span className="value"> Sun care </span>
                                </li>
                            </ul>
                            <div className="priceAll">
                                <del unit="USD"> 50.000</del>
                                <span  unit="USD" className="price"> 33.000</span>
                            </div>
                        </div>
                        <div className="boxTimer">
                            <span className="Title_time">
                                Time left until this offer
                            </span>
                           <CountDown />
                        </div>
                        <Link to={""} className="img_Offer">
                            <Image ImgSrc={Product1} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2