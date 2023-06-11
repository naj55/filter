import React from 'react'
import { Flex, Heading, Text, Spacer, VStack, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

export default function Nav3() {
    const Navigate = useNavigate();
    return (
        <div id="navflex">
            <Flex as="nav" p="20px" bg="#F8E8EE" alignItems="center" gap="10px" h="12em"  >
                <VStack ml="40px">
                    <Heading as="h1" id="title" color="#3B4529" > Bloom</Heading>
                    <Text id="welcome" color="#3B4529">"Every flower is a soul blossoming in nature."
                    </Text>
                </VStack>
                <Spacer />

                <Text>already SignUp?</Text>
                <Button bg="#F2BED1" color="#3B4529" onClick={() => Navigate('/Login')} id="btn2">Login</Button>
            </Flex>
        </div>
    )
}
