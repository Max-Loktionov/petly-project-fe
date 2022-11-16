import { useState } from "react";
import { useGetUserQuery } from "redux/userApi";

import PetsListItem from "components/PetsListItem";

const PetsList = () => {
  const { data: user, isLoading, isError } = useGetUserQuery();
  console.log(useGetUserQuery());
  const [pets, setPets] = useState(user.data.result.pets);

  if (!user) {
    return setPets([]);
  }
  // console.log(pets);

  return (
    <>
      {isLoading && <div>...Loading</div>}
      {isError ? (
        <div>error</div>
      ) : pets.length === 0 ? (
        <div>Pet not found</div>
      ) : (
        pets.map(({ _id, name, data, breed, comment }) => (
          <PetsListItem
            key={_id}
            name={name}
            data={data}
            breed={breed}
            comment={comment}
            id={_id}
          />
        ))
      )}
    </>
  );
};

export default PetsList;
