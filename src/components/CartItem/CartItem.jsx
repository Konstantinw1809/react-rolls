import React from "react";
import { useDispatch } from "react-redux";
import { minusItem, plusItem, removeItem } from "../../redux/slices/cartSlice";

import "./CartItem.scss";

const CartItem = ({ title, img, price, weight, quantity, id, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(plusItem(id));
  };

  const onClickMinus = () => {
    if (count !== 1) {
      dispatch(minusItem(id));
    }
  };

  const onClickRemove = () => {
    dispatch(removeItem({ id, price, count }));
  };

  return (
    <div className="cart-item">
      <div className="cart-item_top">
        <div className="cart-item_top-img">
          <img src={process.env.PUBLIC_URL + img} alt="roll" />
        </div>
        <div className="cart-item_top-desc">
          <div className="cart-item_top-desc_title">{title}</div>
          <div className="cart-item_top-desc_weight">
            {quantity} шт. / {weight}г.
          </div>

          <div className="cart-item__top-desc_details">
            <div className="cart-item_top-desc_details-items">
              <div
                onClick={onClickMinus}
                className="cart-item_top-desc_details-items_minus"
              >
                -
              </div>
              <div className="cart-item_top-desc_details-items_current">
                {count}
              </div>
              <div
                onClick={onClickPlus}
                className="cart-item_top-desc_details-items_plus"
              >
                +
              </div>
            </div>

            <div className="cart-item_top-desc_details-price">
              <div className="price__currency">{price} грн</div>
            </div>
          </div>
        </div>
        <div onClick={onClickRemove} className="cart-item_top-remove">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/remove.png"}
            alt="remove"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
