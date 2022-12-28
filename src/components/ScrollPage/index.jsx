import * as C from "./style";
import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ScrollPage = () => {
  const MIN_HEIGHT_PAGE_TO_SHOW_SCROLL = 600;
  const [pageYPosition, setPageYPosition] = useState(0);
  const showScroll = pageYPosition > MIN_HEIGHT_PAGE_TO_SHOW_SCROLL;

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }
  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("scroll", getPageYAfterScroll);

  return (
    <C.Container onClick={goToTop} showScroll={showScroll}>
      <AiOutlineArrowUp size={24} />
    </C.Container>
  );
};
