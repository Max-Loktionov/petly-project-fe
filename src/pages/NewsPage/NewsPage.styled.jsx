import styled from "styled-components";

export const Container = styled.div`
  @media ${p => p.theme.media.mobile} {
    margin: 20px 42px 100px 42px;
  }

  @media ${p => p.theme.media.tablet} {
    margin: 94px 32px 100px 32px;
  }
  @media ${p => p.theme.media.desktop} {
    margin: 69px 16px 200px 16px;
  }
`;

export const Title = styled.h1`
  @media ${p => p.theme.media.mobile} {
    text-align: center;
    margin-bottom: 28px;
    font-size: 24px;
    line-height: 33px;
  }
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`;

export const Search = styled.div`
  @media ${p => p.theme.media.mobile} {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    width: 280px;
    height: 40px;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 20px;
    border: 1px blue solid;
  }
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 60px;
    width: 608px;
    height: 44px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 60px;
    width: 608px;
    height: 44px;
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
    margin-bottom: 40px;  
    &:nth-last-child() {
      margin-bottom: 0px;
    }
 @media ${p => p.theme.media.tablet} {
width: calc((100% - 32px) / 2);
  margin-left: 32px;
  margin-bottom: 60px;
   &:nth-child(2n + 1) {
    margin-left: 0px;
  }
 }
 @media ${p => p.theme.media.desktop} {
  width: calc((100% - 64px) / 3);
    &:nth-child(3n + 1) {
    margin-left: 0px;
  }
`;