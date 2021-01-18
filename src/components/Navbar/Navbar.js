import styled from "styled-components";
import { themes } from "../../styles/ColorStyles";
import useScrollDirection from "../../hooks/useScrollDirection";
export default function Navbar() {
  const scrollDirection = useScrollDirection();
  console.log(scrollDirection);
  return (
    <StyledNav scrollDirection={scrollDirection}>
      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  height: 84px;
  top: 0;
  z-index: 10;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  background: ${themes.light.secondaryGreen};
  transition: transform 0.3s ease-in-out;
  transform: ${({ scrollDirection }) =>
    scrollDirection === "up" ? "translateY(0)" : "translateY(-100%)"};
  a {
    display: inline-block;
    /* gap: 10px; */
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 0rem 1rem;
    font-weight: bold;
    color: ${themes.light.text2};
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: ${themes.light.text3};
    }
  }
`;
