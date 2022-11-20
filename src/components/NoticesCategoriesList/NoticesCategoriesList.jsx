import { useSelector } from "react-redux";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import { List } from "./NoticesCategoriesList.styled";
import { useNoticesByCategoryQuery } from "redux/noticesApi";

const NoticesCategoriesList = ({ onModalOpen }) => {
  const token = useSelector(state => state.auth.token);
  const category = useSelector(state => state.categories.category);
  const { data, isLoading } = useNoticesByCategoryQuery(category);

  const setCategory = category => {
    switch (category) {
      case 'sell':
        return 'Sell';
      case 'in_good_hands':
        return "In good hands";
      case 'lost_found':
        return "Lost/found";
      default:
        return "No category";
    }
  }

  return (
    <List>
      {!isLoading && data.notices.map(({ _id, category, image, title, breed, location, birthday, price, name }) => (
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
          category={setCategory(category)}
        />
      ))}
    </List>
  );
};

export default NoticesCategoriesList;
