import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../Image/Image";
import icon1 from '../../../../assets/icons/icon1.png';
import icon1h from '../../../../assets/icons/icon1-h.png';
import icon2 from '../../../../assets/icons/icon2.png';
import icon2h from '../../../../assets/icons/icon2-h.png';
import icon3 from '../../../../assets/icons/icon3.png';
import icon3h from '../../../../assets/icons/icon3-h.png';
import icon4 from '../../../../assets/icons/icon4.png';
import icon4h from '../../../../assets/icons/icon4-h.png';

const Section1 = () =>{
    return(
        <section className="services container">
             <ul className="list">
                <li>
                    <Link to={"/"} >
                        <Image ImgSrc={icon1}  className="img1" />
                        <Image ImgSrc={icon1h}  className="img2" />
                        <span>Payment on the spot</span>
                    </Link> 
                </li>
                <li>
                    <Link to={"/"} >
                        <Image ImgSrc={icon2}  className="img1" />
                        <Image ImgSrc={icon2h}  className="img2" />
                        <span>Quality guarantee</span>
                    </Link> 
                </li>
                <li>
                    <Link to={"/"} >
                        <Image ImgSrc={icon3}  className="img1" />
                        <Image ImgSrc={icon3h}  className="img2" />
                        <span> Fast delivery</span>
                    </Link> 
                </li>
                <li>
                    <Link to={"/"} >
                        <Image ImgSrc={icon4}  className="img1" />
                        <Image ImgSrc={icon4h}  className="img2" />
                        <span> Free send</span>
                    </Link> 
                </li>
               
            </ul>
        </section>
    )
}

export default Section1