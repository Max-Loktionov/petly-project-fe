import { Box, List, Img, Picture, Title, Time, Hr, Address, Email, Phone } from "./FriendCard.styled";
import WorkTime from "./WorkTime";
import image from "../../img/defaultLogo.jpg";

const BASE_URL = "https://petly-be.herokuapp.com/friends";

const FriendCard = friend => {
  const { title, address, email, phone, workDays, imageUrl, url } = friend.friend;
  const shortName = title.split(" ").slice(0, 3).join(" ");

  const veryShortName = title.split(" ").slice(0, 2).join(" ");

  return (
    <>
      <Title>
        <span>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </span>
        {shortName.length > 26 ? veryShortName : shortName}
      </Title>

      <Box>
        <Picture>{imageUrl ? <Img src={BASE_URL + imageUrl} alt={title} /> : <Img src={image} alt={title} />}</Picture>
        <List>
          <Time>
            Time:
            {workDays ? <WorkTime workDays={workDays} /> : <Hr />}
          </Time>
          <Address>
            Address:
            <a href="https://goo.gl/maps/9DHxodGgufUYayEx5" target="_blank" rel="noreferrer">
              {address ? <span>{address}</span> : <Hr />}
            </a>
          </Address>
          <Email>
            Email:
            <a href="mailto:{address}"> {email ? email : <Hr />} </a>
          </Email>
          <Phone>
            Phone:
            <a href="tel:{phone}"> {phone ? phone : <Hr />} </a>
          </Phone>
        </List>
      </Box>
    </>
  );
};

export default FriendCard;
