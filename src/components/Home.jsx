import React from "react";
import {  Box, Image,  Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import pic1 from "../assets/pic1.jpg";
import History from './History'
import Team from "./Team";



const headingOptional = {
    pos:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    textTransform:'upperCase',
    p:'4',
    fontSize:'70px',
    fontWeight:'900',
    color:'white'
}

const Home = () => {
  return (
    <div>
      <Image src={pic1} w={"100%"} height={"100vh"} />
      
      <Box
        {...headingOptional}
      >
        <Text>LosAngles</Text>
        <Text color={'skyblue'}>Mountains</Text>
      </Box>

      <History />

      <Team/>
    </div>
  );
};

export default Home;
