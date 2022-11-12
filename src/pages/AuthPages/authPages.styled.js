import styled from "styled-components";
import bgImg from '../../img/auth-forms-bg.svg'

export const Section = styled.div`
    height: 100vh;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: bottom;
`;

export const Container = styled.div`
    
`;

// @media ${p => p.theme.media.desktop} {
//     color: ${p => p.theme.colors.white};
//   }

export const Title = styled.h3`
    padding-top: 100px;
    display: flex;
    justify-content: center;

    font-size: 24px;
    line-height: 1.37;
    font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Text = styled.p`
    display: flex;
    justify-content: center;
    
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.33;
`;

export const LogoLink = styled.a`
    margin-left: 5px;
    text-decoration: underline;
    color: blue;
`;