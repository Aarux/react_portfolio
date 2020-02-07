import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* -------------- IMAGE IMPORTS ------------------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
import banner1080p from "../assets/banner1080p.jpg";
import logo from "../assets/logo.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* -------------- GLOBAL STYLES ------------------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
const GlobalStyle = createGlobalStyle`
/* Color, Border, Box-Shadow and Text-Shadow variables. */
:root{
  --color-lightMainBlue: #213D54;
  --color-darkMainBlue: #1F2F3C;
  --color-darkBlueGrey: #192530;
  --color-lightDarkGrey: #121C24;
  --color-darkDarkGrey: #111921;
  --color-offWhite: #F1F1F1;
  
  --border-Main: 2px solid #192530;
  --border-lightMain: 1px solid #192530;
  --border-Secondary: 2px solid #121c24;
  --border-lightSecondary: 1px solid #121c24;
  --border-Tertiary: 1px solid #111921;

  --boxShadow-Main: 1px 1px 5px #192530;
  --boxShadow-Secondary: 2px 2px 5px #192530;

  --textShadow-Main: 1px 1px 10px #121c24;
  --textShadow-Secondary: 1px 1px 5px #111921;
}

html{
  margin:0;
  padding:0;
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  }

p{
  font-family: 'Oswald', sans-serif;
  color: var(--color-lightDarkGrey);
  padding:5px 0;
  margin: 0 8%;
}
strong {
    color: var(--color-lightMainBlue);
  }
h1{
  font-family: 'Lobster', cursive;
  color: var(--color-offWhite);
  margin:0;
  padding:0;
}

.h1{
  font-family: 'Lobster', cursive;
  color: var(--color-lightMainBlue);
  text-align: center;
  margin: auto;
  padding:10px;
  padding-bottom: 25px;
}

h2{
  font-family: 'Lobster', cursive;
  color: var(--color-lightMainBlue);
  margin: auto;
  padding:10px;
  padding-bottom: 50px;
}

h3{
  font-family: 'Lobster', cursive;
  color: var(--color-lightMainBlue);
  margin-top: 100px;
  padding: 0 25px;
  margin: 0 8%;
  border-left: var(--border-Secondary);
}

h4{
  font-family: 'Lobster', cursive;
  color: var(--color-offWhite);
  text-align: center;
  margin: auto;
  padding: 10px;
}

a{
  cursor: pointer;
  text-decoration: none;
  display: flex;
}

ul{
  list-style-type: none;
}

hr{
  width: 80%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
  /* ------------------------------------------------ */
  /* ------------------------------------------------ */
  /* ------------ GLOBAL MEDIA QUERY ---------------- */
  /* ------------------------------------------------ */
  /* ------------------------------------------------ */
  /* Smartphones (portrait and landscape) ----------- */
  @media  screen and (min-width : 320px){
    p{
      font-size: 0.8em;
    }

    h1{
      font-size: 2.2em;
    }
    
    .h1{
      font-size: 1.9em;
    }
    
    h2{
      font-size: 1.7em;
    }
    
    h3{
      font-size: 1.2em;
    }
    
    h4{
      font-size: 1em;      
    }
  }
  /* Smartphones (landscape) ----------- */
  @media  screen and (min-width : 361px){
    p{
      font-size: 0.8em;
    }

    h1{
      font-size: 2.4em;
    }
    
    .h1{
      font-size: 2.1em;
    }

    h2{
      font-size: 1.9em;
    }
    
    h3{
      font-size: 1.7em;
    }
    
    h4{
      font-size: 1.5em;      
    }
  }

  /* iPads (portrait and landscape) ----------- */
  @media  screen and (min-width : 768px){
    p{
      font-size: 1em;
    }

    h1{
      font-size: 2.8em;
    }

    .h1{
      font-size: 2.5em;
    }
    
    h2{
      font-size: 2.1em;
    }
    
    h3{
      font-size: 2.1em;
    }
    
    h4{
      font-size: 1.9em;      
    }
  }
  
  /* Desktops and laptops ----------- */
  @media  screen  and (min-width : 1224px) {
    p{
      font-size: 1.2em;
    }

    h1{
      font-size: 3.1em;
    }

    .h1{
      font-size: 2.8em;
    }
    
    h2{
      font-size: 2.3em;
    }
    
    h3{
      font-size: 2.4em;
    }
    
    h4{
      font-size: 2.2em;      
    }
  }

  /* Large screens ----------- */
  @media  screen  and (min-width : 1824px) {
    p{
      font-size: 1.6em;
      padding: 10px 25px;
      margin: 0 12%;
    }

    h1{
      font-size: 3.5em;
    }
    
    .h1{
      font-size: 3.2em;
    }
    
    h2{
      font-size: 3em;
    }
    
    h3{
      font-size: 2.7em;
    }
    
    h4{
      font-size: 2.5em;      
    }

  }
`;

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* ------------ HEADER WRAPPER STYLE -------------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--color-lightDarkGrey);
  z-index: 100;
  position: fixed;
  box-shadow: var(--boxShadow-Secondary);
