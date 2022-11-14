import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Box, Card, Title, SearchBox, Input } from "./NewsPage.styled";
import NewsCard from "../../components/NewsCars/NewsCard";
import axios from "axios";

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
        const newsArray = await axios.get("https://petly-be.herokuapp.com/news");
        const newsResult = newsArray.data.data.result;
        const normalisedQuery = query.toLocaleLowerCase();
        const news = newsResult.filter(newsItem => newsItem.title.toLowerCase().includes(normalisedQuery));
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
        <Input type="text" name="query" placeholder="Search"></Input>
        <button type="submit"></button>
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
