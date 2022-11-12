import { useEffect, useState } from "react";
import { Container, Box, Card, Title, Search } from "./NewsPage.styled";
import NewsCard from "./NewsCard";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const newsPage = async () => {
      try {
        const news = await axios.get("https://petly-be.herokuapp.com/news");
        setNews(news.data.data.result);
      } catch (error) {
        console.log(error.message);
      }
    };
    newsPage();
  }, []);

  return (
    <Container>
      <Title>News</Title>
      <Search>search</Search>
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
