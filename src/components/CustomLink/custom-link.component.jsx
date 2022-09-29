import { LinkBlue, LinkDark, LinkLight } from "./custom-link.styles";

const getLinkStyle = (type) =>
  ({
    light: LinkLight,
    dark: LinkDark,
    blue: LinkBlue,
  }[type]);

const CustomLink = ({ type, children, to, ...otherProps }) => {
  const StyledLink = getLinkStyle(type);
  return (
    <StyledLink href={to} {...otherProps}>
      {children}
    </StyledLink>
  );
};

export default CustomLink;
