import * as React from 'react';
import { DropdownHeader, DropdownList, DropdownWrapper } from './styles';
import { ListItem } from './ListItem';
import Down from "../assets/CaretDown.svg";

export function Dropdown({ options, onValueChange, defaultValue }) {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const dropdownRef = React.useRef(null);
  const [headerTitle, setHeaderTitle] = React.useState(defaultValue ?? 'Home');
  const [isListOpen, setIsListOpen] = React.useState(false);
  const toggleList = React.useCallback(() => setIsListOpen(!isListOpen), [isListOpen]);

  const onChange = React.useCallback((title) => {
    setHeaderTitle(title);
    setSelectedItem(title);
    toggleList();
    if (onValueChange) {
      onValueChange(title);
    }
  }, [toggleList]);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownHeader onClick={toggleList}>
        <span>{headerTitle}</span>
        {isListOpen
          ? <img src={Down} alt='down-arrow' />
          : <img src={Down} alt='down-arrow' />}
      </DropdownHeader>
      {isListOpen && (
        <DropdownList>
          {options.map(option => (
            <ListItem isSelected={selectedItem === option.title} key={option.id} onChange={onChange} title={option.title} />
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}