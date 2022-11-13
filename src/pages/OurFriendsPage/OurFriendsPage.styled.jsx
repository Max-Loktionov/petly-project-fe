import styled from "styled-components";

export const Container = styled.div`
  @media ${p => p.theme.media.mobile} {
    margin: 47px 20px 100px 20px;
  }

  @media ${p => p.theme.media.tablet} {
    margin: 94px 32px 100px 32px;
  }
  @media ${p => p.theme.media.desktop} {
    margin: 72px 16px 100px 16px;
  }
`;

export const Title = styled.h1`
  @media ${p => p.theme.media.mobile} {
    text-align: center;
    margin-bottom: 40px;
    font-size: 24px;
  }
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 45px;
    font-size: 48px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 60px;
  }
`;

export const Box = styled.ul`
  @media ${p => p.theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Card = styled.li`
  @media ${p => p.theme.media.mobile} {
     margin-left: auto;
    margin-right: auto;  
    width: 280px;
    height: 192px;
    margin-bottom: 12px;
    overflow-y: hidden;
   
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
     border-radius: 40px;
     padding: 12px 34px 12px 4px;
    &:nth-last-child() {
      margin-bottom: 0px;
    }
@media ${p => p.theme.media.tablet} {
width: calc((100% - 32px) / 2);
 height: 246px;
  margin-left: 32px;
  margin-bottom: 32px;
  margin-right: 0px;
  padding: 16px 17px 16px 4px;
   &:nth-child(2n + 1) {
    margin-left: 0px;
  }
 }
  @media ${p => p.theme.media.desktop} {
  width: calc((100% - 64px) / 3);
  height: 287px;  
   margin-left: 32px;
  margin-bottom: 32px;
  margin-right: 0px;
  padding: 16px 35px 16px 11px;  
    &:nth-child(3n + 1) {
    margin-left: 0px;
  }
`;
