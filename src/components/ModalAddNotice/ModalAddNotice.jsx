import Button from "components/Button";
import { useState } from "react";
import { BtnContainer, CategoryContainer, Container, Header, MoveBtn, MyBtn, MyForm, Text } from "./ModalAddNotice.styled";

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
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [comments, setComments] = useState("");

  const handleClick = e => setNoticeCategory(e.currentTarget.value);
  const checkCategory = value => {
    if (value === noticeCategory) {
      return true;
    }

    return false;
  };

  const handlePage = () => (page === 1 ? setPage(2) : setPage(1));

  const handleValue = e => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;

      case "name":
        setName(e.target.value);
        break;
      case "birth":
        setBirth(e.target.value);
        break;
      case "breed":
        setBreed(e.target.value);
        break;
      case "sex":
        setSex(e.target.value);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "comments":
        setComments(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <Header>Add pet</Header>

      {page === 1 && (
        <>
          <Text>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</Text>

          <CategoryContainer>
            {CATEGORY.map(({ category, value }, index) => (
              <MyBtn type="button" value={category} disabled={checkCategory(category)} onClick={handleClick} key={index}>
                {value}
              </MyBtn>
            ))}
          </CategoryContainer>
        </>
      )}

      <MyForm>
        {page === 1 && (
          <>
            <label>
              <p>
                Title of ad <span>*</span>
              </p>
              <input type="text" placeholder="Sell beautiful dog" name="title" onChange={handleValue} value={title} required />
            </label>
            <label>
              <p>Name Pet</p>
              <input type="text" placeholder="Julio Alvarez" name="name" onChange={handleValue} value={name} />
            </label>
            <label>
              <p> Day of birth</p>
              <input type="text" name="birth" placeholder="year-month-date" onChange={handleValue} value={birth} />
            </label>
            <label>
              <p> Breed</p>
              <input type="text" name="breed" placeholder="Husky" onChange={handleValue} value={breed} />
            </label>
          </>
        )}

        {page === 2 && (
          <>
            <label>
              <p>
                Title of ad <span>*</span>
              </p>
              <input type="button" placeholder="Sell beautiful dog" name="title" onChange={handleValue} value={title} required />
              <input type="button" placeholder="Sell beautiful dog" name="title" onChange={handleValue} value={title} required />
            </label>
            <label>
              <p>Name Pet</p>
              <input type="text" placeholder="Julio Alvarez" name="name" onChange={handleValue} value={name} />
            </label>
            <label>
              <p> Day of birth</p>
              <input type="text" name="birth" placeholder="year-month-date" onChange={handleValue} value={birth} />
            </label>
            <label>
              <p> Breed</p>
              <input type="text" name="breed" placeholder="Husky" onChange={handleValue} value={breed} />
            </label>
          </>
        )}
      </MyForm>

      <BtnContainer>
        {page === 1 && (
          <>
            <MoveBtn type="button" active={true} name="move-btn" color="accent" onClick={handlePage}>
              Next
            </MoveBtn>
            <MoveBtn type="button" name="move-btn">
              Cancel
            </MoveBtn>
          </>
        )}

        {page === 2 && (
          <>
            <MyBtn type="button" name="move-btn" color="accent">
              Done
            </MyBtn>
            <MyBtn type="button" name="move-btn" onClick={handlePage}>
              Back
            </MyBtn>
          </>
        )}
      </BtnContainer>
    </Container>
  );
}

export default ModalAddNotice;
