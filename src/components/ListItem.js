import * as React from 'react';
import { DropdownListItem } from './styles';

export function ListItem({ isSelected, onChange, title }) {

  const onSelect = React.useCallback(() => onChange(title), [onChange, title]);

  return (
    <DropdownListItem isSelected={isSelected} onClick={onSelect}>{title}</DropdownListItem>
  );
}