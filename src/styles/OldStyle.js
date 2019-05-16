// APP //

// export const Wrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   background: #000;
//   margin: 0;
//   padding: 0;

//   p {
//     font-family: "Oswald", sans-serif;
//     font-weight: 300;
//     font-size: 1.6em;
//     color: #121c24;
//     padding: 0 25px;
//     margin-left: 10%;
//     margin-right: 10%;
//   }

//   h1 {
//     font-family: "Lobster", cursive;
//     font-size: 5em;
//     color: #f1f1f1;
//     text-shadow: 1px 1px 10px #121c24;
//     margin: 0;
//     padding: 0;
//   }

//   h2 {
//     font-family: "Lobster", cursive;
//     color: #213d54;
//     text-shadow: 2px 2px 2px #3f5e78;
//     text-align: center;
//     margin: auto;
//     font-size: 4em;
//     padding: 10px;
//   }

//   h3 {
//     font-family: "Lobster", cursive;
//     font-size: 3em;
//     color: #213d54;
//     text-shadow: 1px 1px 2px #3f5e78;
//     margin-top: 100px;
//     padding: 0 25px;
//     margin-left: 10%;
//     margin-right: 10%;
//     border-left: 2px solid #121c24;
//   }

//   h4 {
//     font-family: "Lobster", cursive;
//     font-size: 2em;
//     color: #213d54;
//     text-shadow: 2px 2px 2px #3f5e78;
//     text-align: center;
//     margin: auto;
//     padding: 10px;
//   }

//   a {
//     cursor: pointer;
//     text-decoration: none;
//     display: flex;
//   }

//   img {
//     width: calc(30% - 2px);
//     float: left;
//     margin: 1.66%;
//     border: 1px solid #192530;
//   }

//   ul {
//     list-style-type: none;
//   }

//   hr {
//     width: 80%;
//     border: 0;
//     height: 1px;
//     background-image: linear-gradient(
//       to right,
//       rgba(0, 0, 0, 0),
//       rgba(0, 0, 0, 0.75),
//       rgba(0, 0, 0, 0)
//     );
//   }
// `;

//---------------------------------//

// HEADER //

// export const Container = styled.div`
//   width: 100%;
//   height: 76px;
//   background-color: #121c24;
//   z-index: 100;
//   position: fixed;
//   border-bottom: 2px solid #192530;
// `;

// export const Logo = styled.div`
//   height: 76px;
//   margin: auto 0;
//   padding-left: 10px;
//   display: flex;
//   border-bottom: 2px solid #192530;
//   transition: 0.2s;
//   animation: fadein 0.3s;

//   img {
//     margin: auto 0;
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     border: 1px solid #192530;
//     background-color: #111921;
//   }

//   h2 {
//     font-family: "Lobster", cursive;
//     font-size: 2.5em;
//     color: #f1f1f1;
//     text-shadow: 1px 1px 5px #111921;
//     margin: auto 0;
//     padding-left: 5px;
//     border-bottom: none;
//   }
// `;

//-------------------------------------//

// BANNER //

// import img from "../../assets/banner.jpg";

// export const Image = styled.div`
//   height: 100vh;
//   width: 100%;
//   background-image: url(${img});
//   background-size: cover;
//   background-position: center;
//   overflow-x: hidden;
//   border-bottom: 2px solid #192530;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
// `;

// export const Headline = styled.div`
//   text-align: center;
//   margin: auto;

//   h1 {
//     font-size: 5em;
//     margin: 0;
//     padding: 0;
//   }
// `;

//-----------------------------------------//

// NAVIGATION //

// export const Nav = styled.div`
//   background: #f1f1f1;
//   display: flex;
//   width: 100%;
// `;

// export const Link = styled.div`
//   padding: 20px;
//   width: 500px;
//   margin: 25px 50px;
//   background-color: #1f2f3c;
//   transition: 0.3s;
//   animation: fadein 0.3s;
//   border: #111921 1px solid;
//   box-shadow: #192530 1px 1px 10px;

//   :hover {
//     background: #213d54;
//     border: 1px solid #192530;
//   }

//   :hover h1 {
//     text-decoration: #f1f1f1 underline;
//   }
//   a {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     text-decoration: none;
//     padding-bottom: 10px;
//   }

//   h1 {
//     font-family: "Lobster", cursive;
//     font-size: 2.5em;
//     color: #f1f1f1;
//     text-shadow: 2px 2px 2px #3f5e78;
//     text-align: center;
//     margin: auto;
//     padding: 10px;
//   }

//   img {
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     border: 1px solid #121c24;
//     background-color: #121c24;
//   }

//   hr {
//     width: 80%;
//     border: 0;
//     height: 1px;
//     background-image: linear-gradient(
//       to right,
//       rgba(0, 0, 0, 0),
//       rgba(0, 0, 0, 0.75),
//       rgba(0, 0, 0, 0)
//     );
//   }
// `;

//------------------------------------------------//

// TEXT //

// export const Container = styled.div`
//   flex-wrap: wrap;
//   padding-top: 25px;
//   padding-bottom: 50px;

//   h1 {
//     font-family: "Lobster", cursive;
//     color: #213d54;
//     text-shadow: 2px 2px 2px #3f5e78;
//     text-align: center;
//     margin: auto;
//     font-size: 5rem;
//     padding: 10px;
//   }

//   p {
//     font-family: "Oswald", sans-serif;
//     font-weight: 300;
//     font-size: 1.6rem;
//     color: #121c24;
//     padding: 0 25px;
//     margin-left: 10%;
//     margin-right: 10%;
//   }
// `;

