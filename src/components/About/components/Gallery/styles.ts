import styled from 'styled-components'

export const GalleryContainer = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;

  div {
    max-width: 15rem;
    width: 100%;
    height: 15rem;

    background: navy;

    overflow: hidden;

    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.3);

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
  }
`
