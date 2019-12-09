import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import banner from "../assets/banner.jpg";
import logo from "../assets/logo.jpg";
import nav1 from "../assets/nav1.jpg";
import nav2 from "../assets/nav2.jpg";
import nav3 from "../assets/nav3.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* -------------- GLOBAL STYLES ------------------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
const GlobalStyle = createGlobalStyle`
html{
  margin:0;
  padding:0;
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  }

p{
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  color: #121c24;
  padding:5px 0;
  margin: 0 8%;
}

h1{
  font-family: 'Lobster', cursive;
  color: #f1f1f1;
  margin:0;
  padding:0;
}

h2{
  font-family: 'Lobster', cursive;
  color: #213d54;
  text-align: center;
  margin: auto;
  padding:10px;
  padding-bottom: 50px;
}

h3{
  font-family: 'Lobster', cursive;
  color: #213d54;
  margin-top: 100px;
  padding: 0 25px;
  margin: 0 8%;
  border-left: 2px solid #121c24;
}

h4{
  font-family: 'Lobster', cursive;
  color: #f1f1f1;
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
  @media only screen and (min-width : 320px) and (max-width : 767px) {
    p{
      font-size: 0.8em;
    }

    h1{
      font-size: 2.7em;
    }
    
    h2{
      font-size: 2.2em;
    }
    
    h3{
      font-size: 1.7em;
    }
    
    h4{
      font-size: 1.5em;      
    }
  }

  /* iPads (portrait and landscape) ----------- */
  @media only screen and (min-width : 768px) and (max-width : 1223px) {
    p{
      font-size: 1em;
    }

    h1{
      font-size: 3.1em;
    }
    
    h2{
      font-size: 2.6em;
    }
    
    h3{
      font-size: 2.1em;
    }
    
    h4{
      font-size: 1.9em;      
    }
  }
  
  /* Desktops and laptops ----------- */
  @media only screen  and (min-width : 1224px) {
    p{
      font-size: 1.2em;
    }

    h1{
      font-size: 3.4em;
    }
    
    h2{
      font-size: 2.9em;
    }
    
    h3{
      font-size: 2.4em;
    }
    
    h4{
      font-size: 2.2em;      
    }
  }

  /* Large screens ----------- */
  @media only screen  and (min-width : 1824px) {
    p{
      font-size: 1.6em;
      padding: 10px 25px;
      margin: 0 12%;
    }

    h1{
      font-size: 3.7em;
    }
    
    h2{
      font-size: 3.2em;
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
const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #121c24;
  z-index: 100;
  position: fixed;
  box-shadow: #192530 2px 2px 5px;
`;

/* ------------------------------------------------ */
/* ------------ HEADER LOGO STYLE ----------------- */
/* ------------------------------------------------ */
const Logo = styled.div`
  height: 60px;
  margin: auto 0;
  padding-left: 10px;
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 2px solid #192530;
  transition: 0.2s;
  animation: fadein 0.3s;

  img {
    margin: auto 0;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid #192530;
    background-color: #111921;
  }

  h2 {
    font-size: 2em;
    color: #f1f1f1;
    text-shadow: 1px 1px 5px #111921;
    margin: auto 0;
    padding-left: 5px;
    border-bottom: none;
  }
`;

/* ------------------------------------------------ */
/* ----------- HEADER IMAGE STYLE ----------------- */
/* ------------------------------------------------ */
const Image = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  box-shadow: #192530 0px 2px 5px;
`;

/* ------------------------------------------------ */
/* ------------ HEADER HEADLINE STYLE ------------- */
/* ------------------------------------------------ */
const Headline = styled.div`
  text-align: center;
  margin: auto;

  h1 {
    text-shadow: 1px 1px 10px #121c24;
  }
