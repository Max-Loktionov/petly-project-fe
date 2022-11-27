import { useEffect, useState } from "react";
import { useGetNoticesQuery } from "redux/noticesApi";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.styled";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import { NotFoundBox, NotFound } from "pages/NewsPage/NewsPage.styled";
const NoticeAllList = ({ filter, category, perPage, page, favoriteNoticeId, notieceId }) => {
  const [noti, setNoti] = useState([]);
  const { data = [], isLoading, isError } = useGetNoticesQuery({ filter, category, perPage, page });

  useEffect(() => {
    if (!data) {
      return;
    }
    setNoti(data.notices);
  }, [data]);

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

  return (
    <List>
      {/* {(!isLoading || noti.length === 0) && (
        <NotFoundBox>
          <NotFound>Nothing found. Please, try again.</NotFound>
        </NotFoundBox>
      )} */}

      {!isLoading &&
        noti?.map(({ _id, avatar, title, breed, location, birthday, price, name, category }) => (
          <NoticeCategoryItem
            key={_id}
            id={_id}
            image={avatar}
            title={title}
            name={name}
            breed={breed}
            category={setCategory(category)}
            location={location}
            birthday={birthday}
            price={price}
            favoriteNoticeId={favoriteNoticeId}
            notieceId={notieceId}
          />
        ))}
    </List>
  );
};

export default NoticeAllList;
