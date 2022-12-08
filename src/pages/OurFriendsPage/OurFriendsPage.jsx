import { useEffect, useState } from "react";
import { Container, Box, Card, Title } from "./ourFriendsPage.styled";
import FriendCard from "../../components/OurFriendsCard/FriendCard";
import getFriends from "./getFriends";

function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const ourFriendsPage = async () => {
      try {
        const friends = await getFriends();
        setFriends(friends.data.result);
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
