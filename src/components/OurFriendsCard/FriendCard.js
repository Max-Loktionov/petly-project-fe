// import PropTypes from "prop-types";
import { Box, List, Img, Elem, Picture, Title, Time } from "./FriendCard.styled";
import WorkTime from "./WorkTime";
import image from "./cat.png";
const BASE_URL = "https://petly-be.herokuapp.com/friends";

const FriendCard = friend => {
  const { title, address, email, phone, workDays, imageUrl } = friend.friend;
  console.log(friend);
  return (
    <>
      <Title>{title}</Title>
      <Box>
        <Picture>{{ imageUrl } ? <Img src={BASE_URL + imageUrl} alt={title} /> : <Img src="./cat.png" alt={title} />}</Picture>
        <List>
          <Time>
            Time:
            {workDays ? (
              <span>
                <WorkTime workDays={workDays} />
              </span>
            ) : (
              <small>_______________ </small>
            )}
          </Time>
          <Elem>
            Address:
            {address ? <span>{address}</span> : <span>__________ </span>}
          </Elem>
          <Elem>
            Email:
            {email ? <span>{email}</span> : <span>__________ </span>}
          </Elem>
          <Elem>
            Phone:
            {phone ? <span>{phone}</span> : <span>__________ </span>}
          </Elem>
        </List>
      </Box>
    </>
  );
};

export default FriendCard;
