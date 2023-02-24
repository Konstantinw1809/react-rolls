import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

import RollCounter from "../RollCounter/RollCounter";
import "./RollBlock.scss";

const RollBlock = ({
  title,
  img,
  price,
  weight,
  quantity,
  ingredients,
  id,
}) => {
  const dispatch = useDispatch();

  const [count, setCount] = React.useState(0);

  const onClickMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickAdd = () => {
    if (count !== 0) {
      dispatch(
        addItem({ title, img, price, weight, quantity, ingredients, id, count })
      );
    }
  };

  return (
    <div className="rollBlock">
      <Link to={`/roll/${id}`}>
        <img
          className="rollBlock-img"
          src={process.env.PUBLIC_URL + img}
          alt="roll"
        />
      </Link>
      <div className="rollBlock-body">
        <Link to={`/roll/${id}`}>
          <h4 className="rollBlock-body_title">{title}</h4>
        </Link>
        <p className="rollBlock-body_quantity">{quantity} шт.</p>

        <div className="rollBlock-body_block">
          <RollCounter
            onClickMinus={onClickMinus}
            onClickPlus={onClickPlus}
            count={count}
          />

          <div className="rollBlock-body_block-price">
            <div className="rollBlock-body_block-price__weight">{weight} г</div>
            <div className="rollBlock-body_block-price__currency">
              {price} грн
            </div>
          </div>
        </div>

        <button
          onClick={onClickAdd}
          type="button"
          className="rollBlock-body_btn"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default RollBlock;