`;

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* ------------- NAVIGATION STYLES ---------------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

/* ------------------------------------------------ */
/* --------------- NAV LINK STYLE ----------------- */
/* ------------------------------------------------ */
const Link = styled.div`
  padding: 20px;
  width: calc(33% - 142px);
  min-width: 300px;
  margin: 25px 50px;
  background-color: #1f2f3c;
  border: #111921 1px solid;
  box-shadow: #192530 1px 1px 10px;

  :hover {
    background: #213d54;
    border: 1px solid #192530;
  }

  :hover h1 {
    text-decoration: #f1f1f1 underline;
  }
  a {
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    padding-bottom: 10px;
  }

  h1 {
    font-size: 2.5em;
    text-shadow: 2px 2px 2px #3f5e78;
    padding: 10px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid #121c24;
    background-color: #121c24;
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
  margin: 0;
  padding: 0;

  img {
    width: calc(30% - 2px);
    margin: 1.66%;
    box-shadow: #192530 2px 2px 5px;
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

  h1 {
    color: #213d54;
    margin-top: 100px;
    padding: 0 25px;
    margin: 10px 8%;
    margin-top: 50px;
    border-left: 2px solid #121c24;
  }

  img {
    width: calc(84% - 2px);
    margin: 0 8%;
    box-shadow: #192530 1px 1px 5px;
  }
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    h1 {
      font-size: 1.9em;
    }
  }

  /* iPads (portrait and landscape) ----------- */
  @media only screen and (min-width: 768px) and (max-width: 1223px) {
    h1 {
      font-size: 2.3em;
    }
  }

  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    h1 {
      font-size: 2.6em;
    }
  }

  /* Large screens ----------- */
  @media only screen and (min-width: 1824px) {
    h1 {
      font-size: 2.9em;
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
    font-weight: 300;
    font-size: 1.5rem;
    color: #f1f1f1;
    width: 40%;
    margin: 5px 10%;
    padding: 5px 25px;
    background-color: #1f2f3c;
    transition: 0.3s;
    animation: fadein 0.3s;
    border: #111921 1px solid;
    box-shadow: #192530 1px 1px 5px;
  }

  a:hover {
    background: #213d54;
    border: 1px solid #192530;
    color: #f1f1f1;
    text-decoration: underline;
  }
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
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
  @media only screen and (min-width: 768px) and (max-width: 1223px) {
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
  @media only screen and (min-width: 1224px) {
    a {
      font-size: 1.2em;
    }
  }

  /* Large screens ----------- */
  @media only screen and (min-width: 1824px) {
    a {
      font-size: 1.6em;
    }
  }
`;

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* ----------- CONTACT ME WRAPPER STYLE ----------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;

  h3 {
    margin-bottom: 25px;
  }
`;

/* ------------------------------------------------ */
/* ------------ SOCIAL LINKS STYLE ---------------- */
/* ------------------------------------------------ */
const Socials = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;

  a {
    font-family: "Oswald", sans-serif;
    font-weight: 300;
    color: #f1f1f1;
    width: 40%;
    margin: 5px 10%;
    padding: 5px 25px;
    background-color: #1f2f3c;
    transition: 0.3s;
    animation: fadein 0.3s;
    border: #111921 1px solid;
    box-shadow: #192530 1px 1px 5px;
  }

  a:hover {
    background: #213d54;
    border: 1px solid #192530;
    color: #f1f1f1;
    text-decoration: underline;
  }

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
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
  @media only screen and (min-width: 768px) and (max-width: 1223px) {
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
  @media only screen and (min-width: 1224px) {
    a {
      font-size: 1.2em;
    }
  }

  /* Large screens ----------- */
  @media only screen and (min-width: 1824px) {
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
  height: 60px;
  background-color: #121c24;
  box-shadow: #192530 2px 0px 5px;

  border-top: 2px solid #192530;

  p {
    font-family: "Oswald", sans-serif;
    color: #f1f1f1;
    text-shadow: 2px 2px #121c24;
    text-align: center;
    margin: auto;
    padding: 0;
  }
`;

export {
  GlobalStyle,
  HeaderWrapper,
  Logo,
  Image,
  Headline,
  Nav,
  Link,
  TextWrapper,
  ExampleWrapper,
  Examples,
  Projects,
  AboutWrapper,
  InfoLinks,
  ContactWrapper,
  Socials,
  FooterWrapper,
  logo,
  nav1,
  nav2,
  nav3,
  image1,
  image2,
  image3,
  project1,
  project2
};
