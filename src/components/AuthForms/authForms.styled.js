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
    margin-bottom: 2px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto; 

    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.secondatyBtnText};

    width: 280px;
    height: 44px;

    font-size: 20px;
    line-height: 1.35;
`;

export const BackBtn = styled(RegisterBtn)`
    margin-top: 12px;

    border-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.secondatyBtnText};

    font-weight: ${p => p.theme.fontWeights.heading};
`;

export const ErrorText = styled.div`
    margin-left: 40px;
    &:not(:last-of-type) {
       margin-bottom: 16px; 
    }
    font-size: 10px;
    color: red;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-style: italic;
    
`