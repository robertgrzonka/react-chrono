import styled from '@emotion/styled';

const ModeWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 5rem;
  /* border: 1px solid #e5e5e5; */
  border-radius: 10px;
  padding: 1.5rem 0;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const Horizontal = styled(ModeWrapper)``;

export const Vertical = styled(ModeWrapper)``;

export const Wrapper = styled.div<{ show: boolean, type?: string }>`
  display: ${p => p.show ? "block" : "none"};
  flex-direction: column;
  margin: 0 auto;
  width: ${p => {
    if (p.type === "tablet") {
      return "100%";
    } else if (p.type === "big-screen") {
      return "1400px"
    } else if (p.type === "desktop") {
      return "95%"
    } else if (p.type === "mobile") {
      return "100%";
    } else {
      return "100%";
    }
  }};
  background: #fff;
  padding:${p => p.type !== "tablet" ? "0 1rem" : ""};
  filter: drop-shadow(0 0 60px rgba(0,0,0,0.1))
`;

export const ComponentContainer = styled.div<{ type?: string }>`
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 7rem;
  padding: 1rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column; 

  ${p => {
    switch (p.type) {
      case "desktop":
        return `height: 400px; width: 90%;`
      case "big-screen":
        return `height: 400px; width: 90%;`
      case "tablet":
        return `height: 380px; width: 100%;`
      default:
        break;
    }
  }}
`;

export const ComponentContainerTree = styled.div<{ type?: string }>`
  border-radius: 4px;
  height: 800px;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem 0;

  ${p => {
    switch (p.type) {
      case "desktop":
        return `height: 700px; width: 90%;`
      case "big-screen":
        return `height: 850px; width: 90%;`
      case "tablet":
        return `height: 850px; width: 100%;`
      case "mobile":
        return `height: 650px; width: 100%;`
      default:
        break;
    }
  }}
`;

export const Header = styled.header`
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const LogoImage = styled.img``;

export const Github = styled.img`
  margin-left: 1rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  flex-wrap: wrap;
`;

export const URL = styled.a`
  margin: 0 1rem;
  text-decoration: none;
`;

export const DescriptionContent = styled.p`
  font-family: 'Open Sans', monospace;
  font-weight: 400;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 2rem;  
  font-size: 1rem;
`;

export const DescriptionHeader = styled.h3`
  font-family: 'Open Sans', monospace;
  font-weight: 600;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

export const Description = styled.div``;

export const FeatureSetHeader = styled.header`
  width: 95%;
  margin: 0 auto;
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
`;

export const FeatureSet = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 95%;
  margin-top: 1.5rem;
`;

export const Feature = styled.li`
  font-family: 'Open Sans', monospace;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;

  .icon {
    font-size: 1.5rem;
    margin-right: 0.25rem;
  }
`;

export const GithubLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SandBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: auto;
`;