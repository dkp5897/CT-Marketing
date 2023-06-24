import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import pic1 from "../assets/pic1.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import { HashLink } from "react-router-hash-link";

const linkStyle = {
  textDecoration: "none",
  color: "white",
  borderBottom: "1px solid white",
};

const boxesStyle = {
  width: "200px",
  height: "200px",
  backgroundColor: "purple",
  margin: "15px",
  border: "1px solid",
  backgroundSize: "cover",
};

const MyCarosel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={"2000"}
      showThumbs={false}
      showStatus={false}
    >
      <Box h={"100vh"}>
        <Image src={pic1} />
        <Box
          w={"65%"}
          pos={"absolute"}
          top={0}
          zIndex={1}
          textAlign={"left"}
          fontSize={"1.6rem"}
          color={"rgb(11, 7, 41)"}
          marginLeft={"300px"}
          marginTop={"50px"}
        >
          <Heading
            fontSize={"150px"}
            display={"inline"}
            color={"rgba(54, 0, 29,0.6)"}
          >
            01.
          </Heading>
          <Text
            fontSize={50}
            display={"inline-block"}
            pos={"relative"}
            top={-30}
            left={-30}
          >
            History
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            eligendi odit minus nam dolorem, pariatur quia aspernatur maiores ea
            nisi molestias consequatur, officiis ipsa quibusdam commodi tenetur
            enim, doloremque ducimus?
          </Text>
        </Box>
        <Box
          pos={"absolute"}
          zIndex={"1"}
          bottom={"0"}
          display={"flex"}
          justifyContent={"center"}
          bgColor={"rgba(20,50,60,0.7)"}
          w={"100%"}
          h={"25vh"}
        >
          <Box {...boxesStyle} backgroundImage={pic1}></Box>
          <Box {...boxesStyle} backgroundImage={pic3}></Box>
          <Box {...boxesStyle} backgroundImage={pic5}></Box>
          <Box {...boxesStyle} backgroundImage={pic4}></Box>
        </Box>
      </Box>
      <Box h={"100vh"}>
        <Image src={pic3} />
        <Box
          w={"65%"}
          pos={"absolute"}
          top={0}
          zIndex={1}
          textAlign={"left"}
          fontSize={"1.6rem"}
          color={"rgb(11, 7, 41)"}
          marginLeft={"300px"}
          marginTop={"50px"}
        >
          <Heading
            fontSize={"150px"}
            display={"inline"}
            color={"rgba(54, 0, 29,0.6)"}
          >
            01.
          </Heading>
          <Text
            fontSize={50}
            display={"inline-block"}
            pos={"relative"}
            top={-30}
            left={-30}
          >
            History
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            eligendi odit minus nam dolorem, pariatur quia aspernatur maiores ea
            nisi molestias consequatur, officiis ipsa quibusdam commodi tenetur
            enim, doloremque ducimus?
          </Text>
        </Box>
        <Box
          pos={"absolute"}
          zIndex={"1"}
          bottom={"0"}
          display={"flex"}
          justifyContent={"center"}
          bgColor={"rgba(20,50,60,0.7)"}
          variant="ghost"
          w={"100%"}
          h={"25vh"}
        >
          <Box {...boxesStyle} backgroundImage={pic1}></Box>
          <Box {...boxesStyle} backgroundImage={pic3}></Box>
          <Box {...boxesStyle} backgroundImage={pic5}></Box>
          <Box {...boxesStyle} backgroundImage={pic4}></Box>
        </Box>
      </Box>
      <Box h={"100vh"}>
        <Image src={pic5} />
        <Box
          w={"65%"}
          pos={"absolute"}
          top={0}
          zIndex={1}
          textAlign={"left"}
          fontSize={"1.6rem"}
          color={"rgb(11, 7, 41)"}
          marginLeft={"300px"}
          marginTop={"50px"}
        >
          <Heading
            fontSize={"150px"}
            display={"inline"}
            color={"rgba(54, 0, 29,0.6)"}
          >
            01.
          </Heading>
          <Text
            fontSize={50}
            display={"inline-block"}
            pos={"relative"}
            top={-30}
            left={-30}
          >
            History
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            eligendi odit minus nam dolorem, pariatur quia aspernatur maiores ea
            nisi molestias consequatur, officiis ipsa quibusdam commodi tenetur
            enim, doloremque ducimus?
          </Text>
        </Box>
        <Box
          pos={"absolute"}
          zIndex={"1"}
          bottom={"0"}
          display={"flex"}
          justifyContent={"center"}
          bgColor={"rgba(20,50,60,0.7)"}
          variant="ghost"
          w={"100%"}
          h={"25vh"}
        >
          <Box {...boxesStyle} backgroundImage={pic1}></Box>
          <Box {...boxesStyle} backgroundImage={pic3}></Box>
          <Box {...boxesStyle} backgroundImage={pic5}></Box>
          <Box {...boxesStyle} backgroundImage={pic4}></Box>
        </Box>
      </Box>
    </Carousel>
  );
};

const History = () => {
  return (
    <div className="history" id="history">
      <Heading
        backgroundColor={"gray"}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Image borderRadius={"50%"} w={"80px"} h={"80px"} src={pic4} />
          <Box textTransform={"uppercase"}>
            <Text>losAngles</Text>
            <Text>mountains</Text>
          </Box>
        </Box>
        <Box marginTop={"20"}>
          <HashLink style={{ ...linkStyle }} to="/#history">
            History
          </HashLink>
          <HashLink style={{ marginLeft: "100px", ...linkStyle }} to="/#team">
            Team
          </HashLink>
        </Box>
      </Heading>
      <MyCarosel />
    </div>
  );
};

export default History;
