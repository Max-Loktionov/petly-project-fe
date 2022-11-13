import PropTypes from "prop-types";
import EllipsisText from "react-ellipsis-text";
import { Card, Elem, Title, Box, Link, Data } from "./NewsCard.styled";

const NewsCard = newItem => {
  const { date, description, title, url } = newItem.newItem;

  return (
    <>
      <Card>
        <Title>
          <EllipsisText text={title} length={50} />
        </Title>
        <Elem>
          <EllipsisText text={description} length={300} />
        </Elem>
        <Box>
          <Data>{date}</Data>
          <Link href={url}>Read more</Link>
        </Box>
      </Card>
    </>
  );
};

export default NewsCard;

EllipsisText.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  tail: PropTypes.string,
  tailClassName: PropTypes.string,
  tooltip: PropTypes.shape({
    copyOnClick: PropTypes.bool,
    onAppear: PropTypes.func,
    onDisapepear: PropTypes.func,
  }),
};
