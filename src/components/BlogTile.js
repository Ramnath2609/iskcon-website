import { useCallback, useState } from "react";
import styled from "styled-components";
import { Dropdown } from "./Dropdown";

const Title = styled.p`
  font-family: Roboto;
  font-size: 34px;
  font-weight: 700;
  line-height: 47.6px;
  text-align: left;
  color: #844531;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

const Description = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  margin: 0;
  color: #9C6958;
  white-space: pre-wrap;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 26px;
  }
`;

const ReadMoreButton = styled.button`
background: none;
  border: 1px solid #EF8359;
  color: #EF8359;
  padding: 10px 24px;
  border-radius: 8px;
  width: 150px;
  cursor: pointer;
  @media (max-width: 400px) {
    padding: 6px 14px;
    width: 150px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  padding: 30px;
  width: 50%;
  grid-gap: 30px;
  box-sizing: border-box;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const IFrame = styled.iframe`
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
`;

export function BlogTile({ data }) {
  const [showFullText, shouldShowFullText] = useState(false);
  const [lang, setLang] = useState(data.engTitle ? "english" : "hindi")

  const onReadMore = useCallback(() => {
    shouldShowFullText(!showFullText);
  }, [showFullText]);

  const onValueChange = useCallback((val) => {
    setLang(val.toLowerCase())
  }, []);

  return (
    <Grid>
      <TitleWrapper>
        <Title>{lang === "english" ? data.engTitle : data.hindiTitle}</Title>
        {(data.engTitle && data.hindiTitle) && <Dropdown onValueChange={onValueChange} defaultValue={"English"} options={[{
          id: 1,
          title: "English"
        },
        {
          id: 2,
          title: "Hindi"
        }]} />}
      </TitleWrapper>
      <Description>{lang === "english" ? data.engDescription : data.hindiDescription}</Description>
      {showFullText && (
        <>
          <Description>{lang === "english" ? data.engContent : data.hindiContent}</Description>
          {data.youtubeLink && (
            <IFrame width="560" height="315" src={data.youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></IFrame>
          )}
        </>
      )}
      <ReadMoreButton onClick={onReadMore}>{showFullText ? "Read less" : "Read more"}</ReadMoreButton>
    </Grid>
  );
}