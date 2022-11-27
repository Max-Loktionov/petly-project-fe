import { useEffect, useState } from "react";
import { useGetUserFavoriteQuery } from "redux/userApi";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.styled";
import NoticeCategoryItem from "components/NoticeCategoryItem";
// import { NotFoundBox, NotFound } from "pages/NewsPage/NewsPage.styled";

const NoticeFavList = ({ filter, category, perPage, page, favoriteNoticeId, notieceId }) => {
  const [noti, setNoti] = useState([]);
  const { data = [], isLoading } = useGetUserFavoriteQuery({ filter, category, perPage, page });

  useEffect(() => {
    if (!data.data) {
      return;
    }
    setNoti(data.data.result);
  }, [data]);

  return (
    <List>
      {/* {noti.length === 0 && (
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
            category={category}
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

export default NoticeFavList;
