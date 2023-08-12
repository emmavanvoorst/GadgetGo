import React from "react";
import { styled } from "styled-components";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import Logo1 from "../LOGO/Omron.png";
import Logo2 from "../LOGO/Casio.png";
import Logo3 from "../LOGO/Fitbit.png";
import Logo4 from "../LOGO/JawBone.png";
import Logo5 from "../LOGO/Magellan.png";
import Logo6 from "../LOGO/Belkin.png";
import Logo7 from "../LOGO/Sony.png";

//displaying the moving banner on the homepage with the companies
const MovingBanner = () => {
  const navigate = useNavigate();

  const companies = [
    { _id: 14946, name: "Omron", logo: Logo1 },
    { _id: 13334, name: "Casio", logo: Logo2 },
    { _id: 10759, name: "Fitbit", logo: Logo3 },
    { _id: 18834, name: "JawBone", logo: Logo4 },
    { _id: 16475, name: "Magellan", logo: Logo5 },
    { _id: 16384, name: "Belkin", logo: Logo6 },
    { _id: 12407, name: "Sony", logo: Logo7 },
  ];

  const handleClick = (company) => {
    navigate(`/company/${company._id}`);
  };

  return (
    <Container>
      <CustomMarquee speed={60}>
        {companies.map((company) => {
          return (
            <Logo
              key={companies.name}
              alt="Logo"
              src={company.logo}
              onClick={() => handleClick(company)}
            />
          );
        })}
      </CustomMarquee>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  color: white;
  margin: 40px 0px;
`;

const CustomMarquee = styled(Marquee)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  & .child {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 250px;
  margin-right: 100px;
  cursor: pointer;
  transition: 200ms;
  @media screen and (max-width: 750px) {
    scale: 0.7;
    margin-right: -30px;
  }

  
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;

  img {
    scale: 0.2;
    margin: 0;
  }
`;

export default MovingBanner;
