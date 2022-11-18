import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Container,
  Box,
  Card,
  Title,
  SearchBox,
  Input,
  Button,
} from "./NewsPage.styled";
import NewsCard from "../../components/NewsCards/NewsCard";
import searchIcon from "../../img/VectorG.svg";
import getNews from "./getNews";

function News() {
  const [news, setNews] = useState([]);
  const [searchParams, setSeachParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSeachParams({ query: form.elements.query.value });
    form.reset();
  };

  useEffect(() => {
    const newsPage = async () => {
      try {
        const newsArray = await getNews();
        const newsResult = newsArray.data.result;
        const normalisedQuery = query.toLocaleLowerCase();
        const news = newsResult.filter(newsItem =>
          newsItem.title.toLowerCase().includes(normalisedQuery)
        );
        setNews(news);
      } catch (error) {
        console.log(error.message);
      }
    };
    newsPage();
  }, [query]);

  return (
    <Container>
      <Title>News</Title>

      <SearchBox onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Search" autoFocus />
        <Button type="submit">
          <img src={searchIcon} alt="searchIcon" />
        </Button>
      </SearchBox>
      <Box>
        {news.map(newItem => (
          <Card key={newItem._id}>
            <NewsCard newItem={newItem} />
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default News;
