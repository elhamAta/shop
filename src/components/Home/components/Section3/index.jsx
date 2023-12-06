import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./components/ProductItem";
import PRODUCTS from './PRODUCTS.json'
const Section3 = () => {
    return( 
        <section className="section3">
            <div className="main">
              <h3 className="Title">  Bestsellers </h3>
              <Link to={"/detailproduct"} className="link_pro">
                Display all
              </Link>
            <ul className="product_Box">
              {PRODUCTS.map((items)=>(
                  <ProductItem item={items} />
                ))}
            </ul>
          </div>
        </section>
    )
}


export default Section3;