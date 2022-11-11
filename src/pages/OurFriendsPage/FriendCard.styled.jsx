import styled from "styled-components";
import { colors } from "../../styles/theme";
export const Box = styled.div`
  display: flex;
`;
export const Title = styled.p`
  @media screen and (min-width: 320px) {
    text-align: center;
    margin-top: 0px;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #f59256;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 27px;
  }
`;

export const Picture = styled.div`
  @media screen and (min-width: 320px) {
    margin: 0px;
    width: 110px;
  }
  @media screen and (min-width: 768px) {
    width: 120px;
  }
  @media screen and (min-width: 1280px) {
    width: 158px;
  }
`;
export const List = styled.ul`
  @media screen and (min-width: 320px) {
    margin: 0px 0px 0px 12px;
    width: 120px;
  }
  @media screen and (min-width: 768px) {
    margin: 0px 0px 0px 14px;
    width: 181px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0px 0px 0px 16px;
  }
`;

export const Elem = styled.li`
 @media screen and (min-width: 320px) {
  display: flex;
  flex-direction: column;
  text-align: start;
margin-top: 4px;
font-size: 12px;
line-height: 16px;
&:nth-child(1) {
    margin-top: 0px;
}
 @media screen and (min-width: 768px) {
margin-top: 8px;
font-size: 14px;
line-height: 19px;
 }
 @media screen and (min-width: 1280px) {
  margin-top: 12px;  
  font-size: 16px;
  line-height: 22px;  
  }
`;

export const Img = styled.img`
  width: 100%;
  vertical-align: middle;
`;
