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
        data.data.result.pets.map(({ _id, name, data, breed, comments, birthday, avatar }) => (
          <PetsListItem key={_id} name={name} data={data} breed={breed} comment={comments} id={_id} birthday={birthday} avatar={avatar} />
        ))
      )}
    </>
  );
};

export default PetsList;
