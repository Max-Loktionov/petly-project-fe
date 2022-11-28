import styled from "styled-components";

export const Title = styled.h3`
  @media ${p => p.theme.media.mobile} {
    position: sticky;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #f59256;
    z-index: 2;

    span {
      display: none;
      background: #ffffff;
      padding: 2px 10px 2px 10px;
      border: 1px solid #f59256;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      transform: scale(1.1);
    }
    :hover span {
      position: absolute;
      display: inline-block;
    }
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

export const Box = styled.div`
  display: flex;
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
    position: relative;
    margin: 0px 0px 0px 12px;
    width: 100%;
  }
  @media ${p => p.theme.media.tablet} {
    margin: 0px 0px 0px 14px;
    min-width: 181px;
  }
  @media ${p => p.theme.media.desktop} {
    margin: 0px 0px 0px 16px;
  }
`;

export const Time = styled.li`
  @media ${p => p.theme.media.mobile} {
    display: flex;
    flex-direction: column;
    text-align: start;
    height: 32px;
    overflow: hidden;
    margin-top: 4px;
    font-size: 12px;
    line-height: 16px;
    &:nth-child(1) {
      margin-top: 0px;
    }
    :hover {
      color: #f59256;
    }
  }
  @media ${p => p.theme.media.tablet} {
    margin-top: 8px;
    font-size: 14px;
    line-height: 19px;
    height: 38px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-top: 12px;
    font-size: 16px;
    line-height: 22px;
    height: 44px;
  }
  small {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  background: #f59256;
`;

export const Address = styled.li`
  @media ${p => p.theme.media.mobile} {
    display: flex;
    flex-direction: column;
    text-align: start;
    height: 32px;
    margin-top: 4px;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    &:nth-child(1) {
      margin-top: 0px;
    }
  }
  @media ${p => p.theme.media.tablet} {
    margin-top: 8px;
    font-size: 14px;
    line-height: 19px;
    height: 38px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-top: 12px;
    font-size: 16px;
    line-height: 22px;
    height: 44px;
  }
  :hover span {
    position: absolute;
    left: 0px;
    top: 25%;
    display: inline-block;
    padding: 2px 2px 2px 2px;
    border: 1px solid #f59256;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #f59256;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    overflow: visible;
  }
`;

export const Email = styled(Address)``;
export const Phone = styled(Address)``;

export const Hr = styled.hr`
  @media ${p => p.theme.media.mobile} {
    margin: 15px 0;
    padding: 0;
    height: 0;
    border: none;
    border-top: 2px dashed #111111;
    width: 70%;
  }
  @media ${p => p.theme.media.tablet} {
    margin: 18px 0;
  }

  @media ${p => p.theme.media.desktop} {
    margin: 20px 0px 0px 0px;
  }
`;
