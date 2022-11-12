import { Card, Elem, Title, Box, Link, Data } from "./NewsCard.styled";

const NewsCard = newItem => {
  const { date, description, title, url } = newItem.newItem;

  return (
    <>
      <Card>
        <Title>{title}</Title>
        <Elem>{description}</Elem>
        <Box>
          <Data>{date}</Data>
          <Link href={url}>Read more</Link>
        </Box>
      </Card>
    </>
  );
};

export default NewsCard;
