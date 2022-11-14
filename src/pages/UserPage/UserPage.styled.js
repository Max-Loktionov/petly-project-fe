import styled from "styled-components";

export const UserPageContainer = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  @media ${p => p.theme.media.mobile} {
    width: 320px;
  }
  @media ${p => p.theme.media.tablet} {
    width: 768px;
    padding-left: 0px;
    padding-right: 32px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    padding-left: 0px;
    padding-right: 16px;
    width: 1280px;
  }
`;
