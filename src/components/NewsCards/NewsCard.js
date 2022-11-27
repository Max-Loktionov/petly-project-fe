import { Card, Elem, Title, Box, Link, Data } from "./NewsCard.styled";

const NewsCard = newItem => {
  const { date, description, title, url } = newItem.newItem;

  const text = description?.slice(0, 350) + "...";
  const name = title?.length < 50 ? title : title?.slice(0, 50) + "...";
  const newDate = date?.split("-").reverse().join("-");

  return (
    <>
      <Card>
        <Title>
          <span>{title}</span>
          {name}
        </Title>
        <Elem>{text}</Elem>

        <Box>
          <Data>{newDate}</Data>
          <Link href={url} target="_blank">
            Read more
          </Link>
        </Box>
      </Card>
    </>
  );
};

export default NewsCard;
