import styled from "styled-components";

export const Container = styled.div`
  @media ${p => p.theme.media.mobile} {
    margin: 0 42px 100px 42px;
    padding-top: 100px;
  }

  @media ${p => p.theme.media.tablet} {
    margin: 0 32px 100px 32px;
    padding-top: 160px;
  }
  @media ${p => p.theme.media.desktop} {
    margin: 0 16px 200px 16px;
    padding-top: 126px;
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

export const SearchBox = styled.form`
  @media ${p => p.theme.media.mobile} {
    position: relative;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 280px;
    height: 40px;
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
export const Button = styled.button`
  position: absolute;
  right: 15px;
  top: 30%;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Input = styled.input`
  @media ${p => p.theme.media.mobile} {
    display: block;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border: 1px white solid;
    border-radius: 20px;
    padding-left: 15px;
    width: 100%;
    height: 40px;
    background-color: #ffffff;

    ::placeholder {
      color: #535353;
    }
  }
  @media ${p => p.theme.media.tablet} {
    height: 44px;
  }
  @media ${p => p.theme.media.desktop} {
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
  }
  @media ${p => p.theme.media.tablet} {
    width: calc((100% - 32px) / 2);
    margin-left: 32px;
    margin-bottom: 60px;
    margin-right: 0px;
    &:nth-child(2n + 1) {
      margin-left: 0px;
    }
  }
  @media ${p => p.theme.media.desktop} {
    width: calc((100% - 64px) / 3);
    &:nth-child(2n + 1) {
      margin-left: 32px;
    }
    &:nth-child(3n + 1) {
      margin-left: 0px;
    }
  }
`;

export const NotFound = styled.p`
  font-size: 20px;
  color: red;
  @media ${p => p.theme.media.tablet} {
    font-size: 30px;
  }
`;
export const NotFoundBox = styled.div`
  display: flex;
  justify-content: center;
`;
