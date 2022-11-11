import { Box, List, Img, Elem, Picture, Title } from "./FriendCard.styled";

const FriendCard = friend => {
  console.log(friend);
  const { title, address, email, phone, workDays, imageUrl } = friend.friend;

  return (
    <>
      <Title>{title}</Title>
      <Box>
        <Picture>
          <Img src={imageUrl} alt={title} />
        </Picture>
        <List>
          <Elem>
            <span>Time:</span>
            {workDays !== null && <span>hello</span>}
            <span>_______ </span>
          </Elem>
          <Elem>
            <span>Address:</span>
            <span>{address}</span>
          </Elem>
          <Elem>
            <span>Email:</span>
            {email && <span>{email}</span>}
            <span>_______ </span>
          </Elem>
          <Elem>
            <span>Phone:</span>
            <span>{phone}</span>
          </Elem>
        </List>
      </Box>
    </>
  );
};

export default FriendCard;
