import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../Image/Image";
import newsPic from '../../../../assets/images/news.jpg'
const Section4 = () => {
    return(
        <section className="section4">
            <div className="main">
                <h4 className="Title">All about beauty</h4>
                <ul className="list_service">
                    <li>
                        <figure>    
                            <Link to={'/'} className="img_news">
                                <Image ImgSrc={newsPic} />
                            </Link>
                            <figcaption > 
                                <Link to={'/'} className="name">
                                    Dermacol beauty tips          
                                </Link> 
                                <div className="desc">
                                    Treat yourself and let our make-up artists guide you through the world of smart tricks to achieve the perfect make-up.
                                </div>
                                <div className="info_bar">
                                    <span className="date"> October 4, 2023  </span>
                                </div>
                            </figcaption>    
                        </figure>
                    </li>
                    <li>
                        <figure>    
                            <Link to={'/'} className="img_news">
                                <Image ImgSrc={newsPic} />
                            </Link>
                            <figcaption > 
                                <Link to={'/'} className="name">
                                    Dermacol beauty tips          
                                </Link> 
                                <div className="desc">
                                    Treat yourself and let our make-up artists guide you through the world of smart tricks to achieve the perfect make-up.
                                </div>
                                <div className="info_bar">
                                    <span className="date"> October 4, 2023  </span>
                                </div>
                            </figcaption>    
                        </figure>
                    </li>
                    <li>
                        <figure>    
                            <Link to={'/'} className="img_news">
                                <Image ImgSrc={newsPic} />
                            </Link>
                            <figcaption > 
                                <Link to={'/'} className="name">
                                    Dermacol beauty tips          
                                </Link> 
                                <div className="desc">
                                    Treat yourself and let our make-up artists guide you through the world of smart tricks to achieve the perfect make-up.
                                </div>
                                <div className="info_bar">
                                    <span className="date"> October 4, 2023  </span>
                                </div>
                            </figcaption>    
                        </figure>
                    </li>
                </ul>
                <Link to={'/'} className="btn">More</Link>
            </div>
        </section>
    )
}

export default Section4