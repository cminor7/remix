export type NavItem = {
  label: string;
  path?: string;                // Normal link
  children?: NavItem[];         // Dropdown items
  isButton?: boolean;
  onClick?: () => void;
  isToggle?: boolean;
  toggleValue?: boolean;
  onToggle?: (value: boolean) => void;
};


export interface NavBarProps {
  items: NavItem[];
}