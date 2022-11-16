import NoticesSearch from "components/NoticesSearch";
import { Title } from "./NoticesPage.styled";

const NoticesPage = () => {
    return (
        <>
            <Title>Find your favorite pet</Title>
            <NoticesSearch />
        </>
    );
};

export default NoticesPage;