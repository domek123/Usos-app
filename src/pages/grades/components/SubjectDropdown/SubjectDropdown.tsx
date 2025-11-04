import { Stack, styled, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import { DropdownTable } from "./DropdownTable";
import type { DropdownProps } from "./types";

export const CustomDropdown = ({ name, subjects }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>
      <HeaderContainer onClick={() => setIsOpen((prev) => !prev)}>
        <Typography>{name}</Typography>
        {!isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </HeaderContainer>
      {isOpen && <DropdownTable subjects={subjects} />}
    </>
  );
};

const HeaderContainer = styled(Stack)({
  flexDirection: "row",
  backgroundColor: "#5E50EF",
  padding: "10px",
  color: "white",
  marginTop: "1px",
});
