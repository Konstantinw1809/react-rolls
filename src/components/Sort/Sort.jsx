import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../../redux/slices/filterSlice";

import "./Sort.scss";

const list = [
  { name: "по алфавиту А-Я", sortProperty: "-title" },
  { name: "по алфавиту Я-А", sortProperty: "title" },
  { name: "от дешевых к дорогим", sortProperty: "-price" },
  { name: "от дорогих к дешевым", sortProperty: "price" },
];

const Sort = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filters.sortType);
  const [sortOpen, setSortOpen] = React.useState(false);
  const sortRef = React.useRef(null);

  const onClickSortType = (obj) => {
    dispatch(setSortType(obj));
    setSortOpen(!sortOpen);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setSortOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="app__sort">
      <div
        onClick={() => setSortOpen(!sortOpen)}
        className="app__sort-dropdown"
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/img/dropdown.png"}
          alt="dropdown"
        />
        <b>Сортировка по:</b>
        <p>{sortType.name}</p>
      </div>
      {sortOpen && (
        <div className="app__sort-popup">
          <ul className="app__sort-popup_list">
            {list.map((obj, index) => (
              <li
                onClick={() => onClickSortType(obj)}
                className={`app__sort-popup_list-element ${
                  obj.sortProperty === sortType.sortProperty ? "active" : ""
                }`}
                key={obj.name + index}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
