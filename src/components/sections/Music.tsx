import styled from 'styled-components';
import { useEffect } from 'react';

const MusicContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  @media (max-width: 768px) {
    height: 120vh; /* Adjust this value as needed for mobile */
  }
`;

export const Music = () => {
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const iframe = document.querySelector('iframe');
      if (iframe && iframe.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <MusicContainer>
      <iframe 
        src="https://kotoko-band.netlify.app/" 
        title="Kotoko Band Website"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        scrolling="no"
      />
    </MusicContainer>
  );
};