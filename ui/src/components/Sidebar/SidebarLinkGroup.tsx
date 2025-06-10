import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => React.ReactNode;
  activeCondition: boolean;
}

const SidebarLinkGroup: React.FC<SidebarLinkGroupProps> = ({
  children,
  activeCondition,
}) => {
  const [open, setOpen] = React.useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <div>{children(handleClick, open)}</div>;
};

export default SidebarLinkGroup;
