import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Container, Box, Card, Title, SearchBox, Input, Button } from "./NewsPage.styled";
import NewsCard from "../../components/NewsCards/NewsCard";
import searchIcon from "../../img/VectorG.svg";
import getNews from "./getNews";

function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParams, setSeachParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query) {
      setSearch(query);
    }
    const newsPage = async () => {
      try {
        const newsArray = await getNews();
        const news = newsArray.data.result;
        setNews(news);
      } catch (error) {
        console.log(error.message);
      }
    };
    newsPage();
  }, [query]);

  const handleChange = e => {
    setSearch(e.currentTarget.value.toLocaleLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSeachParams({ query: search });
  };

  const filteredNews = () => {
    const searchNews = news.filter(newsItem => newsItem.title.toLowerCase().includes(query));
    // console.log(searchNews.length);
    // if (searchNews.length === 0) {
    //   toast.error("Nothing found. Please, try again.");
    //   return searchNews;
    // } else {
    return searchNews;
  };
  // };

  return (
    <Container>
      <Title>News</Title>
      <ToastContainer />
      <SearchBox onSubmit={handleSubmit}>
        <Input type="text" name="query" value={search} placeholder="Search" autoFocus onChange={handleChange} />
        <Button type="submit">
          <img src={searchIcon} alt="searchIcon" />
        </Button>
      </SearchBox>
      <Box>
        {filteredNews().map(newItem => (
          <Card key={newItem._id}>
            <NewsCard newItem={newItem} />
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default News;
