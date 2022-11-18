import NoticesSearch from "components/NoticesSearch";
import { Title } from "./NoticesPage.styled";
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav';
import { NoticeResult } from "components/NoticesCategoriesNav/NoticeResult";

const NoticesPage = () => {
    return (
        <>
            <Title>Find your favorite pet</Title>
            <NoticesSearch />
            <NoticesCategoriesNav />
            <NoticeResult/>
        </>
    );
};

export default NoticesPage;