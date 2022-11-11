import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    margin: 47px 20px 100px 20px;
  }

  @media screen and (min-width: 768px) {
    margin: 94px 32px 100px 32px;
  }
  @media screen and (min-width: 1280px) {
    margin: 72px 16px 100px 16px;
  }
`;

export const Title = styled.h1`
  @media screen and (min-width: 320px) {
    text-align: center;
    margin-bottom: 40px;
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 45px;
    font-size: 48px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;

export const Box = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Card = styled.li`
  @media screen and (min-width: 320px) {
     margin-left: auto;
    margin-right: auto;  
    width: 280px;
    height: 192px;
    margin-bottom: 12px;
   
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
     border-radius: 40px;
     padding: 12px 34px 12px 4px;
    &:nth-last-child() {
      margin-bottom: 0px;
    }
 @media screen and (min-width: 768px) {
width: calc((100% - 34px) / 2);
 height: 246px;
  margin-left: 32px;
  margin-bottom: 32px;
  padding: 16px 17px 16px 4px;
   &:nth-child(2n + 1) {
    margin-left: 0px;
  }
 }
 @media screen and (min-width: 1280px) {
  width: calc((100% - 64px) / 3);
  height: 287px;  
  padding: 16px 35px 16px 11px;  
    &:nth-child(3n + 1) {
    margin-left: 0px;
  }
`;
