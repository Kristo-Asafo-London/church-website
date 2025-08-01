import styled from 'styled-components';

const MusicContainer = styled.div`
  width: 100%;
  height: 100vh;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const Music = () => {
  return (
    <MusicContainer>
      <iframe 
        src="https://kotoko-band.netlify.app/" 
        title="Kotoko Band Website"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </MusicContainer>
  );
};