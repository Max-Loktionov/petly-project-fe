import styled from "styled-components";

export const LogoText = styled.p`
  font-family: ${p => p.theme.fonts.logo};
  color: ${p => p.theme.colors.logo};
  font-weight: ${p => p.theme.fontWeights.logo};
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.l};
  }
  @media ${p => p.theme.media.desktop} {
    margin-right: 80px;
  } ;
`;

export const AccentLogo = styled.span`
  color: ${p => p.theme.colors.accent};
`;
