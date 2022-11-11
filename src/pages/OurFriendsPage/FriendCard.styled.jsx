import styled from "styled-components";

export const Box = styled.div`
  display: flex;
`;
export const Title = styled.p`
  margin-top: 0px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Picture = styled.div`
  width: 158px;
  margin: 0px;
`;
export const List = styled.ul`
  list-style: none;
  margin: 0px 0px 0px 16px;
  width: 181px;
  padding-left: 0px;
`;

export const Elem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 12px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  &:nth-child(1) {
    margin-top: 0px;
  }
`;

export const Img = styled.img`
  width: 100%;
  vertical-align: middle;
`;
