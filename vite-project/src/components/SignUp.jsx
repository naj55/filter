import { Flex, Box, Image, Heading, Button } from "@chakra-ui/react";
import { useState } from 'react'
import signImge from '../assets/signUp.webp'
import Nav3 from './Nav3'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";

export default function signUp() {
    const [userName, setuserName] = useState("")
    const [Pass, setPass] = useState("")
    const [email, setEmail] = useState("")
    const Navigate = useNavigate();

    const AddUser = () => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (Pass == "" || userName == "" || email == "") {
            alert("you must fill all the inputs  ")
        } else if (Pass.length <= 3) {
            alert("password must be longer than 4 entry")
        } else if (email.match(validRegex)) {
            localStorage.setItem('userName', userName)
            localStorage.setItem('pass', Pass)
            localStorage.setItem('email', email)
            Navigate('/Login')
        } else {
            alert("you must fill email in good format ")
        }
    }

    return (
        <div>
            <Nav3></Nav3>
            <Flex justifyContent="center" gap="20px" mt="5em" id="loginFlex">

                <Box bg="#F8E8EE" w="25em" borderRadius="20px" id="shadow1" >
                    <Box mt="7em" w="20em" textAlign='center' ml="2.5em" h="15em" id="fomm">
                        <form action="/" method="post">
                            <Heading id="title" textAlign='center' color="#3B4529" >Sign Up</Heading>
                            <br />
                            <input id="myInput" name="userName" placeholder="user name" required value={userName} onChange={(e) => setuserName(e.target.value)}></input>
                            <br />
                            <input id="myInput" name="pass" type="password" placeholder="password" required value={Pass} onChange={(e) => setPass(e.target.value)}></input>
                            <br />
                            <input id="myInput" name="email" type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            <br />
                            <Button bg="#F2BED1" id="btn" color="#3B4529" w="13.5em" h="2.5em" borderRadius="9px" onClick={AddUser}>submit</Button>
                        </form>
                    </Box>
                </Box>
                <Box id="shadow2" borderRadius="20px">
                    <Image src={signImge} w="25em" h="35em" borderRadius="20px" id="loginImg"></Image>
                </Box>
            </Flex>
            <Footer></Footer>
        </div>
    )
}
