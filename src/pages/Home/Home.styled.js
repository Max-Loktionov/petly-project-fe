import styled from "styled-components";
import { StyledButton } from "components/Button/Button.styled";
import homeBgiMobile from "../../img/home-bgi-mobile.svg";
import homeBgiTablet from "../../img/home-bgi-tablet.svg";
import homeBgiDt from "../../img/home-bgi-dt.svg";
import homeFrontBgiDt from "../../img/home-front-bgi-dt.png";
import homeFrontBgiTablet from "../../img/home-front-bgi-tablet.png";
import homeFrontBgiMobile from "../../img/home-front-bgi-mobile.png";
import homeHartBgi from "../../img/home-hart-bgi.svg";

export const LearnButton = styled(StyledButton)`
  padding: 8px 80px;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-top: 118px;
  font-size: 40px;
  color: ${p => p.theme.colors.inputModal};
  background-image: url(${homeBgiMobile});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  @media ${p => p.theme.media.tablet} {
    height: auto;
    padding-top: 160px;
    padding-left: 32px;
    padding-right: 32px;
    color: ${p => p.theme.colors.accent};
    background-image: url(${homeBgiTablet});
    background-size: 100%;
  }
  @media ${p => p.theme.media.desktop} {
    height: 100vh;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 0;
    color: ${p => p.theme.colors.white};
    background-image: url(${homeHartBgi}), url(${homeBgiDt});
    background-size: 91.93px 89px, 100%;
    background-position: 59.6% 26.28%, bottom;
  }
`;

export const SubContainer = styled.div`
  width: 320px;
  height: 337px;
  align-self: center;
  background-image: url(${homeFrontBgiMobile});
  background-repeat: no-repeat;
  background-position: bottom;
  @media ${p => p.theme.media.tablet} {
    width: 699px;
    height: 733px;

    background-image: url(${homeFrontBgiTablet});
  }
  @media ${p => p.theme.media.desktop} {
    width: 624px;
    height: 655px;
    align-self: end;
    background-image: url(${homeFrontBgiDt});
  }
`;

export const Title = styled.h1`
  margin-bottom: 58px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.black};
  @media ${p => p.theme.media.tablet} {
    width: 588px;
    margin-bottom: 100px;
    padding: 0;
    font-size: 68px;
  }
`;

export const SecretButton = styled.button`
  position: absolute;
  top: ${Math.random() * 1000}px;
  left: ${Math.random() * 1000}px;
  padding: 10px;
  border: 1px solid black;
`;
