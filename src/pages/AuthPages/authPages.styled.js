import styled from "styled-components";
import bgImgMobile from '../../img/auth-forms-bg.svg';
import bgImgTablet from '../../img/auth-forms-bg-tablet.svg';
import bgImgDesktop from '../../img/auth-forms-bg-desctop.svg';


export const Section = styled.div`
    @media ${p => p.theme.media.tablet} {
        padding-top: 145px;
        padding-left: 80px;
        padding-right: 80px;
    }    

    @media ${p => p.theme.media.desktop} {
        padding-top: 26px;
        padding-left: 331px;
        padding-right: 331px;
    } 
`;

export const Container = styled.div`
    @media ${p => p.theme.media.tablet} {
        padding-top: 60px;
        padding-bottom: 40px;
        margin-right: auto;
        margin-left: auto;

        width: 608px;
        box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
        border-radius: 40px;
        background-color: ${p => p.theme.colors.white};
    }

    @media ${p => p.theme.media.desktop} {
        padding-bottom: 60px;
        width: 618px;
    }
`;

export const Title = styled.h3`
    padding-top: 26px;
    display: flex;
    justify-content: center;

    font-size: 24px;
    line-height: 1.37;
    font-weight: ${p => p.theme.fontWeights.bold};

    @media ${p => p.theme.media.tablet} {
        padding-top: 0;
        font-size: 36px;
    }
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

export const Wrap = styled.div`
    height: 90vh;
    background-image: url(${bgImgMobile});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;

    @media ${p => p.theme.media.tablet} {
        background-image: url(${bgImgTablet}); 
    }

    @media ${p => p.theme.media.desktop} {
        background-image: url(${bgImgDesktop}); 
    }
`;