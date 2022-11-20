import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  width: 100%;
  padding: 16px 20px;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.background};

  @media ${p => p.theme.media.tablet} {
    display: flex;
    justify-content: space-between;
    padding: 24px 32px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    align-items: center;
    padding: 20px 16px;
  }
`;
