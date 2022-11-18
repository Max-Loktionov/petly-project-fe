import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 280px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  margin: 0 auto;
  padding: 12px 9px;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  margin-bottom: 28px;

  @media ${p => p.theme.media.tablet} {
    width: 608px;
    height: 44px;
    padding: 20px 9px;
    border-radius: 40px;
    margin-bottom: 40px;
  }

  @media ${p => p.theme.media.desktop} {
    display: flex;
    align-items: center;
  }
`;

export const SearchFormInput = styled.input`
  width: 100%;
  font: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  align-items: center;
  letter-spacing: 0.04em;
  border: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;

  color: ${p => p.theme.colors.searchText};

  @media ${p => p.theme.media.tablet} {
    display: flex;
    align-items: center;
    font-size: 20px;
    line-height: 1.35;
  }

  @media ${p => p.theme.media.desktop} {
    display: flex;
    align-items: center;
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  cursor: pointer;
  background-color: transparent;
`;
