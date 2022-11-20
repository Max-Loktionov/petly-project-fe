import styled from "styled-components";

export const Container = styled.div`
  @media ${p => p.theme.media.mobile} {
    max-width: 100%;
    padding: 20px 20px 100px;
  }

  @media ${p => p.theme.media.tablet} {
    padding: 94px 32px 100px 32px;
  }

  @media ${p => p.theme.media.desktop} {
    padding: 69px 16px 200px 16px;
  }
`;

export const Title = styled.h1`
  @media ${p => p.theme.media.mobile} {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.37;
    text-align: center;
    margin-bottom: 28px;
    color: ${p => p.theme.colors.primaryText};
  }

  @media ${p => p.theme.media.tablet} {
    margin-bottom: 40px;
    font-size: 48px;
  }
`;
