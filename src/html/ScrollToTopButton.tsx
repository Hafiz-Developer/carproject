import  { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styled from 'styled-components';

const ScrollToTopButtonWrapper = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  right: 0;
  margin-right: 4rem;
  bottom: 20px;
  border: 2px solid #FF0000;
  cursor: pointer;
`;

const UpArrowIcon = styled(AiOutlineArrowUp)`
  color: #FF0000;
  position: relative;
  font-size: 1.5rem;
  top: 1.5rem;
  left: 1.7rem;
`;

function ScrollToTopButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollToTopButtonWrapper isVisible={isButtonVisible} onClick={scrollToTop}>
      <UpArrowIcon />
    </ScrollToTopButtonWrapper>
  );
}

export default ScrollToTopButton;
