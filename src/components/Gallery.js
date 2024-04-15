import styled from "styled-components";
import Eye from "../assets/eye.svg";
import Save from "../assets/save.svg";
import { useCallback, useState } from "react";
import { ImagePreview } from "./ImagePreview";

const Wrapper = styled.div`
  border-radius: 8px;
  background-color: #F7EBE7;
  padding: 20px;
`;

const Title = styled.h2`
  color: #844531;
`;

const ImageOptions = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageHolder = styled.div`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  height: 280px;
  box-sizing: border-box;
  position: relative;
  &:hover ${ImageOptions} {
    display: flex;
  }

  &:hover ${Image} {
    filter: brightness(0.5);
  }
  @media (max-width: 768px) {
    padding: 8px;
    height: 150px;
  }
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 300px));
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 250px));
    justify-content: center;
  }
`;

const PreviewButton = styled.button`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
  width: 130px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const SaveButton = styled.button`
  background: #EE7E52;
  border-radius: 10px;
  width: 130px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px;
  outline: none;
  cursor: pointer;
  border: none;
`;

export function Gallery({ images = [] }) {
  return (
    <Wrapper>
      <Title>Recently Uploaded</Title>
      <Images>
        {images.map((i, index) => (
          <ImageComponent key={index} src={i} />
        ))}
      </Images>
    </Wrapper>
  );
}

function ImageComponent({ src }) {
  const [showPreview, setShowPreview] = useState(false);

  const toggle = useCallback(() => {
    setShowPreview(!showPreview);
  }, [showPreview]);
  return (
    <>
      <ImageHolder>
        <Image src={src} loading="lazy" />
        <ImageOptions>
          <PreviewButton onClick={toggle}>
            <img src={Eye} alt="eye" />
            Preview
          </PreviewButton>
          <SaveButton onClick={() => window.open(src)}>
            <img src={Save} alt="save" />
            Save
          </SaveButton>
        </ImageOptions>
      </ImageHolder>
      {showPreview && <ImagePreview src={src} onToggle={toggle} />}
    </>
  )
}