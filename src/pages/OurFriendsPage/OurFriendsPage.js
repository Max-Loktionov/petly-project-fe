import { useEffect, useState } from "react";
import { Container, Box, Card, Title } from "./OurFriendsPage.styled";
import FriendCard from "./FriendCard";
import axios from "axios";

function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const ourFriendsPage = async () => {
      try {
        const friends = await axios.get("https://petly-be.herokuapp.com/friends");
        setFriends(friends.data.data.result);
      } catch (error) {
        console.log(error.message);
      }
    };
    ourFriendsPage();
  }, []);

  return (
    <Container>
      <Title>Our friend</Title>
      <Box>
        {friends.map(friend => (
          <Card key={friend._id}>
            <FriendCard friend={friend} />
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Friends;
