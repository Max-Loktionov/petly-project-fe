import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddPetMutation } from "../../redux/userApi";
// import { ErrorMessage } from "@hookform/error-message";
import {
  Label,
  Form,
  Container,
  Input,
  BtnBox,
  ErrorText,
  BtnCancel,
  BtnBack,
  BtnNext,
  BtnDone,
  Textarea,
  Title,
  SubTitle,
} from "./ModalAddsPet.styled";

const ModalAddsPet = ({ onClose }) => {
  const [nextPage, setNextPage] = useState(false);
  const [addPet] = useAddPetMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const handleSubmitClick = (formData, evt) => {
    onClose(evt);
    addPet(formData);
  };

  const handleNextClick = () => {
    setNextPage(true);
  };

  const handleBackClick = () => {
    setNextPage(false);
  };

  const textRegexp = /[a-zA-Z]+/;
  const dateRegexp = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;

  return (
    <>
      <Title>Add pet</Title>
      <Form onSubmit={handleSubmit(handleSubmitClick)}>
        {!nextPage && (
          <>
            <Label htmlFor="petName">Name pet</Label>
            <Input
              id="petName"
              type="text"
              placeholder="Type name pet"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "This input must exceed 2 characters",
                },
                maxLength: {
                  value: 16,
                  message:
                    "The length of this field cannot exceed 16 characters",
                },
                pattern: {
                  value: textRegexp,
                  message: "Name should  contain only letters.",
                },
              })}
              aria-invalid={errors.petName ? "true" : "false"}
            />
            {errors.name && <ErrorText>{errors.name?.message}</ErrorText>}
            <Label htmlFor="dateOfBirth">Date of birth</Label>
            <Input
              id="dateOfBirth"
              placeholder="Type date of birth"
              {...register("birthday", {
                required: "Date of birth is required.",
                pattern: {
                  value: dateRegexp,
                  message: "This input is number only. Example: 01.01.2022",
                },
              })}
            />
            {errors.birthday && (
              <ErrorText role="alert">{errors.birthday?.message}</ErrorText>
            )}
            <Label htmlFor="breed">Breed</Label>
            <Input
              id="breed"
              type="text"
              placeholder="Type breed"
              {...register("breed", {
                required: "Breed is required",
                maxLength: {
                  value: 16,
                  message:
                    "The length of this field cannot exceed 16 characters",
                },
                minLength: {
                  value: 2,
                  message: "This input must exceed 2 characters",
                },
                pattern: {
                  value: textRegexp,
                  message: "Breed should  contain only letters.",
                },
              })}
              aria-invalid={errors.breed ? "true" : "false"}
            />
            {errors.breed && (
              <ErrorText role="alert">{errors.breed?.message}</ErrorText>
            )}
          </>
        )}

        {nextPage && (
          <>
            <SubTitle htmlFor="addPhoto">Add photo and some comments</SubTitle>
            <Container>
              {/* <Input
                type="file"
                id="addPhoto"
                {...register("addPhoto", {
                  required: "Photo is required.",
                })}
              />
              {errors.addPhoto && (
                <ErrorText role="alert">{errors.addPhoto?.message}</ErrorText>
              )} */}
              <Label textarea htmlFor="addPhoto">
                Comments
              </Label>
              <Textarea
                id="Comments"
                {...register("comments", {
                  required: "Comments is required.",
                  maxLength: {
                    value: 120,
                    message:
                      "The length of this field cannot exceed 120 characters",
                  },
                  minLength: {
                    value: 8,
                    message: "This input must exceed 8 characters",
                  },
                })}
              />
              {errors.comments && (
                <ErrorText role="alert">{errors.comments?.message}</ErrorText>
              )}
            </Container>
          </>
        )}

        <BtnBox>
          {!nextPage && (
            <>
              <BtnNext
                onClick={handleNextClick}
                active
                disabled={!isValid}
                type="button"
              >
                Next
              </BtnNext>
              <BtnCancel type="button">Cancel</BtnCancel>
            </>
          )}

          {nextPage && (
            <>
              <BtnDone active type="submit">
                Done
              </BtnDone>
              <BtnBack onClick={handleBackClick} type="button">
                Back
              </BtnBack>
            </>
          )}
        </BtnBox>
      </Form>
    </>
  );
};

export default ModalAddsPet;

//  <input
//         {...register("multipleErrorInput", {
//           required: "This input is required.",
//           pattern: {
//             value: /\d+/,
//             message: "This input is number only.",
//           },
//           minLength: {
//             value: 11,
//             message: "This input must exceed 10 characters",
//           },
//         })}
//       />
//       <ErrorMessage
//         errors={errors}
//         name="multipleErrorInput"
//         render={({ messages }) => {
//           console.log("messages", messages);
//           return messages
//             ? Object.entries(messages).map(([type, message]) => (
//                 <p key={type}>{message}</p>
//               ))
//             : null;
//         }}
//       />
