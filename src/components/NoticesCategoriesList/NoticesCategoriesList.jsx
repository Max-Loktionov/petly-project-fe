import { useSelector } from "react-redux";
import { useGetNoticesAllQuery } from "redux/noticesApi";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import { List } from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = ({ onModalOpen }) => {
  const { data = [], isLoading, isError } = useGetNoticesAllQuery();
  const token = useSelector(state => state.auth.token);

  const { notices } = data;

  return (
    <List>
      {notices?.map(({ _id, image, title, breed, location, birthday, price, name }) => (
        <NoticeCategoryItem
          key={_id}
          id={_id}
          image={image}
          title={title}
          name={name}
          breed={breed}
          location={location}
          birthday={birthday}
          price={price}
          onModalOpen={onModalOpen}
        />
      ))}
    </List>
  );
};

export default NoticesCategoriesList;
