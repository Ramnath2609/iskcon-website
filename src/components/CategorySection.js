import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
  background-color: #F7EBE7;
  border-radius: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CategoryItem = styled.p`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 26.4px;
  padding-bottom: 14px;
  margin-bottom: 8px;
  text-align: left;
  color: #9C6958;
  border-bottom: ${props => props.isSelected ? '1px solid #9C6958' : 'none'};
  cursor: pointer;
`;

export function Category({ onClick, selectedItem }) {
  return (
    <Wrapper>
      <CategoryItem onClick={() => onClick("Home")} isSelected={selectedItem === "Home"}>Home</CategoryItem>
      <CategoryItem onClick={() => onClick("Altar")} isSelected={selectedItem === "Altar"}>Altar</CategoryItem>
      <CategoryItem onClick={() => onClick("With Prabhupada")} isSelected={selectedItem === "With Prabhupada"}>With Prabhpada</CategoryItem>
      <CategoryItem onClick={() => onClick("Udhampur Deities")} isSelected={selectedItem === "Udhampur Deities"}>Udhampur Deities</CategoryItem>
    </Wrapper>
  )
}