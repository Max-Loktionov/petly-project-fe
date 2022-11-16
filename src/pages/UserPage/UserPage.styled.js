import styled from "styled-components";

export const UserPageContainer = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  @media ${p => p.theme.media.mobile} {
    width: 320px;
  }
  @media ${p => p.theme.media.tablet} {
    width: 768px;
    padding-left: 0px;
    padding-right: 32px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    padding-left: 0px;
    padding-right: 16px;
    width: 1280px;
  }
`;

export const BoxUser = styled.section`
  position: relative;
  margin-bottom: 40px;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 20px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-right: 32px;
    margin-bottom: 0px;
  }
`;

// export const BoxUser = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   margin-bottom: 40px;

//   width: 280px;
//   min-height: 537px;
//   padding: 12px;

//   border-radius: ${p => p.theme.radii.cardPet};
//   box-shadow: 7px 4px 14px ${p => p.theme.colors.shadowCard};
//   background-color: ${p => p.theme.colors.white};
//   @media ${p => p.theme.media.tablet} {
//     position: relative;
//     margin-bottom: 20px;

//     flex-direction: row-reverse;
//     justify-content: space-between;
//     width: 736px;
//     min-height: 311px;
//     padding: 24px 40px 24px 32px;

//     border-radius: 0 ${p => p.theme.radii.cardPet} ${p => p.theme.radii.cardPet} 0;
//   }
//   @media ${p => p.theme.media.desktop} {
//     flex-direction: column;
//     justify-content: inherit;
//     width: 411px;
//     min-height: 580px;
//     padding: 20px 16px 42px 16px;
//     margin-right: 32px;
//     margin-bottom: 0px;
//   }
// `;
// export const BoxUser = styled.section`
//   position: relative;
//   margin-bottom: 40px;
//   @media ${p => p.theme.media.tablet} {
//     margin-bottom: 20px;
//   }
//   @media ${p => p.theme.media.desktop} {
//     margin-right: 32px;
//     margin-bottom: 0px;
//   }
// `;

// export const UserBlock = styled.div`
//   display: flex;
//   flex-direction: column;

//   width: 280px;
//   min-height: 537px;
//   padding: 12px;

//   border-radius: ${p => p.theme.radii.cardPet};
//   box-shadow: 7px 4px 14px ${p => p.theme.colors.shadowCard};
//   background-color: ${p => p.theme.colors.white};
//   @media ${p => p.theme.media.tablet} {
//     position: relative;

//     flex-direction: row-reverse;
//     justify-content: space-between;
//     width: 736px;
//     min-height: 311px;
//     padding: 24px 40px 24px 32px;

//     border-radius: 0 ${p => p.theme.radii.cardPet} ${p => p.theme.radii.cardPet} 0;
//   }
//   @media ${p => p.theme.media.desktop} {
//     flex-direction: column;
//     justify-content: inherit;
//     width: 411px;
//     min-height: 580px;
//     padding: 20px 16px 42px 16px;
//   }
// `;
