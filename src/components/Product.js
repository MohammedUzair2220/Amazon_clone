import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import { uuid } from 'uuidv4';

const Product = ({id,title, price, image, rating}) => {
    const[{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:uuid(),
                title:title,
                price:price,
                image:image,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
            <div>
                <p className="product__info" >{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) => (
                    <p key={i}>⭐</p>
                ))}
            </div>
            <img 
                className="product__image" 
                src={image}
                alt="" 
            />
            <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product
