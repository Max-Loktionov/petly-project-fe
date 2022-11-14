import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const ModalAddsPet = () => {
  const [nextPage, setNextPage] = useState(false);
  const [btnTextLeft, setBtnTextLeft] = useState("Cancel");

  const [btnText, setBtnText] = useState("Next");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log("errors", errors);
  const onSubmit = formData => {
    console.log("formData", formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        label="Name pet"
        placeholder="Type name pet"
        {...register("petName", {
          required: "Name is required",
          maxLength: {
            value: 20,
            message: "The length of this field cannot exceed 20 characters",
          },
        })}
        aria-invalid={errors.petName ? "true" : "false"}
      />
      {errors.petName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
      <input
        type="number"
        label="Date of birth"
        placeholder="Type date of birth"
        {...register("dateOfBirth", {
          required: "Date of birth is required.",
          pattern: {
            value: /\d+/,
            message: "This input is number only.",
          },
          maxLength: {
            value: 20,
            message: "The length of this field cannot exceed 20 characters",
          },
          minLength: {
            value: 4,
            message: "This input must exceed 4 characters",
          },
        })}
      />

      {errors.dateOfBirth && <p role="alert">{errors.dateOfBirth?.message}</p>}

      <input
        type="text"
        label="Breed"
        placeholder="Type breed"
        {...register("breed", {
          required: "Breed is required",
          maxLength: {
            value: 20,
            message: "The length of this field cannot exceed 20 characters",
          },
          minLength: {
            value: 4,
            message: "This input must exceed 4 characters",
          },
        })}
        aria-invalid={errors.breed ? "true" : "false"}
      />
      {errors.breed && <p role="alert">{errors.breed?.message}</p>}

      <button type="button">{btnTextLeft}</button>
      <button type="submit">{btnText}</button>
    </form>
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
