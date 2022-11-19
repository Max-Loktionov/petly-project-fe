import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategories } from 'redux/filterCategoriesSlice';
import { Button } from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.categories.category);
    console.log(category);
    const token = useSelector(state => state.auth.token);

    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        if (token) {
            setIsAuthorized(true);
        }
    }, [setIsAuthorized, token]);

    const handleClick = (filteredCategory) => { 
        dispatch(setFilterCategories(filteredCategory))
    }
    return (
        <>
            <Button onClick={() => handleClick('lost_found')}>lost/found</Button>
            <Button onClick={() => handleClick('in_good_hands')}>In good hands</Button>
            <Button active onClick={() => handleClick('sell')}>sell</Button>
            {isAuthorized && (<div>
                <Button onClick={() => handleClick('favorite')}>Favorite ads</Button>
                <Button onClick={() => handleClick('own')}>My ads</Button>
            </div>)}
        </>
    )
}