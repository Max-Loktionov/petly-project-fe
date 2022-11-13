import EllipsisText from "react-ellipsis-text";
import PropTypes from "prop-types";
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
            <span>_______ </span>
          </Elem>
          <Elem>
            <span>Address:</span>
            {address && (
              <span>
                <EllipsisText text={address} length={25} />
              </span>
            )}
          </Elem>
          <Elem>
            <span>Email:</span>
            {email && <span>{email}</span>}
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

EllipsisText.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  tail: PropTypes.string,
  tailClassName: PropTypes.string,
  tooltip: PropTypes.shape({
    copyOnClick: PropTypes.bool,
    onAppear: PropTypes.func,
    onDisapepear: PropTypes.func,
  }),
};
