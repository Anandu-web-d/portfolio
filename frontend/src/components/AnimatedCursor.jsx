import { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let ring = { x: -100, y: -100 };

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const animateRing = () => {
      ring.x += (pos.x - ring.x) * 0.12;
      ring.y += (pos.y - ring.y) * 0.12;
      setRingPos({ x: ring.x, y: ring.y });
      requestAnimationFrame(animateRing);
    };
    animateRing();

    const onMouseEnterLink = () => setIsHovering(true);
    const onMouseLeaveLink = () => setIsHovering(false);

    const links = document.querySelectorAll('a, button, .filter-pill, .social-sidebar-link');
    links.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          transform: isHovering ? 'scale(2.5)' : 'scale(1)',
          background: isHovering ? '#06B6D4' : '#7C3AED',
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: ringPos.x - 16,
          top: ringPos.y - 16,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          borderColor: isHovering ? 'rgba(6, 182, 212, 0.6)' : 'rgba(124, 58, 237, 0.5)',
          marginLeft: isHovering ? '-8px' : '0',
          marginTop: isHovering ? '-8px' : '0',
        }}
      />
    </>
  );
};

export default AnimatedCursor;
