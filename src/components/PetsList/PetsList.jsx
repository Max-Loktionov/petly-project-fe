import { TitlePet, BoxBtn, BoxTitlePet, BoxPet, TitleBtn, BtnAddPet } from "./PetsList.styled";
import { useGetUserQuery } from "redux/userApi";

import PetsData from "components/PetsData";

const PetsList = () => {
  const pets = [
    {
      id: 1,
      name: "Jack",
      data: "22.04.2018",
      breed: "JKKKKKK",
      comment:
        "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturamet consectetur",
    },
    {
      id: 2,
      name: "Jack",
      data: "22.04.2018",
      breed: "JKKKKKK",
      comment:
        "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturamet consectetur",
    },
  ];

  const { date, error, isLoading } = useGetUserQuery();
  console.log(date);

  return (
    <BoxPet>
      <BoxTitlePet>
        <TitlePet>My pets:</TitlePet>
        <BoxBtn>
          <TitleBtn>Add pet</TitleBtn>
          <BtnAddPet accent>+</BtnAddPet>
        </BoxBtn>
      </BoxTitlePet>
      {pets.map(({ id, name, data, breed, comment }) => (
        <PetsData key={id} name={name} data={data} breed={breed} comment={comment} id={id} />
      ))}
    </BoxPet>
  );
};

export default PetsList;
