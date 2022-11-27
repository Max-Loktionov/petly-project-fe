import { useEffect, useState } from "react";
import { useGetUserNoticesQuery } from "redux/userApi";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.styled";
import NoticeCategoryItem from "components/NoticeCategoryItem";

const NoticeMyList = ({ filter, category, perPage, page, favoriteNoticeId, notieceId }) => {
  const [noti, setNoti] = useState([]);
  const { data = [], isLoading, isError } = useGetUserNoticesQuery({ filter, category, perPage, page });

  useEffect(() => {
    if (!data.data) {
      return;
    }
    setNoti(data.data.result.userNotice);
  }, [data]);

  return (
    <List>
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

export default NoticeMyList;
