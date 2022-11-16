import Button from "components/Button";
import { useState } from "react";
import { Container, Header, MyBtn, MyForm } from "./ModalAddNotice.styled";

const CATEGORY = [
  {
    category: "lost/found",
    value: "Lost/found",
  },
  {
    category: "in_good_hands",
    value: "In good hands",
  },
  {
    category: "sell",
    value: " Sell",
  },
];

function ModalAddNotice() {
  const [page, setPage] = useState(1);
  const [noticeCategory, setNoticeCategory] = useState("sell");

  const handleClick = e => setNoticeCategory(e.currentTarget.value);
  const checkCategory = value => {
    if (value === noticeCategory) {
      return true;
    }

    return false;
  };

  const handlePage = () => (page === 1 ? setPage(2) : setPage(1));

  if (page === 1) {
    return (
      <Container>
        <Header>Add pet</Header>
        <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>

        <div>
          {CATEGORY.map(({ category, value }) => (
            <MyBtn type="button" value={category} disabled={checkCategory(category)} onClick={handleClick}>
              {value}
            </MyBtn>
          ))}
        </div>

        <MyForm>
          <label>
            <p>
              Title of ad <span>*</span>
            </p>
            <input type="text" placeholder="Type name pet" name="title" />
          </label>
          <label>
            <p>Name Pet</p>
            <input type="text" placeholder="Type name pet" name="name" />
          </label>
          <label>
            <p> Day of birth</p>
            <input type="text" name="birth" placeholder="Type date of birth" />
          </label>
          <label>
            <p> Breed</p>
            <input type="text" name="breed" placeholder="Type breed" />
          </label>
        </MyForm>

        <Button type="button" active={true} name="move-btn" color="accent" onClick={handlePage}>
          Next
        </Button>
        <Button type="button" name="move-btn">
          Cancel
        </Button>
      </Container>
    );
  }

  if (page === 2) {
    return (
      <Container>
        <Header>Add pet</Header>
        <MyBtn type="button" name="move-btn" color="accent">
          Done
        </MyBtn>
        <MyBtn type="button" name="move-btn" onClick={handlePage}>
          Back
        </MyBtn>
      </Container>
    );
  }
}

export default ModalAddNotice;
