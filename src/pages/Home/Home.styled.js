import styled from "styled-components";
import { StyledButton } from "components/Button/Button.styled";
import homeBgiMobile from "../../img/home-bgi-mobile.svg";
import homeBgiTablet from "../../img/home-bgi-tablet.svg";
import homeBgiDt from "../../img/home-bgi-dt.svg";
import homeFrontBgiDt from "../../img/home-front-bgi-dt.png";
import homeFrontBgiTablet from "../../img/home-front-bgi-tablet.png";
import homeFrontBgiMobile from "../../img/home-front-bgi-mobile.png";

export const LearnButton = styled(StyledButton)`
  padding: 8px 80px;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  /* color: #010101; */
  color: ${p => p.theme.colors.inputModal};
  /* color: green; */
  background-image: url(${homeFrontBgiMobile}), url(${homeBgiMobile});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 320px 337px 100%;
  @media ${p => p.theme.media.tablet} {
    color: ${p => p.theme.colors.accent};
    background-image: url(${homeFrontBgiTablet}), url(${homeBgiTablet});
    background-size: 669px 733px, 100%;
  }
  @media ${p => p.theme.media.desktop} {
    color: ${p => p.theme.colors.white};
    background-image: url(${homeFrontBgiDt}), url(${homeBgiDt});
  }
`;

export const SubContainer = styled.div`
  width: 320px;
  height: 337px;
  /* background-image: url(${homeFrontBgiMobile});
  background-repeat: no-repeat;
  background-position: bottom;
  @media ${p => p.theme.media.tablet} {
    background-image: url(${homeFrontBgiTablet});
  }
  @media ${p => p.theme.media.desktop} {
    background-image: url(${homeFrontBgiDt});
  } */
`;
