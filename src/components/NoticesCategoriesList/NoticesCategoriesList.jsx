import { useSelector } from "react-redux";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import { List } from "./NoticesCategoriesList.styled";
import { useNoticesByCategoryQuery } from "redux/noticesApi";
import { useGetUserFavoriteQuery, useGetUserNoticesQuery } from "redux/userApi";

const NoticesCategoriesList = ({ onModalOpen }) => {
  const category = useSelector(state => state.categories.category);
  const { data, isLoading } = useNoticesByCategoryQuery(category, { skip: false });
  const { data: own } = useGetUserNoticesQuery("notice", { skip: true });
  const { data: favorite } = useGetUserFavoriteQuery("favorite", { skip: true });

  const renderByCategory = data?.notices;
  const renderByOwn = own?.data.result.userNotice;
  const renderByFavorite = favorite?.data.result;

  // console.log(renderByCategory);
  // console.log(renderByOwn);
  // console.log(renderByFavorite);

  const setCategory = category => {
    switch (category) {
      case "sell":
        return "Sell";
      case "in_good_hands":
        return "In good hands";
      case "lost_found":
        return "Lost/found";
      default:
        return "No category";
    }
  };

  let render = renderByCategory;

  if (category === "own") {
    render = renderByOwn;
  }

  if (category === "favorite") {
    render = renderByFavorite;
  }

  return (
    <List>
      {!isLoading &&
        render.map(({ _id, category, image, title, breed, location, birthday, price, name }) => (
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
