import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import searchIcon from "../../img/VectorG.svg";
import { SearchForm, SearchFormInput, SearchBtn } from "./NoticesSearch.styled";

const NoticesSearch = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [searchPet, setSearchPet] = useState(query ?? "");

  const handleSearchChange = e => {
    setSearchPet(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchPet.trim() === "") {
      toast.error("Enter to find a pet");
      return;
    }
    setSearchParams({ query: searchPet });
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
