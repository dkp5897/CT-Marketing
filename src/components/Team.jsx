import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";


const Team = () => {
  return (
    <div id="team">
      <Box>
        <Box
          w={"80%"}
          h={"20%"}
          pos={'relative'}
          top={0}
          zIndex={1}
          textAlign={"left"}
          fontSize={"1.4rem"}
          color={"rgb(11, 7, 41)"}
          marginLeft={"10%"}
          marginTop={"50px"}
          display={"flex"}
        >
          <Box display={"flex"}>
            <Heading
              fontSize={"10rem"}
              display={["inline"]}
              color={"rgba(54, 0, 29,0.6)"}
            >
              02.
            </Heading>
            <Text
              fontSize={40}
              display={"inline-block"}
              pos={"relative"}
              top={60}
              left={-25}
            >
              CLIMB
            </Text>
          </Box>
          <Text display={["block","inline-block"]} marginLeft={15} marginTop={50}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            eligendi odit minus nam dolorem, pariatur quia aspernatur maiores ea
            nisi molestias consequatur, officiis ipsa quibusdam commodi tenetur
            enim, doloremque ducimus?
          </Text>
        </Box>

        <Box
          w={"full"}
          h={"6vh"}
          backgroundColor={"rgb(20,50,60)"}
          display={"flex"}
          color={"gray"}
          fontSize={"30"}
          fontWeight={"700"}
        >
          <Box
            w={"50%"}
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box h={'6vh'} className="mountain">
              <Text marginlLeft={"30px"} >
                MOUTAIN1
              </Text>
            </Box>
            <Box h={'6vh'} className="mountain">
              <Text marginLeft={"30px"}>
                MOUTAIN2
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          w={"full"}
          h={"70vh"}
          backgroundImage={pic3}
          backgroundSize={"cover"}
        >
        </Box>
        <Box
          h={"8vh"}
          backgroundColor={"rgb(20,50,60)"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
         <Box display={"flex"} alignItems={"center"}>
          <Image borderRadius={"50%"} w={"70px"} h={"70px"} src={pic4} />
          <Box textTransform={"uppercase"} fontSize={'1.5rem'} fontWeight={'700'}>
            <Text>losAngles</Text>
            <Text>mountains</Text>
          </Box>
        </Box>
          <Box>copyright2016. All right reserved</Box>
        </Box>
      </Box>
    </div>
  );
};

export default Team;
