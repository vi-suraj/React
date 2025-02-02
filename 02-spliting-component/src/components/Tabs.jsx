import { Children } from "react";

export default function Tabs({ children, button, ButtonContainer = "menu" }) {
  // const ButtonContainer = buttonContainer;

  return (
    <>
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  );
}
