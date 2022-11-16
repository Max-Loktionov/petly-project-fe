// import { useParams } from "react-router-dom";
import NoticeCategoryItem from "components/NoticeCategoryItem";
// import { } from "./NoticeCategoryItem.styled";

const NoticesCategoriesList = ({notices}) => {
    // const { categoryName } = useParams();
  
    return (
        <>
            <ul>
                {notices.map(({ _id, title, breed, location, birthday }) => (
                    <NoticeCategoryItem
                        key={_id}
                        _id={_id}
                        title={title}
                        breed={breed}
                        location={location}
                        birthday={birthday}
                />
                ))}
            </ul>
        </>
    )
 }

export default NoticesCategoriesList;
