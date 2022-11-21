import styled from "styled-components";
export const Div = styled.div`
  :hover span {
    position: absolute;
    left: 0px;
    top: 25%;
    width: 120px;
    display: inline-block;
    padding: 12px 12px 12px 12px;
    border: 1px solid #f59256;
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    background: #ffffff;
    border: 1px solid #f59256;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    small {
      display: inline-block;
    }
  }
`;
