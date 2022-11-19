import { useSelector } from "react-redux";
import { useNoticesQuery } from '../../redux/noticesApi';


export const NoticeResult = () => {
    const category = useSelector(state => state.categories.category);
    const { data, isLoading } = useNoticesQuery(category);
    
    
    console.log(data)   
    
    
    return (
    <ul>
            {!isLoading && data.notices.map(({ breed, location, birthday }) => { return <li>{breed} {location} {birthday}</li> })}
    </ul>
        
        // < p > { category }</p >
    )
}