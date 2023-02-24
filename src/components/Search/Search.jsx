import React from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

import "./Search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className="app__search">
      <div className="app__search-content">
        <div className="app__search-content_loupe">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/loupe.svg"}
            alt="loupe"
          />
        </div>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className="app__search-content_input"
          placeholder="Поиск роллов"
        />
        {value && (
          <img
            onClick={onClickClear}
            src={process.env.PUBLIC_URL + "/assets/img/remove.png"}
            className="app__search-content_close"
            alt="clear"
          />
        )}
      </div>
    </div>
  );
};

export default Search;
