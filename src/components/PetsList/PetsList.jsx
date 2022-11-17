import { useGetUserQuery } from "redux/userApi";

import PetsListItem from "components/PetsListItem";

const PetsList = () => {
  const { data = [], isLoading, isError } = useGetUserQuery();
  return (
    <>
      {isLoading && <div>...Loading</div>}
      {isError ? (
        <div>error</div>
      ) : data.length === 0 ? (
        <div>Pet not found</div>
      ) : (
        data.data.result.pets.map(
          ({ _id, name, birthday, breed, comments, avatar = "" }) => (
            <PetsListItem
              key={_id}
              avatar={avatar}
              name={name}
              birthday={birthday}
              breed={breed}
              comments={comments}
              id={_id}
            />
          )
        )
      )}
    </>
  );
};

export default PetsList;
