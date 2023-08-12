import { styled } from "styled-components";
import Logo from "../IMGs/full-logo.png"


const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-left:28px ;
padding-bottom: 50px;

img{
    width: 150px;
}

`

const Box = styled.div`
display: flex;

span{
    margin-right: 30px;
}
` 

const Email = styled.a`
all:unset;
cursor: pointer;
color: black;
`

//it displays the logo and the email of the company
const Footer = () => {
    return(
        <Container>
            <img alt="logo" src={Logo}/>
            <Box>
            <span>2022 - 2023</span>
            <Email href="mailto:GadgetGo@gmail.com">GadgetGo@gmail.com</Email>
            </Box>
            
        </Container>
    )
}


export default Footer;