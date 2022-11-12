import styled from "styled-components";
import { StyledButton } from "components/Button/Button.styled";

export const Form = styled.form`
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const Input = styled.input`
    display: block;
    margin-left: auto;
    margin-right: auto;
    &:not(:last-of-type) {
       margin-bottom: 16px; 
    }
    padding: 11px 14px 12px;

    width: 280px;
    height: 40px;

    background-color: ${p => p.theme.colors.background};
    border: ${p => p.theme.borders.inputModal};
    border-color: ${p => p.theme.colors.inputModal};
    border-radius: 40px;

    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.35;

    :focus {
        outline-color: ${p => p.theme.colors.inputModal};
    }
`;

export const RegisterBtn = styled(StyledButton)`
    display: block;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto; 

    width: 280px;
    height: 44px;

    font-size: 20px;
    line-height: 1.35;
`;