import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { noticeActions } from "redux/notices/noticeSlice";
import searchIcon from "../../img/VectorG.svg";
import { SearchForm, SearchFormInput, SearchBtn } from "./NoticesSearch.styled";

const NoticesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("filter");

  const [searchPet, setSearchPet] = useState(query ?? "");
  const dispatch = useDispatch();

  const handleSearchChange = e => {
    setSearchPet(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    searchPet ? setSearchParams({ filter: searchPet }) : setSearchParams({});

    dispatch(noticeActions.changeFilter(searchPet));
    dispatch(noticeActions.changePage(1));
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput type="text" value={searchPet} name="query" autoFocus placeholder="Search" onChange={handleSearchChange} />
        <SearchBtn type="submit" onClick={handleSubmit}>
          <img src={searchIcon} alt="searchIcon" />
        </SearchBtn>
      </SearchForm>
    </>
  );
};

export default NoticesSearch;
