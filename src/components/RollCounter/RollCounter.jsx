import React from "react";
import "./RollCounter.scss";

const RollCounter = ({ onClickMinus, onClickPlus, count }) => {
  return (
    <div className="rollBlock-body_block-items">
      <div onClick={onClickMinus} className="rollBlock-body_block-items_minus">
        -
      </div>
      <div className="rollBlock-body_block-items_current">
        {count ? count : 0}
      </div>
      <div onClick={onClickPlus} className="rollBlock-body_block-items_plus">
        +
      </div>
    </div>
  );
};

export default RollCounter;
