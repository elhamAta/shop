import React from "react";
import { Link } from "react-router-dom";
import PRODUCTS from './PRODUCTS.json'
import ProductItem from "../ProductItem";

const Products = () => {
    return( 
        <section className="section3">
            <div className="main">
              <h3 className="Title">  Bestsellers </h3>
              <Link to={"/detailproduct"} className="link_pro">
                Display all
              </Link>
            <ul className="product_Box">
              {PRODUCTS.map((item)=>(
                 <ProductItem item={item} />
                ))}
            </ul>
          </div>
        </section>
    )
}


export default Products;