`;

/* ------------------------------------------------ */
/* ------------ HEADER LOGO STYLE ----------------- */
/* ------------------------------------------------ */
const Logo = styled.div`
  height: 60px;
  padding-left: 10px;
  display: flex;
  flex-flow: row nowrap;
  border-bottom: var(--border-Main);
  transition: 0.2s;
  animation: fadein 0.3s;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    align-items: center;
    border: var(--border-lightMain);
    background-color: var(--color-darkDarkGrey);
  }

  h2 {
    margin: 0;
    padding: 0;
    color: var(--color-offWhite);
    text-shadow: var(--textShadow-Secondary);
    margin-left: 0;
    padding-left: 5px;
    border-bottom: none;
  }
`;

/* ------------------------------------------------ */
/* ----------- HEADER IMAGE STYLE ----------------- */
/* ------------------------------------------------ */
const Banner = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${banner1080p});
  background-size: cover;
  background-position: center;
  background-color: var(--color-lightDarkGrey);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  box-shadow: 0px 2px 5px var(--color-darkBlueGrey);
`;

/* ------------------------------------------------ */
/* ------------ HEADER HEADLINE STYLE ------------- */
/* ------------------------------------------------ */
const Headline = styled.div`
  text-align: center;
  margin: auto;

  h1 {
    text-shadow: var(--textShadow-Main);
  }
`;

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* ------------ TEXT WRAPPER STYLE ---------------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 25px;
  padding-bottom: 50px;
  text-align: center;
`;

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* ------------ EXAMPLE WRAPPER STYLE ------------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
const ExampleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

/* ------------------------------------------------ */
/* ------------ EXAMPLE IMG STYLE ----------------- */
/* ------------------------------------------------ */
const Examples = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;

  img {
    width: calc(30% - 2px);
    margin: 1.66%;
    box-shadow: var(--boxShadow-Secondary);
  }
`;

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* ------------ PROJECT WRAPPER STYLE ------------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
const Projects = styled.div`
  width: 100%;
  padding-bottom: 50px;

  h2 {
    color: var(--color-lightMainBlue);
    margin-top: 100px;
    padding: 0 25px;
    margin: 10px 8%;
    margin-top: 50px;
    border-left: var(--border-Secondary);
  }

  img {
    width: calc(84% - 2px);
    margin: 0 8%;
    box-shadow: var(--boxShadow-Main);
  }

  a {
    width: 33%;
    margin: 0 8%;
    font-family: "Oswald", sans-serif;
    color: var(--color-offWhite);
    background-color: var(--color-darkMainBlue);
    transition: 0.3s;
    animation: fadein 0.3s;
    border: var(--border-Tertiary);
    box-shadow: var(--boxShadow-Main);
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
  }
  a:hover {
    background: var(--color-lightMainBlue);
    border: var(--border-lightMain);
    color: var(--color-offWhite);
    text-decoration: underline;
  }
  /* Smartphones (portrait and landscape) ----------- */
  @media screen and (min-width: 320px) {
    a {
      font-size: 0.6em;
    }
  }

  @media screen and (min-width: 480px) {
    a {
      font-size: 0.8em;
    }
  }

  /* iPads (portrait and landscape) ----------- */
  @media screen and (min-width: 768px) {
    a {
      font-size: 1em;
    }
  }

  /* Desktops and laptops ----------- */
  @media screen and (min-width: 1224px) {
    a {
      font-size: 1.2em;
    }
  }

  /* Large screens ----------- */
  @media screen and (min-width: 1824px) {
    a {
      font-size: 1.6em;
    }
  }
`;

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* ----------- ABOUT ME WRAPPER STYLE ------------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
const AboutWrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

