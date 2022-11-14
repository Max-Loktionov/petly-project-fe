import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  overflow: hidden;
`;
export const Title = styled.p`
  @media ${p => p.theme.media.mobile} {
    text-align: center;
    margin-top: 0px;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #f59256;
    white-space: nowrap;
    overflow: hidden;
    padding: 5px;
    text-overflow: clip;
  }
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 22px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 20px;
    line-height: 27px;
  }
`;

export const Picture = styled.div`
  @media ${p => p.theme.media.mobile} {
    margin: 0px;
    width: 110px;
  }
  @media ${p => p.theme.media.tablet} {
    width: 120px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 158px;
  }
`;
export const List = styled.ul`
  @media ${p => p.theme.media.mobile} {
    margin: 0px 0px 0px 12px;
    width: 120px;
  }
  @media ${p => p.theme.media.tablet} {
    margin: 0px 0px 0px 14px;
    min-width: 181px;
  }
  @media ${p => p.theme.media.desktop} {
    margin: 0px 0px 0px 16px;
  }
`;

export const Elem = styled.li`
 @media ${p => p.theme.media.mobile} {
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 44px;
  overflow: hidden;
margin-top: 4px;
font-size: 12px;
line-height: 16px;
&:nth-child(1) {
    margin-top: 0px;
}
 @media ${p => p.theme.media.tablet}  {
margin-top: 8px;
font-size: 14px;
line-height: 19px;
 }
 @media ${p => p.theme.media.desktop} {
  margin-top: 12px;  
  font-size: 16px;
  line-height: 22px;  
  }
`;

export const Time = styled.li`
 @media ${p => p.theme.media.mobile} {
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 44px;
  overflow: hidden;
margin-top: 4px;
font-size: 12px;
line-height: 16px;
&:nth-child(1) {
    margin-top: 0px;
}
 @media ${p => p.theme.media.tablet}  {
margin-top: 8px;
font-size: 14px;
line-height: 19px;
 }
 @media ${p => p.theme.media.desktop} {
  margin-top: 12px;  
  font-size: 16px;
  line-height: 22px;  
  }
 
    :hover span {
      display: inline-block;
      padding: 12px 12px 12px 12px;
      position: absolute;
      border: 1px solid #f59256;
      font-size: 12px;
      line-height: 16px;
      background: #FFFFFF;
border: 1px solid #F59256;
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 8px;
    }
`;

export const Img = styled.img`
  width: 100%;
  vertical-align: middle;
  background: #f59256;
`;

export const WorkTime = styled.ul`
  color: pink;
`;