import { useState } from "react";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import styled from "styled-components";
export default function HambergerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <HamburgerContainer>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </HamburgerContainer>
  );
}

const HamburgerContainer = styled.div`
  width: 100%;
`;