/* ------------------------------------------------ */
/* ------------- INFO LINK STYLES ----------------- */
/* ------------------------------------------------ */
const InfoLinks = styled.div`
  a {
    font-family: "Oswald", sans-serif;
    font-size: 1.5em;
    color: var(--color-offWhite);
    width: 40%;
    margin: 5px 10%;
    padding: 5px 25px;
    background-color: var(--color-darkMainBlue);
    transition: 0.3s;
    animation: fadein 0.3s;
    border: var(--border-Tertiary);
    box-shadow: var(--boxShadow-Main);
  }

  a:hover {
    background: var(--color-lightMainBlue);
    border: var(--border-lightMain);
    color: var(--color-offWhite);
    text-decoration: underline;
  }
  /* Smartphones (portrait and landscape) ----------- */
  @media screen and (min-width: 320px) {
    a {
      font-size: 0.8em;
      align-content: center;
      margin: 5px auto;
    }

    p {
      align-content: center;
      margin: 5px auto;
    }
  }

  /* iPads (portrait and landscape) ----------- */
  @media screen and (min-width: 768px) {
    a {
      font-size: 1em;
      align-content: center;
      margin: 5px auto;
    }

    p {
      align-content: center;
      margin: 5px auto;
    }
  }

  /* Desktops and laptops ----------- */
  @media screen and (min-width: 1224px) {
    a {
      font-size: 1.2em;
    }
  }

  /* Large screens ----------- */
  @media screen and (min-width: 1824px) {
    a {
      font-size: 1.6em;
    }
  }
`;

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* ------------ FOOTER WRAPPER STYLE -------------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
const FooterWrapper = styled.div`
  width: 100%;
  background-color: var(--color-lightDarkGrey);
  box-shadow: 2px 0px 5px var(--color-darkBlueGrey);
  border-top: var(--border-Main);
  text-align: center;
  h3 {
    color: var(--color-offWhite);
    text-shadow: var(--textShadow-Main);
    padding: 20px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }

  a {
    width: 33%;
    margin: 0 auto;
    font-family: "Oswald", sans-serif;
    font-size: 1.2em;
    color: var(--color-offWhite);
    background-color: var(--color-darkMainBlue);
    transition: 0.3s;
    animation: fadein 0.3s;
    border: var(--border-Tertiary);
    box-shadow: var(--boxShadow-Main);
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
  }
  a:hover {
    background: var(--color-lightMainBlue);
    border: var(--border-lightMain);
    color: var(--color-offWhite);
    text-decoration: underline;
  }

  @media screen and (min-width: 320px) {
    a {
      font-size: 0.6em;
    }
  }

  @media screen and (min-width: 480px) {
    a {
      font-size: 0.8em;
    }
  }

  /* iPads (portrait and landscape) ----------- */
  @media screen and (min-width: 768px) {
    a {
      font-size: 1em;
    }
  }

  /* Desktops and laptops ----------- */
  @media screen and (min-width: 1224px) {
    a {
      font-size: 1.2em;
    }
  }

  /* Large screens ----------- */
  @media screen and (min-width: 1824px) {
    a {
      font-size: 1.6em;
    }
  }
`;

const Cc = styled.span`
  display: flex;
  justify-content: center;
  font-family: "Oswald", sans-serif;
  padding: 25px 0;
  color: var(--color-offWhite);
  margin: auto;
  /* Smartphones (portrait and landscape) ----------- */
  @media screen and (min-width: 320px) {
    font-size: 0.8em;
  }

  /* iPads (portrait and landscape) ----------- */
  @media screen and (min-width: 768px) {
    font-size: 1em;
  }

  /* Desktops and laptops ----------- */
  @media screen and (min-width: 1224px) {
    font-size: 1.2em;
  }

  /* Large screens ----------- */
  @media screen and (min-width: 1824px) {
    font-size: 1.6em;
  }
`;

const Icon = styled.div`
  font-size: 1.2em;
  display: flex;
  position: fixed;
  padding: 20px;
  right: 0;
  align-items: center;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
const Svg = styled.span`
  margin: 0;
  padding: 0;
  align-items: center;
  margin-left: 10px;
  font-size: 1.2em;
`;

export {
  GlobalStyle,
  Header,
  Logo,
  Banner,
  Headline,
  TextWrapper,
  ExampleWrapper,
  Examples,
  Projects,
  AboutWrapper,
  InfoLinks,
  FooterWrapper,
  Cc,
  logo,
  Icon,
  Svg,
  image1,
  image2,
  image3,
  project1,
  project2,
  project3
};

// const Examples = styled.div`
//   display: inline-flex;
//   justify-content: center;
//   flex: 1 0 calc(20% - 1.66%);
//   flex-wrap: wrap;
//   img {
//     width: 15%;
//     margin: 1.66%;
//     box-shadow: var(--boxShadow-Secondary);
//   }
// `;
