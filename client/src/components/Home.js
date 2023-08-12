import {useState , useEffect} from "react"
import { styled } from "styled-components"
import MovingBanner from "./MovingBanner"
import Discover from "./Discover"
import AboutUs from "./AboutUs"
import Home1 from "../IMGs/Home2.jpg"
import BestSeller from "./BestSeller"
import Loading from "./Loading"

//home page 
const Home = () =>{

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`/api/get-items`)
      .then((response) => response.json())
      .then((parse) => {
        setItems(parse.items.slice(98,104)); 
        console.log(items);
      }) 
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  

return (

  <HomeContainer>
    <TopSection>
      <HomeImage1 src={Home1}/>
      {!items?<LoadingBox><Loading/></LoadingBox>:<BestSeller items = {items}/>}
    </TopSection>
    <MovingBanner/>
    <Discover/>
    <AboutUs/>
  </HomeContainer>
)

}

const LoadingBox = styled.div`
width: 100%;
display: flex;
align-items:center;
justify-content: center;
`

const HomeContainer = styled.div`
margin-top: 100px;
padding-bottom: 150px;
`

const TopSection = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const HomeImage1 = styled.img`
border-radius: 30px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
margin-left: 20px;
flex: 1;
max-height: 600px;
max-width: 100vw;
min-width: 60vw;
object-fit: cover;

@media screen and (max-width: 1100px) {
    margin: 0;
    margin-top: -20px;
    border-radius: 0;
    max-width: 80vw;
    max-height: 250px;
    scale: 1.3;
    margin-bottom: 30px;
    
  }
`
export default Home