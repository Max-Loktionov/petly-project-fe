// import PropTypes from "prop-types";
import { Box, List, Img, Elem, Picture, Title } from "./FriendCard.styled";
const BASE_URL = "https://petly-be.herokuapp.com/friends";

const FriendCard = friend => {
  const { title, address, email, phone, workDays, imageUrl = "" } = friend.friend;

  return (
    <>
      <Title>{title}</Title>
      <Box>
        <Picture>
          <Img src={BASE_URL + imageUrl} alt={title} />
        </Picture>
        <List>
          <Elem>
            <span>Time:</span>
            <span>_______ </span>
          </Elem>
          <Elem>
            <span>Address:</span>
            {address && <span>{address}</span>}
          </Elem>
          <Elem>
            <span>Email:</span>
            {email && <span>{email}</span>}
          </Elem>
          <Elem>
            <span>Phone:</span>
            {phone && <span>{phone}</span>}
          </Elem>
        </List>
      </Box>
    </>
  );
};

export default FriendCard;
