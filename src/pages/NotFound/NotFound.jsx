import { Container, HomeLink, Error, Text, HomeLinkBox, ErrorBox } from "./NotFound.styled";

const NotFound = () => {
  return (
    <Container>
      <Text>
        <ErrorBox>
          <Error>404</Error>&nbsp;&nbsp;
          <span>Page is not found.</span>
        </ErrorBox>
        &nbsp;
        <ErrorBox>
          <span>Follow this link </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <HomeLinkBox>
            <HomeLink to="/">Home</HomeLink>
          </HomeLinkBox>
        </ErrorBox>
      </Text>
    </Container>
  );
};

export default NotFound;
