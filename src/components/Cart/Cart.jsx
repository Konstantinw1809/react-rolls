import React from "react";
import CartItem from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearItems, fetchCart } from "../../redux/slices/cartSlice";
// import axios from "axios";

import "./Cart.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);

  const onClickClear = () => {
    dispatch(clearItems());
  };

  // const onClickAddToOrders = async () => {
  //   try {
  //     await axios.post("",
  //       items
  //     );
  //     onClickClear();
  //   } catch (error) {
  //     alert("Ошибка при добавлении заказа");
  //   }
  // };

  // React.useEffect(() => {
  //   (async () => {
  //     dispatch(fetchCart());
  //   })();
  // }, []);

  const emptyCart = (
    <div className="app__cart-body_cart-wrapper-empty">Корзина пуста</div>
  );

  return (
    <div className="app__cart">
      <div className="app__cart-body">
        <div className="app__cart-body_block">
          <h5 className="app__cart-body_block-title">Ваш заказ</h5>
          <button onClick={onClickClear} className="app__cart-body_block-clear">
            Очистить корзину
          </button>
        </div>
        <div className="app__cart-body_cart-wrapper">
          {items.length === 0
            ? emptyCart
            : items.map((roll) => (
                <CartItem {...roll} key={roll.title + roll.id} />
              ))}
        </div>
        <div className="app__cart-total">
          <p>
            <span>Доставка:</span>
            <span className="delivery-cost">бесплатно</span>
          </p>
          <p>
            <span>Итого:</span>
            <span className="app__cart-total_price">{totalPrice} грн</span>
          </p>
        </div>
      </div>

      <div className="app__cart-form">
        <h5 className="app__cart-form_title">Оформить заказ</h5>
        <form>
          <div className="app__cart-form_group">
            <input
              type="text"
              className="form-control"
              placeholder="Ваш номер телефона"
            />
          </div>
          <button
            // onClick={onClickAddToOrders}
            type="submit"
            className="app__cart-form_btn"
          >
            Заказать
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
