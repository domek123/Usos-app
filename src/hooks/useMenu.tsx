import React, { useState } from "react";

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  return {
    isMenuOpen,
    anchorEl,
    setAnchorEl,
    handleMenuClose,
    handleMenuOpen,
    setIsMenuOpen,
  };
};
