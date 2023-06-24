import React from 'react'
import {  Box,Heading } from "@chakra-ui/react";
import {HashLink} from 'react-router-hash-link'


const linkStyle = {
    textDecoration: "none",
    color:'white',
    borderBottom:'1px solid white'
  };
const Header = () => {
  return (
    <Heading>
      <Box
        pos={"absolute"}
        top={"0"}
        right={"0"}
        marginTop={"30"}
        marginRight={"50"}
        textDecoration={"none"}
        color={'white'}
      >
        <HashLink style={{...linkStyle}}  to={"/#history"}>History</HashLink>
        <HashLink style={{marginLeft:'40px',...linkStyle}} to={"/#team"}>Team</HashLink>
      </Box>
    </Heading>
  )
}

export default Header
