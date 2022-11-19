import NoticesSearch from "components/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import { Title } from "./NoticesPage.styled";

const NoticesPage = () => {
    return (
        <>
            <Title>Find your favorite pet</Title>
            <NoticesSearch />
            <NoticesCategoriesList />
        </>

    );
};

export default NoticesPage;