import { ErrorText } from "components/ModalAddsPet/ModalAddsPet.styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddNoticeMutation } from "redux/noticesApi";

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

function ModalAddNotice({ onClose }) {
  const [nextPage, setNextPage] = useState(false);
  const [isAvatar, setIsAvatar] = useState(false);
  const [noticeCategory, setNoticeCategory] = useState("sell");

  const [addNotice] = useAddNoticeMutation();

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const cityRegex = /^(\w+(,)\s*)+\w+$/;

  const handleSubmitClick = async (formdata, evt) => {
    try {
      console.log("formdata", formdata);
      // onClose(evt);
      formdata.male = sex;
      await addNotice(formdata);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleNextClick = () => {
    setNextPage(true);
  };

  const handleBackClick = () => {
    setNextPage(false);
  };

  const handleImage = e => {
    const imageContainer = document.getElementById("image_container");
    setIsAvatar(true);
    imageContainer.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`;
  };

  // const handleImage = e => {
  //   const imageContainer = document.getElementById("image_container");

  //   imageContainer.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`;

  //   imageContainer.childNodes[0].style.visibility = "hidden";
  // };
  const textRegexp = /[a-zA-Z]+/;
  const dateRegexp = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;

  // const [page, setPage] = useState(1);
  // const [noticeCategory, setNoticeCategory] = useState("sell");
  // const [title, setTitle] = useState("");
  // const [name, setName] = useState("");
  // const [birth, setBirth] = useState("");
  // const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("male");
  // const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  // const [comments, setComments] = useState("");

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

  // const handlePage = () => (page === 1 ? setPage(2) : setPage(1));

  const handleValue = e => {
    switch (e.target.name) {
      case "sex":
        setSex(e.target.id);
        break;
      case "price":
        setPrice(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <Header>Add pet</Header>
      <MyForm encType="multipart/form-data" onSubmit={handleSubmit(handleSubmitClick)}>
        {!nextPage && (
          <>
            <Text>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</Text>
            <CategoryContainer>
              {CATEGORY.map(({ category, value }, index) => (
                <MyBtn type="button" value={category} disabled={checkCategory(category)} onClick={handleClick} key={index}>
                  {value}
                </MyBtn>
              ))}
            </CategoryContainer>

            <InputsNames>
              Title of ad<span>*</span>
            </InputsNames>
            <input
              type="text"
              placeholder="Sell beautiful dog"
              name="title"
              {...register("title", {
                required: "Title is required.",
                maxLength: {
                  value: 48,
                  message: "The length of this field cannot exceed 48 characters",
                },
                minLength: {
                  value: 2,
                  message: "This input must exceed 2 characters",
                },
                pattern: {
                  value: /[a-zA-Z]+/,
                  message: "Title should  contain only letters.",
                },
              })}
            />
            {errors.title && <ErrorText role="alert">{errors.title?.message}</ErrorText>}
            <InputsNames>Name Pet</InputsNames>
            <input
              type="text"
              placeholder="Julio Alvarez"
              name="name"
              {...register("name", {
                maxLength: {
                  value: 16,
                  message: "The length of this field cannot exceed 16 characters",
                },
                minLength: {
                  value: 2,
                  message: "This input must exceed 2 characters",
                },
                pattern: {
                  value: /[a-zA-Z]+/,
                  message: "Name should  contain only letters.",
                },
              })}
            />
            {errors.name && <ErrorText role="alert">{errors.name?.message}</ErrorText>}

            <InputsNames> Day of birth</InputsNames>
            <input
              type="text"
              name="birth"
              placeholder="Set date"
              {...register("birthday", {
                pattern: {
                  value: dateRegexp,
                  message: "birthday should  contain only numbers.",
                },
              })}
            />
            {errors.birth && <ErrorText role="alert">{errors.birth?.message}</ErrorText>}

            <InputsNames> Breed</InputsNames>
            <input
              type="text"
              name="breed"
              placeholder="Husky"
              {...register("breed", {
                maxLength: {
                  value: 24,
                  message: "The length of this field cannot exceed 24 characters",
                },
                minLength: {
                  value: 2,
                  message: "This input must exceed 2 characters",
                },
                pattern: {
                  value: /[a-zA-Z]+/,
                  message: "Breed should  contain only letters.",
                },
              })}
            />
            {errors.breed && <ErrorText role="alert">{errors.breed?.message}</ErrorText>}
          </>
        )}

        {nextPage && (
          <>
            <InputsNames className="icon_header">
              The sex<span>*</span>
            </InputsNames>
            <RadioContainer>
              <div>
                <RadioInputs type="radio" id="male" name="sex" onChange={handleValue} checked={sex === "male" ? true : false} />

                <label htmlFor="male" className="icon_label">
                  <MyMaleSVG />
                  <InputsNames className="icon_name">Male</InputsNames>
                </label>
              </div>

              <div>
                <RadioInputs type="radio" id="female" name="sex" onChange={handleValue} checked={sex === "female" ? true : false} />
                <label htmlFor="female" className="icon_label">
                  <MyFemaleSVG />
                  <InputsNames className="icon_name">Female</InputsNames>
                </label>
              </div>
            </RadioContainer>

            <InputsNames>
              Location<span>*</span>
            </InputsNames>
            <input
              type="text"
              placeholder="Kyiv"
              name="location"
              {...register("location", {
                pattern: { value: cityRegex, message: "Error. Example: Brovary, Kyiv" },
              })}
            />
            {errors.location && <ErrorText role="alert">{errors.location?.message}</ErrorText>}

            {noticeCategory === "sell" && (
              <>
                <InputsNames>
                  Price<span>*</span>
                </InputsNames>
                <input
                  type="number"
                  name="price"
                  placeholder="123.99"
                  {...register("price", {
                    required: "Price is required.",

                    pattern: {
                      value: /^[1-9]/,
                      message: "Price should  contain only numbers,not begin on 0.",
                    },
                  })}
                />
                {errors.price && <ErrorText role="alert">{errors.price?.message}</ErrorText>}
              </>
            )}

            <ImageContainer>
              <input {...register("avatar", {})} type="file" name="image" id="image" accept=".jpg,.jpeg,.png" onChange={handleImage} />
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
                {...register("comments", {
                  required: "Comments is required.",
                  maxLength: {
                    value: 120,
                    message: "The length of this field cannot exceed 120 characters",
                  },
                  minLength: {
                    value: 8,
                    message: "This input must exceed 8 characters",
                  },
                  pattern: {
                    value: /[a-zA-Z]+/,
                    message: "Comments should  contain only letters.",
                  },
                })}
              />
              {errors.comments && <ErrorText role="alert">{errors.comments?.message}</ErrorText>}
            </label>
          </>
        )}

        <BtnContainer>
          {!nextPage && (
            <>
              <MoveBtn type="button" active={true} name="move-btn" color="accent" onClick={handleNextClick} disabled={!isValid}>
                Next
              </MoveBtn>
              <MoveBtn onClick={onClose} type="button" name="move-btn">
                Cancel
              </MoveBtn>
            </>
          )}

          {nextPage && (
            <>
              <MoveBtn type="submit" active>
                Done
              </MoveBtn>
              <MoveBtn type="button" name="move-btn" onClick={handleBackClick}>
                Back
              </MoveBtn>
            </>
          )}
        </BtnContainer>
      </MyForm>
    </Container>
  );
}

export default ModalAddNotice;
