import styled from "styled-components";

export const Item = styled.li`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 32px;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;

  @media ${p => p.theme.media.tablet} {
    width: 336px;
  }

  @media ${p => p.theme.media.desktop} {
    width: 288px;
  }
`;

export const ImageThumb = styled.div`
  position: relative;
  width: 100%;
  height: 288px;
  margin-bottom: 20px;

  @media ${p => p.theme.media.tablet} {
    height: 288px;
  }

  @media ${p => p.theme.media.desktop} {
    width: 288px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 280px;
  height: 288px;
  object-fit: cover;

  @media ${p => p.theme.media.tablet} {
    width: 336px;
  }

  @media ${p => p.theme.media.desktop} {
    width: 288px;
  }
`;

export const Category = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  width: 158px;
  height: 28px;

  font-family: "Manrope";
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  text-align: center;
  letter-spacing: 0.04em;

  color: #111111;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);

  padding: 6px 0 7px;
  border-radius: 0 40px 40px 0;
`;

export const BtnFavorite = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 20px;
  color: #111111;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 16px 32px;

  @media ${p => p.theme.media.tablet} {
    padding: 20px 20px 32px;
  }
`;

export const Table = styled.table`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #111111;
`;

export const ButtonMore = styled.button`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;

  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  width: 248px;
  margin: 0 auto;

  color: #f59256;

  padding: 8px;
  margin-bottom: 32px;

  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
`;
