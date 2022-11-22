import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Container, Box, Card, Title, SearchBox, Input, Button } from "./NewsPage.styled";
import NewsCard from "../../components/NewsCards/NewsCard";
import searchIcon from "../../img/VectorG.svg";
// import getNews from "./getNews";
import { useGetNewsQuery } from "./getNews";

function News() {
  const { data = [], isLoading, isError } = useGetNewsQuery();
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  // const [searchNews, setSeachNews] = useState(news);
  const [searchParams, setSeachParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query) {
      setSearch(query);
    }
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
        <Input type="text" name="query" value={search} placeholder="Search" onChange={handleChange} autocomplete="off" />
        <Button type="submit">
          <img src={searchIcon} alt="searchIcon" />
        </Button>
        <Button typy="text">+</Button>
      </SearchBox>
      <Box>
        {isLoading && <p>Loading</p>}
        {isError ? (
          <p>error</p>
        ) : data.length === 0 ? (
          <p>news not found</p>
        ) : (
          data.data.result.map(newItem => (
            <Card key={newItem._id}>
              <NewsCard newItem={newItem} />
            </Card>
          ))
        )}
      </Box>
    </Container>
  );
}

export default News;
