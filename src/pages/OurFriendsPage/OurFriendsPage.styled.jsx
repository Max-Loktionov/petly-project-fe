import styled from "styled-components";

export const Container = styled.div`
  margin: 72px 16px 100px 16px;
  background: #f5f5f5;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Box = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.li`
  width: calc((100% - 64px) / 3);
  height: 287px;
  margin-left: 32px;
  margin-bottom: 32px;
  list-style: none;
  padding: 16px 35px 16px 11px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  &:nth-child(3n + 1) {
    margin-left: 0px;
  }
`;
