import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Container, Box, Card, Title, SearchBox, Input, Button, CloseButton } from "./NewsPage.styled";
import NewsCard from "../../components/NewsCards/NewsCard";
import searchIcon from "../../img/VectorG.svg";
import getNews from "./getNews";

function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  // const [searchNews, setSeachNews] = useState(news);
  const [searchParams, setSeachParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [isVisible, setIsVisile] = useState(false);

  useEffect(() => {
    if (query) {
      setSearch(query);
    }
    const newsPage = async search => {
      try {
        const newsArray = await getNews(search);
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
    setIsVisile(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSeachParams({ query: search });
    setIsVisile(false);
  };

  const handleDelete = () => {
    setSearch("");
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
        <Input type="text" name="query" value={search} placeholder="Search" onChange={handleChange} autocomplete="off" />
        <Button type="submit">
          <img src={searchIcon} alt="searchIcon" />
        </Button>
        {isVisible && (
          <CloseButton type="text" onClick={handleDelete}>
            +
          </CloseButton>
        )}
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
