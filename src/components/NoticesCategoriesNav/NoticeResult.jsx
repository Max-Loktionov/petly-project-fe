import { useSelector } from "react-redux";

export const NoticeResult = () => {
    const category = useSelector(state => state.categories.category);
    return (
        <p>{category}</p>
    )
}