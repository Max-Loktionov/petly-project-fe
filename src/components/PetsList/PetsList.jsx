import { TitlePet, BoxBtn, BoxTitlePet, BoxPet, TitleBtn } from "./PetsList.styled";
import { useGetUserQuery } from "redux/userApi";

import PetsData from "components/PetsData";
import AddPetBtn from "components/AddPetBtn";
import { useState } from "react";

const PetsList = () => {
  // const pets = [
  //   {
  //     id: _1,
  //     name: "Jack",
  //     data: "22.04.2018",
  //     breed: "JKKKKKK",
  //     comment:
  //       "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturamet consectetur",
  //   },
  //   {
  //     id: _2,
  //     name: "Jack",
  //     data: "22.04.2018",
  //     breed: "JKKKKKK",
  //     comment:
  //       "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturamet consectetur",
  //   },
  // ];

  const { data: user, isLoading, isError } = useGetUserQuery();
  console.log(useGetUserQuery());
  const [pets, setPets] = useState([]);

  if (user) {
    return setPets(user.data.pets);
  }

  return (
    <BoxPet>
      <BoxTitlePet>
        <TitlePet>My pets:</TitlePet>
        <BoxBtn>
          <TitleBtn>Add pet</TitleBtn>
          <AddPetBtn disabled={true} />
        </BoxBtn>
      </BoxTitlePet>
      {isLoading && <div>...Loading</div>}
      {isError ? (
        <div>error</div>
      ) : pets.length === 0 ? (
        <div>Pet not found</div>
      ) : (
        pets.map(({ _id, name, data, breed, comment }) => <PetsData key={_id} name={name} data={data} breed={breed} comment={comment} id={_id} />)
      )}
    </BoxPet>
  );
};

export default PetsList;
