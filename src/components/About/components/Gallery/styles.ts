import styled from 'styled-components'

export const GalleryContainer = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;

  width: 100%;
  max-width: 70rem;
  max-height: 48.81rem;
  margin: auto;
  padding: 1rem;
  border: 2px solid ${(props) => props.theme['blue-500']};
  border-radius: 12px;

  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    margin: auto;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
  }

  div {
    max-width: 15rem;
    width: 100%;
    height: 12rem;

    overflow: hidden;
    box-shadow: none;

    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.4);
      box-shadow: 8px 8px 10px 4px ${(props) => props.theme['gray-900']};
      border-radius: 20px;

      img {
        transform: scale(1.5);
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
