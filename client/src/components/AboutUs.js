import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import aboutus from "../IMGs/aboutus.png";

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
  margin-top: 50px;

  h2 {
    font-weight: 400;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    max-width: 150px;
    margin-bottom: 20px;
    margin-left: 20px;
  }

  p {
    max-width: 500px;
    margin-left: 20px;
  }
`;

const Box = styled.div`
display: flex;
align-items: center;

i{
  scale: 5;
  margin-left: 120px;
  margin-right: 40px;
  transition: 400ms;
  cursor: pointer;

  &:hover{
    transform: translateX(20%);
  }
}
`
const Image = styled.img`
max-height: 45em;
margin-right: 4em;
`
const Title = styled.p`
font-size: 1.7rem;
margin-bottom: 0.5em;
`
const Subtitle = styled.p`
font-size: 1.5rem;
margin-bottom: 0.5em;
`
const Para = styled.p`
margin-bottom: 1em;
`
//clicking on the arrow, it will navigate to the /about page that will display cool animation then clickable icons
const AboutUs = () => {

  const navigate = useNavigate()
  const handleClick = () =>{

    navigate("/about")
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Container>
      
        
      <Image src={aboutus}/>
      <div>
      <Title>ABOUT US</Title>
      <Box>
        <div>
        <p>Welcome to GadgetGo!</p>
        
<Subtitle>Our Story:</Subtitle>
<Para>GadgetGo was founded with the vision of revolutionizing the way people shop online. With the rapid growth of e-commerce, we recognized the need to create a platform that offers a wide range of high-quality products, exceptional customer service, and innovative features that enhance the overall shopping experience.</Para>

<Subtitle>Our Mission:</Subtitle>
<Para>Our mission is to connect customers with their desired products in a simple, secure, and efficient manner. We strive to offer a diverse selection of products, ranging from everyday essentials to unique and specialized items, catering to different interests and lifestyles. We aim to be your go-to destination for all your shopping needs.</Para>

<Subtitle>Product Quality:</Subtitle>
<Para>We are committed to providing only the best quality products to our customers. Our team works tirelessly to curate a collection of products from reputable brands and trusted suppliers. We meticulously evaluate each product to ensure it meets our stringent quality standards, giving you confidence in your purchase.</Para>

<p>Happy Shopping!</p>
<p>The GadgetGo Team</p>
</div>
        <i onClick={handleClick} className="fa-solid fa-arrow-right"></i>
      </Box>
      </div>
      
    </Container>
  );
};



export default AboutUs;
