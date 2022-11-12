import styled from "styled-components";

export const Container = styled.div`
  padding: 12px 20px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 24px 32px;
  }
  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    padding: 20px 16px;
  }
`;
