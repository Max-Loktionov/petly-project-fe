import styled from "styled-components";

export const Container = styled.div`
  padding-top: 12px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
  }
  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;
