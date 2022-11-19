import { useSelector } from "react-redux";
import { useGetNoticesAllQuery } from "redux/noticesApi";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import {List} from "./NoticesCategoriesList.styled"

//         "_id": "6370ebf01955051d1ee1e20a",
//             "name": "Whiskey",
//             "title": "good",
//             "birthday": "2020-12-12",
//             "breed": "husky",
//             "male": "female",
//             "location": "Kyiv",
//             "price": 123,
//             "comments": "fsdfsdfsdf",
//             "category": "in_good_hands"
//         },
//         {
//             "_id": "6370eded826f12d0da841fc7",
//             "name": "Whiskey",
//             "title": "good",
//             "birthday": "2020-12-12",
//             "breed": "husky",
//             "male": "female",
//             "location": "Kyiv",
//             "price": 123,
//             "comments": "fsdfsdfsdf",
//             "category": "in_good_hands"
//         },
//         {
//             "_id": "6370edfc826f12d0da841fc9",
//             "name": "Whiskey",
//             "title": "good",
//             "birthday": "2020-12-12",
//             "breed": "husky",
//             "male": "female",
//             "location": "Kyiv",
//             "price": 123,
//             "comments": "fsdfsdfsdf",
//             "category": "in_good_hands"
//         },
//         {
//             "_id": "6370ee0663182e2f045c2d55",
//             "name": "Whiskey",
//             "title": "good",
//             "birthday": "2020-12-12",
//             "breed": "husky",
//             "male": "female",
//             "location": "Kyiv",
//             "price": 123,
//             "comments": "fsdfsdfsdf",
//             "category": "in_good_hands"
//         },
//         {
//             "_id": "63711dd8706ebef29081eb33",
//             "name": "111111",
//             "title": "good dog",
//             "birthday": "2020-12-12",
//             "breed": "husky",
//             "male": "female",
//             "location": "Kyiv",
//             "price": 123,
//             "comments": "11111",
//             "category": "sell",
//             "owner": "636c33178204d6668bd174c5"
//         },
//         {
//             "_id": "637120791bd10e6ef6e0c05c",
//             "name": "33333",
//             "title": "good dog",
//             "birthday": "2020-12-12",
//             "breed": "husky",
//             "male": "female",
//             "location": "Kharkiv",
//             "price": 123,
//             "comments": "33333",
//             "category": "lost_found",
//             "owner": "63711d79706ebef29081eb2d"
//         },
//         {
//             "_id": "637120801bd10e6ef6e0c05f",
//             "name": "444444",
//             "title": "good dog",
//             "birthday": "2020-12-12",
//             "breed": "husky",
//             "male": "female",
//             "location": "Kharkiv",
//             "price": 123,
//             "comments": "4444444",
//             "category": "lost_found",
//             "owner": "63711d79706ebef29081eb2d"
//         },
//         {
//             "_id": "6372289a6619ddff6d29dd34",
//             "name": "yyyyy",
//             "title": "good dog",
//             "birthday": "2020-12-12",
//             "breed": "husky",
//             "male": "female",
//             "location": "If",
//             "price": 123,
//             "comments": "dddddd",
//             "category": "lost_found",
//             "owner": "6371859563859519215b6614"
//         },
//         {
//             "_id": "63722cab1a32f804ef613844",
//             "name": "yyyyy",
//             "title": "good dog",
//             "birthday": "2020-12-12",
//             "breed": "husky",
//             "male": "female",
//             "location": "If",
//             "price": 123,
//             "comments": "dddddd",
//             "category": "lost_found",
//             "owner": "6371859563859519215b6614"
//         },
//         {
//             "_id": "63722d496fbf444da6272b08",
//             "name": "yyyyy",
//             "title": "good dog",
//             "birthday": "2020-12-12",
//             "breed": "husky",
//             "male": "female",
//             "location": "If",
//             "price": 123,
//             "comments": "dddddd",
//             "category": "lost_found",
//             "owner": "6371859563859519215b6614"
//         },
//         {
//             "_id": "63728cf1d6c02a9bfd8e2234",
//             "name": "newName",
//             "title": "sea side",
//             "birthday": "2020-12-12",
//             "breed": "french",
//             "male": "female",
//             "location": "Warsaw",
//             "price": 200,
//             "comments": "Doker tool",
//             "category": "sell"
//         },
//         {
//             "_id": "63728d88d6c02a9bfd8e2236",
//             "name": "newName",
//             "title": "sea side",
//             "birthday": "2020-12-12",
//             "breed": "french",
//             "male": "female",
//             "location": "Warsaw",
//             "price": 200,
//             "comments": "Doker tool",
//             "category": "sell"
//         },
//         {
//             "_id": "63728ed7d6c02a9bfd8e2238",
//             "name": "newName",
//             "title": "sea side",
//             "birthday": "2020-12-12",
//             "breed": "french",
//             "male": "female",
//             "location": "Warsaw",
//             "price": 200,
//             "comments": "Doker tool",
//             "category": "sell"
//         },
//         {
//             "_id": "63728f06d6c02a9bfd8e223a",
//             "name": "newName",
//             "title": "sea side",
//             "birthday": "2020-12-12",
//             "breed": "french",
//             "male": "female",
//             "location": "Warsaw",
//             "price": 200,
//             "comments": "Doker tool",
//             "category": "sell"
//         },
//         {
//             "_id": "6372bb9b6b1a551c201218ef",
//             "name": "jjjj",
//             "title": "good dog",
//             "birthday": "2020-12-12",
//             "breed": "husky",
//             "male": "female",
//             "location": "If",
//             "price": 123,
//             "comments": "dddddd",
//             "category": "lost_found",
//             "owner": "6371859563859519215b6614"
//         }
// ];

const NoticesCategoriesList = ({ onModalOpen }) => {
const { data = [], isLoading, isError } = useGetNoticesAllQuery();
  const token = useSelector(state => state.auth.token);

    const { notices } = data;
    
      return (
        <List>
              {notices?.map(({_id, image, title, breed, location, birthday, price, name}) =>
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

                  />)}             
        </List>
    )
}

export default NoticesCategoriesList;