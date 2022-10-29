import styled from 'styled-components'

export const GalleryContainer = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;

  width: 100%;
  max-width: 1120px;
  margin: auto;

  @media screen and (max-width: 768px) {
    margin: auto;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
  }

  div {
    max-width: 15rem;
    width: 100%;
    height: 15rem;

    background: navy;

    overflow: hidden;

    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);

      border-radius: 20px;

      img {
        transform: scale(1.3);
      }
    }

    img {
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
    }

    @media screen and (max-width: 768px) {
      max-width: 12rem;
      height: 10rem;

      &:hover {
        transform: scale(1);

        img {
          transform: scale(1.5);
        }
      }
    }
  }
`