//---------------------------------------------------//

// EXAMPLE //

// export const Container = styled.div`
//   background: #f1f1f1;
//   display: flex;
//   flex-wrap: wrap;
//   width: 100%;
// `;

// export const Examples = styled.div`
//   width: 100%;
//   margin: 0;
//   padding: 0;

//   img {
//     width: calc(30% - 2px);
//     float: left;
//     margin: 1.66%;
//     border: 1px solid #192530;
//   }
// `;

//-------------------------------------------------------------//

// GALLERY //

// export const Projects = styled.div`
//   width: 100%;
//   padding-bottom: 50px;

//   p {
//     font-family: "Oswald", sans-serif;
//     font-weight: 300;
//     font-size: 1.6em;
//     color: #121c24;
//     padding: 0 25px;
//     margin-left: 10%;
//     margin-right: 10%;
//   }

//   h1 {
//     font-family: "Lobster", cursive;
//     color: #213d54;
//     text-shadow: 2px 2px 2px #3f5e78;
//     text-align: center;
//     margin: auto;
//     font-size: 5em;
//     padding: 10px;
//   }

//   h2 {
//     font-family: "Lobster", cursive;
//     font-size: 3.5em;
//     color: #213d54;
//     text-shadow: 1px 1px 2px #3f5e78;
//     margin-top: 100px;
//     padding: 0 25px;
//     margin: 10px;
//     margin-left: 10%;
//     border-left: 2px solid #121c24;
//   }

//   img {
//     width: calc(80% - 2px);
//     margin: 0 10%;
//     float: left;
//     border: 1px solid #192530;
//   }
// `;

//-------------------------------------------------------------//

// ABOUT //

// export const Info = styled.div`
//   width: 100%;
//   padding-bottom: 50px;

//   p {
//     font-family: "Oswald", sans-serif;
//     font-weight: 300;
//     font-size: 1.6em;
//     color: #121c24;
//     padding: 0 25px;
//     margin: 10px;
//     margin-left: 10%;
//     margin-right: 10%;
//   }

//   h1 {
//     font-family: "Lobster", cursive;
//     color: #213d54;
//     text-shadow: 2px 2px 2px #3f5e78;
//     text-align: center;
//     margin: auto;
//     font-size: 5rem;
//     padding: 10px;
//   }

//   h2 {
//     font-family: "Lobster", cursive;
//     font-size: 3.5rem;
//     color: #213d54;
//     text-shadow: 1px 1px 2px #3f5e78;
//     margin-top: 100px;
//     padding: 0 25px;
//     margin-left: 10%;
//     margin-right: 10%;
//     border-left: 2px solid #121c24;
//   }
// `;

// export const Links = styled.div`
//   a {
//     display: flex;
//     font-family: "Oswald", sans-serif;
//     font-weight: 300;
//     font-size: 1.8rem;
//     color: #f1f1f1;
//     width: 40%;
//     margin: 5px 10%;
//     padding: 5px 25px;
//     background-color: #1f2f3c;
//     transition: 0.3s;
//     animation: fadein 0.3s;
//     border: #111921 1px solid;
//     box-shadow: #192530 1px 1px 10px;
//   }

//   a:hover {
//     background: #213d54;
//     border: 1px solid #192530;
//     color: #f1f1f1;
//     text-decoration: underline;
//   }
// `;

//-------------------------------------------------------------//

// CONTACT //

// export const Container = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 100px;

//   p {
//     font-family: "Oswald", sans-serif;
//     font-weight: 300;
//     font-size: 1em;
//     color: #121c24;
//     padding: 0 25px;
//     margin-left: 10%;
//     margin-right: 10%;
//   }

//   h1 {
//     font-family: "Lobster", cursive;
//     color: #213d54;
//     text-shadow: 2px 2px 2px #3f5e78;
//     text-align: center;
//     margin: auto;
//     font-size: 5em;
//     padding: 10px;
//   }

//   h2 {
//     font-family: "Lobster", cursive;
//     font-size: 3.5em;
//     color: #213d54;
//     text-shadow: 1px 1px 2px #121c24;
//     margin-top: 100px;
//     padding: 0 25px;
//     margin-left: 10%;
//     margin-right: 10%;
//     border-left: 2px solid #121c24;
//   }
// `;

// export const Socials = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 100px;

//   a {
//     width: 40%;
//     margin: 10px 10%;
//     border: #111921 1px solid;
//     box-shadow: #192530 1px 1px 10px;
//     background-color: #1f2f3c;
//     transition: 0.3s;
//     animation: fadein 0.3s;
//     text-decoration: none;
//   }

//   a:hover {
//     background: #213d54;
//     border: 1px solid #192530;
//   }

//   h1 {
//     font-family: "Oswald", sans-serif;
//     font-weight: 300;
//     font-size: 2em;
//     color: #f1f1f1;
//   }

//   h1:hover {
//     text-decoration: #f1f1f1 underline;
//   }
// `;

//-------------------------------------------------------------//

// FOOTER //

// export const Container = styled.div`
//   width: 100%;
//   height: 76px;
//   background-color: #121c24;
//   border-top: 2px solid #192530;

//   p {
//     font-family: "Oswald", sans-serif;
//     font-size: 1.6em;
//     color: #f1f1f1;
//     text-shadow: 2px 2px #121c24;
//     text-align: center;
//     margin: auto;
//     padding-top: 16px;
//   }
// `;

//-------------------------------------------------------------//
