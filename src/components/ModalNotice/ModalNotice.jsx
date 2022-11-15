import React from "react";
import { Cathegory, Header, PictureData, MyLi, Comments, MyBtn, ImageContainer, BtnContainer, DataContainer } from "./ModalNotice.styled";

function ModalNotice({ id }) {
  // id to use getMutationByid and delete pet Object

  const pet = {
    id: "dasdqw21323reased1243434567",
    name: "Rich",
    birthday: "21.09.2020",
    breed: "Pomeranian",
    location: "Lviv",
    theSex: "male",
    email: "user@mail.com",
    phone: "+380971234567",
    comments: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem",
    cathegory: "sell",
    price: 123,
    avatar: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLX9f3BTRl8zwQuDCnJqd4DZEAo7KKFf07WPI7Y-Ih&s`,
  };

  return (
    <div>
      <ImageContainer>
        <PictureData imageUrl={pet.avatar}>
          <Cathegory>{pet.cathegory}</Cathegory>
        </PictureData>
        <DataContainer>
          <Header>Сute dog looking for a home</Header>
          <ul>
            <MyLi>
              <p>Name:</p>
              <span>{pet.name}</span>
            </MyLi>
            <MyLi>
              <p>Birthday:</p>
              <span>{pet.birthday}</span>
            </MyLi>
            <MyLi>
              <p>Breed:</p>
              <span>{pet.breed}</span>
            </MyLi>
            <MyLi>
              <p>Location:</p>
              <span>{pet.location}</span>
            </MyLi>
            <MyLi>
              <p>The sex:</p>
              <span>{pet.theSex}</span>
            </MyLi>
            <MyLi>
              <p>Email:</p>
              <span>{pet.email}</span>
            </MyLi>
            <MyLi>
              <p>Phone:</p>
              <span>{pet.phone}</span>
            </MyLi>

            {pet.cathegory === "sell" && (
              <MyLi>
                <p>Sell:</p>
                <span>{pet.price}</span>
              </MyLi>
            )}
          </ul>
        </DataContainer>
      </ImageContainer>

      <Comments>
        Comments: <span>{pet.comments}</span>
      </Comments>

      <BtnContainer>
        <MyBtn active={"active"}>Contact</MyBtn>
        <MyBtn>
          Add to <span>&#10084;</span>
        </MyBtn>
      </BtnContainer>
    </div>
  );
}

export default ModalNotice;
