import { useSelector } from "react-redux";
import { useNoticesQuery } from '../../redux/noticesApi';


export const NoticeResult = () => {
    const { data } = useNoticesQuery();
    
    
    console.log(data)   
    
    const category = useSelector(state => state.categories.category);
    return (
    // <p>{data.map(({ breed, location, birthday }) => { return { breed, location, birthday } })}</p>
        
        
        < p > { category }</p >
    )
}