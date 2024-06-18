import { useEffect, useState } from 'react';
import Container from '../Container';
export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [currentScrollY, setCurrentScrollY] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => {
      if (currentScrollY > window.scrollY) {
        //kalo turun gedean windowscrolly
        setShow(true);
      } else if (currentScrollY < window.scrollY) {
        setShow(false);
      }
      setCurrentScrollY(window.scrollY);
    };
    // onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [currentScrollY]);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-16 transition duration-300 z-40 ${
        show ? 'block' : 'hidden'
      } ${
        currentScrollY === 0 ? 'bg-primary' : 'bg-primary/60 backdrop-blur-sm'
      }`}
    >
      <Container className="flex justify-between items-center transition duration-300 z-40 translate-y-3">
        <h1>test</h1>
      </Container>
    </div>
  );
};
