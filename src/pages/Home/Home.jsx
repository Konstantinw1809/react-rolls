import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "../../components/Cart/Cart";
import RollBlock from "../../components/RollBlock/RollBlock";
import Search from "../../components/Search/Search";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Sort from "../../components/Sort/Sort";

import { fetchRolls } from "../../redux/slices/rollSlice";
import { setCurrentPage } from "../../redux/slices/filterSlice";

import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.roll);
  const { searchValue, currentPage, sortType } = useSelector(
    (state) => state.filters
  );

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  React.useEffect(() => {
    (async () => {
      const order = sortType.sortProperty.includes("-") ? `asc` : `desc`;
      const sortBy = sortType.sortProperty.replace("-", "");
      const search = searchValue ? `search=${searchValue}` : "";

      dispatch(fetchRolls({ search, currentPage, order, sortBy }));
    })();
  }, [searchValue, currentPage, sortType.sortProperty]);

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="app__home">
      <div className="container">
        <Search />
        <Sort />
        <div className="app__home-content">
          <div className="app__home-row">
            {status === "loading"
              ? skeleton
              : items.map((roll) => {
                  if (
                    roll.title.toLowerCase().includes(searchValue.toLowerCase())
                  ) {
                    return <RollBlock {...roll} key={roll.title + roll.id} />;
                  }
                })}
          </div>
          <Cart />
        </div>
        <Pagination onChangePage={onChangePage} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Home;
