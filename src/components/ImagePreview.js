import styled from "styled-components";

const PopupContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.8);
`;

const Popup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  margin: auto;
  flex-direction: column;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin: 20px;
`;

const ImageHolder = styled.div`
  width: 800px;
  height: 900px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export function ImagePreview({ src, onToggle }) {
  return (
    <PopupContainer>
      <Popup>
        <Flex>
          <CloseButton onClick={onToggle}>X</CloseButton>
        </Flex>
        <ImageHolder>
          <StyledImage src={src} />
        </ImageHolder>
      </Popup>
    </PopupContainer>
  )
}