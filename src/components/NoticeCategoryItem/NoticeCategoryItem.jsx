import { } from "./NoticeCategoryItem.styled";

const NoticesCategoryItem = ({ title, breed, location, birthday }) => { 
    return (
        <li>
            <img src="" alt={title}></img>
            <button type="button">Favorite</button>
            <h2>{title}</h2>
            <p>Breed: {breed}</p>
            <p>Place: {location}</p>
            <p>Age: {birthday}r</p>
            <p>Price: 50$</p>
            <button type="button">Lern more</button>
        </li>
    )
}

export default NoticesCategoryItem;
