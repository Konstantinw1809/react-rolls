import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addItem } from "../../redux/slices/cartSlice";

import Cart from "../../components/Cart/Cart";
import RollCounter from "../../components/RollCounter/RollCounter";

import "./FullRoll.scss";

const FullRoll = () => {
  const { id } = useParams();
  const [roll, setRoll] = React.useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => id === obj.id)
  );

  const [count, setCount] = React.useState(cartItem ? cartItem.count : 0);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://63ed0de2e6ee53bbf590356d.mockapi.io/items/${id}`
        );
        setRoll(response.data);
      } catch (error) {
        alert("");
        navigate("/");
      }
    })();
  }, []);

  const onClickMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickAdd = () => {
    dispatch(addItem({ ...roll, count }));
  };

  if (!roll) {
    return <div className="container">Загрузка...</div>;
  }

  return (
    <div className="app__fullRoll">
      <div className="container">
        <div className="app__fullRoll-content">
          <div className="app__fullRoll-content_image">
            <img src={process.env.PUBLIC_URL + roll.img} alt="roll" />
          </div>
          <div className="app__fullRoll-content_block">
            <h2 className="app__fullRoll-content_block-title">{roll.title}</h2>
            <div className="app__fullRoll-content_block-parameters">
              {roll.quantity} шт. / {roll.weight} г
            </div>
            <div className="app__fullRoll-content_block-ingredients">
              Состав: {roll.ingredients}
            </div>
            <div className="app__fullRoll-content_block-price">
              Цена: {roll.price} грн
            </div>
            <RollCounter
              onClickMinus={onClickMinus}
              onClickPlus={onClickPlus}
              count={count}
            />
            <div className="app__fullRoll-content_block-btn">
              <button
                onClick={onClickAdd}
                type="button"
                className="app__fullRoll-content_block-btn_add"
              >
                Добавить в корзину
              </button>
              <Link to="/" className="app__fullRoll-content_block-btn_wrapper">
                <button
                  type="button"
                  className="app__fullRoll-content_block-btn_wrapper-return"
                >
                  Вернуться назад
                </button>
              </Link>
            </div>
          </div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default FullRoll;
