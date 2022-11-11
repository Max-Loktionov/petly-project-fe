import styled from "styled-components";

export const Form = styled.form`
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const Input = styled.input`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    padding: 11px 14px 12px;

    width: 280px;
    height: 40px;

    background-color: ${props => props.theme.colors.background};
    border: ${props => props.theme.borders.normal};
    border-color: ${props => props.theme.colors.inputModal};
    border-radius: 40px;

    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.35;

    :focus {
        outline-color: ${props => props.theme.colors.inputModal};
    }
`;