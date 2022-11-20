import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../img/auth-forms-bg.jpg";

export const Container = styled.div`
  margin-top: 0px;
  padding-top: -30px;
  height: 100vh;
  background-image: url(${img});
  background-size: cover;

  @media ${p => p.theme.media.mobile} {
    margin: 20px 0px 100px 0px;
  }
  @media ${p => p.theme.media.tablet} {
    margin: 94px 0px 100px 0px;
  }
  @media ${p => p.theme.media.desktop} {
    margin: 69px 0px 200px 0px;
  }
`;

export const Text = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  @media ${p => p.theme.media.mobile} {
    font-size: 24px;
    flex-direction: column;
  }

  @media ${p => p.theme.media.tablet} {
    font-size: 32px;
    flex-direction: column;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 48px;
    flex-direction: row;
  }
`;

export const ErrorBox = styled.div`
  display: flex;
  align-items: center;

  @media ${p => p.theme.media.mobile} {
  }
  @media ${p => p.theme.media.tablet} {
  }
  @media ${p => p.theme.media.desktop} {
  }
`;
export const HomeLink = styled(Link)`
  color: #ffffff;
  @media ${p => p.theme.media.mobile} {
    font-size: 26px;
  }

  @media ${p => p.theme.media.tablet} {
    font-size: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 48px;
  }
`;

export const HomeLinkBox = styled.div`
  background-color: #f59256;
  height: 200px;
  width: 200px;
  padding-top: 50px;
  padding-left: 30px;
  border: 3px solid pink;
  border-radius: 10px;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  animation: animate125 3000ms infinite 1000ms;

  @keyframes animate125 {
    50% {
      transform: scale(1.25);
    }
  }

  @media ${p => p.theme.media.mobile} {
    height: 100px;
    width: 100px;
    padding-left: 12px;
    padding-top: 25px;
  }

  @media ${p => p.theme.media.tablet} {
    height: 180px;
    width: 180px;
    padding-left: 30px;
    padding-top: 50px;
  }
  @media ${p => p.theme.media.desktop} {
    height: 200px;
    width: 200px;
    padding-left: 30px;
    padding-top: 50px;
  }
`;

export const Error = styled.span`
  color: #f59256;
  @media ${p => p.theme.media.mobile} {
    font-size: 32px;
  }
  @media ${p => p.theme.media.tablet} {
    font-size: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 48px;
  }
`;
