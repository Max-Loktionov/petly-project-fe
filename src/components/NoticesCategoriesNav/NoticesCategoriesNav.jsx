import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategories } from 'redux/filterCategoriesSlice';
import { Button } from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.categories.category);
    console.log(category);

    const handleClick = (filteredCategory) => { 
        dispatch(setFilterCategories(filteredCategory))
    }
    return (
        <>
            <Button onClick={() => handleClick('lost')}>lost/found</Button>
            <Button onClick={() => handleClick('good')}>In good hands</Button>
            <Button onClick={() => handleClick('sell')}>sell</Button>
        </>
    )
}