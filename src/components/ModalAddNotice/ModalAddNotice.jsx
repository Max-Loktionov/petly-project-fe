import { useState } from "react";
import {
  BtnContainer,
  CategoryContainer,
  Container,
  Header,
  ImageBox,
  ImageContainer,
  InputsNames,
  MoveBtn,
  MyBtn,
  MyFemaleSVG,
  MyForm,
  MyImageCross,
  MyMaleSVG,
  RadioContainer,
  RadioInputs,
  Text,
} from "./ModalAddNotice.styled";

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
  const [sex, setSex] = useState("male");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [comments, setComments] = useState("");

  const handleClick = e => setNoticeCategory(e.currentTarget.value);

  const checkCategory = value => {
    if (value !== "sell" && price !== "") {
      setPrice("");
    }

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
        setSex(e.target.id);
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

  const handleImage = e => {
    const imageContainer = document.getElementById("image_container");

    imageContainer.style.backgroundImage = `url(${URL.createObjectURL(
      e.target.files[0]
    )})`;

    imageContainer.childNodes[0].style.visibility = "hidden";
  };

  return (
    <Container>
      <Header>Add pet</Header>

      {page === 1 && (
        <>
          <Text>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </Text>

          <CategoryContainer>
            {CATEGORY.map(({ category, value }, index) => (
              <MyBtn
                type="button"
                value={category}
                disabled={checkCategory(category)}
                onClick={handleClick}
                key={index}
              >
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
              <InputsNames>
                Title of ad<span>*</span>
              </InputsNames>
              <input
                type="text"
                placeholder="Sell beautiful dog"
                name="title"
                onChange={handleValue}
                value={title}
                required
              />
            </label>
            <label>
              <InputsNames>Name Pet</InputsNames>
              <input
                type="text"
                placeholder="Julio Alvarez"
                name="name"
                onChange={handleValue}
                value={name}
              />
            </label>
            <label>
              <InputsNames> Day of birth</InputsNames>
              <input
                type="date"
                name="birth"
                placeholder="Set date"
                onChange={handleValue}
                value={birth}
              />
            </label>
            <label>
              <InputsNames> Breed</InputsNames>
              <input
                type="text"
                name="breed"
                placeholder="Husky"
                onChange={handleValue}
                value={breed}
              />
            </label>
          </>
        )}

        {page === 2 && (
          <>
            <InputsNames className="icon_header">
              The sex<span>*</span>
            </InputsNames>
            <RadioContainer>
              <div>
                <RadioInputs
                  type="radio"
                  id="male"
                  name="sex"
                  onChange={handleValue}
                  checked={sex === "male" ? true : false}
                />
                <label htmlFor="male" className="icon_label">
                  <MyMaleSVG />
                  <InputsNames className="icon_name">Male</InputsNames>
                </label>
              </div>

              <div>
                <RadioInputs
                  type="radio"
                  id="female"
                  name="sex"
                  onChange={handleValue}
                  checked={sex === "female" ? true : false}
                />
                <label htmlFor="female" className="icon_label">
                  <MyFemaleSVG />
                  <InputsNames className="icon_name">Female</InputsNames>
                </label>
              </div>
            </RadioContainer>

            <label>
              <InputsNames>
                Location<span>*</span>
              </InputsNames>
              <input
                type="text"
                placeholder="Kyiv"
                name="location"
                value={location}
                onChange={handleValue}
                required
              />
            </label>

            {noticeCategory === "sell" && (
              <label>
                <InputsNames>
                  Price<span>*</span>
                </InputsNames>
                <input
                  type="number"
                  name="price"
                  placeholder="123.99"
                  onChange={handleValue}
                  value={price}
                  required
                />
              </label>
            )}

            <ImageContainer>
              <input
                type="file"
                name="image"
                id="image"
                accept=".jpg,.jpeg,.png"
                onChange={handleImage}
              />
              <label htmlFor="image" id="image-label">
                <InputsNames> Load the pet's image</InputsNames>
                <ImageBox id="image_container">
                  <MyImageCross />
                </ImageBox>
              </label>
            </ImageContainer>

            <label>
              <InputsNames> Comments </InputsNames>
              <input
                type="text"
                name="comments"
                placeholder="The best dog ever"
                onChange={handleValue}
                value={comments}
              />
            </label>
          </>
        )}
      </MyForm>

      <BtnContainer>
        {page === 1 && (
          <>
            <MoveBtn
              type="button"
              active={true}
              name="move-btn"
              color="accent"
              onClick={handlePage}
            >
              Next
            </MoveBtn>
            <MoveBtn type="button" name="move-btn">
              Cancel
            </MoveBtn>
          </>
        )}

        {page === 2 && (
          <>
            <MoveBtn type="button" name="move-btn" active={true}>
              Done
            </MoveBtn>
            <MoveBtn type="button" name="move-btn" onClick={handlePage}>
              Back
            </MoveBtn>
          </>
        )}
      </BtnContainer>
    </Container>
  );
}

export default ModalAddNotice;
