import { Stack, styled, Typography } from "@mui/material";
import { useState } from "react";
import type { CustomDropdownProps } from "./CustomDropdown.types";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { RowBetweenStack } from "@/styles";

export const CustomDropdown = ({
  name,
  children,
  headerChildren,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Stack>
      <HeaderContainer onClick={() => setIsOpen((prev) => !prev)}>
        <RowBetweenStack>
          <Typography>{name}</Typography>
          {!isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </RowBetweenStack>
        {headerChildren}
      </HeaderContainer>
      {isOpen && children}
    </Stack>
  );
};

const HeaderContainer = styled(Stack)({
  flexDirection: "row",
  backgroundColor: "#5E50EF",
  padding: "10px",
  color: "white",
  marginTop: "1px",
  alignItems: "center",
  justifyContent: "space-between",
});
