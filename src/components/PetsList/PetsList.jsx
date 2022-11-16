import { useState } from "react";
import { useGetUserQuery } from "redux/userApi";

import PetsListItem from "components/PetsListItem";

const PetsList = () => {
  // const pets = [
  //   {
  //     id: "_1",
  //     name: "Jack",
  //     data: "22.04.2018",
  //     breed: "JKKKKKK",
  //     comment:
  //       "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturamet consectetur",
  //   },
  //   {
  //     id: "_2",
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
    <>
      {isLoading && <div>...Loading</div>}
      {isError ? (
        <div>error</div>
      ) : pets.length === 0 ? (
        <div>Pet not found</div>
      ) : (
        pets.map(({ _id, name, data, breed, comment }) => <PetsListItem key={_id} name={name} data={data} breed={breed} comment={comment} id={_id} />)
      )}
    </>
  );
};

export default PetsList;
