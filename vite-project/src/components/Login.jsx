import { Flex, Box, Image, Heading, Button } from "@chakra-ui/react";
import loginImge from '../assets/login.jpeg'
import Nav4 from './Nav4'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

export default function signUp() {
    const [Pass, setPass] = useState("")
    const [email, setEmail] = useState("")
    const Navigate = useNavigate();

    const checkUser = () => {
        const savedEmail = localStorage.getItem('email')
        const savedPass = localStorage.getItem('pass')
        if (savedEmail == email && savedPass == Pass) {
            Navigate('/Flowers')
        } else {
            alert("incorrect data")
        }
    }
    return (
        <div>
            <Nav4></Nav4>
            <Flex justifyContent="center" gap="20px" mt="5em" id="loginFlex">

                <Box bg="#F8E8EE" w="25em" borderRadius="20px" id="shadow1">
                    <Box mt="7em" w="20em" textAlign='center' ml="2.5em" h="15em" id="fomm">
                        <form action="/" method="post">
                            <Heading id="title" textAlign='center' color="#3B4529" >Login</Heading>
                            <br />
                            <input id="myInput" name="email" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                            <br />
                            <input id="myInput" name="pass" type="password" placeholder="password" value={Pass} onChange={(e) => setPass(e.target.value)} required></input>
                            <br />
                            <Button bg="#F2BED1" id="btn" color="#3B4529" w="13.5em" h="2.5em" borderRadius="9px" onClick={checkUser}>submit</Button>
                        </form>
                    </Box>
                </Box>
                <Box id="shadow2" borderRadius="20px">
                    <Image src={loginImge} w="25em" h="35em" borderRadius="20px" id="loginImg"></Image>
                </Box>
            </Flex>
            <Footer></Footer>
        </div>
    )
}
