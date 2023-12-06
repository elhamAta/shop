import React,{useContext,useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import Image from '../../../../Image/Image'
import Button from '../../../../Button/Button'
import { MdAddShoppingCart,MdRemoveShoppingCart } from "react-icons/md";
import CartContext from "../../../../../contexts/CartContext";
import ImgPro from '../../../../../assets/images/product2.jpg'

const ProductItem = ({ item }) => {
    const { carts ,dispatchCart } = useContext(CartContext);

    const added = carts.includes(item.id);
    const productItemRef = useRef(null)
    
    const handleAdd = () => {
        if(added) {    
            dispatchCart({
                type : "REMOVE_FROM_CART",
                id: item.id,
            });
        } else {
            dispatchCart({
                type : "ADD_TO_CART",
                id: item.id,
            });
        }
    }


    useEffect(() => {
        productItemRef.current.classList.add('visible')
    }, [])
    
    return( 
        <li className="item" key={`item-${item.id}`} ref={productItemRef}>
            <Link to={`/product/${item.id}`} className="img--product">
                <Image ImgSrc={ImgPro} />
            </Link>
            <div className="info--product">
                <Link className="name" to={`/product/${item.id}`}>
                    {item.name}
                </Link>
                <div className="priceAll">
                    <del unit="USD"> {item.price}</del>
                    <span  unit="USD" className="price"> 33.000</span>
                </div>
                <Button className={"icon-basket basket"}
                    handleClick={handleAdd}
                >     
                    {added ? (
                        <>
                            <MdRemoveShoppingCart />
                        Remove from basket
                        </>
                    ): (
                        <>
                        <MdAddShoppingCart />
                        Add to basket
                        </>
                    )}
                </Button>
            </div>
        </li>
    )
}


export default ProductItem;