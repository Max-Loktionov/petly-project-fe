import React from "react";
import PropTypes from "prop-types";
import { Cathegory, Header, PictureData, MyLi, Comments, MyBtn, ImageContainer, BtnContainer } from "./ModalNotice.styled";
import { useSelector } from "react-redux";
import { useGetNoticesByIdQuery } from "redux/noticesApi";

function ModalNotice({ onClose }) {
  const id = useSelector(({ notice }) => notice.modalViewNotice.id);

  const { data, isLoading } = useGetNoticesByIdQuery(id);

  const avatarUrl = end => `https://petly-be.herokuapp.com/${end}`;
  return (
    <div>
      {!isLoading && (
        <>
          <ImageContainer>
            <PictureData imageUrl={avatarUrl(data?.notice?.avatar)}>
              <Cathegory>{data.notice.category}</Cathegory>
            </PictureData>
            <div>
              <Header>Cute dog looking for a home</Header>
              <ul>
                <MyLi>
                  <p>Name:</p>
                  <span>{data.notice.name}</span>
                </MyLi>
                <MyLi>
                  <p>Birthday:</p>
                  <span>{data.notice.birthday}</span>
                </MyLi>
                <MyLi>
                  <p>Breed:</p>
                  <span>{data.notice.breed}</span>
                </MyLi>
                <MyLi>
                  <p>Location:</p>
                  <span>{data.notice.location}</span>
                </MyLi>
                <MyLi>
                  <p>The sex:</p>
                  <span>{data.notice.theSex}</span>
                </MyLi>
                <MyLi>
                  <p>Email:</p>
                  <span>{data.notice.email}</span>
                </MyLi>
                <MyLi>
                  <p>Phone:</p>
                  <span>{data.notice.phone}</span>
                </MyLi>

                {data.notice.cathegory === "sell" && (
                  <MyLi>
                    <p>Sell:</p>
                    <span>{data.notice.price}</span>
                  </MyLi>
                )}
              </ul>
            </div>
          </ImageContainer>

          <Comments>
            Comments: <span>{data.notice.comments}</span>
          </Comments>

          <BtnContainer>
            <MyBtn active={"active"}>Contact</MyBtn>
            <MyBtn onClose={() => onClose()}>
              Add to <span>&#10084;</span>
            </MyBtn>
          </BtnContainer>
        </>
      )}
    </div>
  );
}

ModalNotice.propTypes = { id: PropTypes.string };

export default ModalNotice;
