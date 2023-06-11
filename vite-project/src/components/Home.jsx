
import { ChakraProvider, Heading, Image, Flex, Button } from '@chakra-ui/react'
import Nav2 from './Nav2'
import Nav from './Nav'

export default function Home() {
    const email = localStorage.getItem("email")
    return (

        <ChakraProvider>
            {email ? <Nav></Nav> : <Nav2></Nav2>}

            <Flex>

                <div class="backgroundImg">
                    <div id="title22">
                        <Heading size='lg' id="title2" textAlign='Left'> Bloom</Heading>
                        <Heading size='md' id="title2" textAlign='Left'>"Every flower is a soul blossoming in nature."</Heading>
                    </div>
                </div>

            </Flex>
        </ChakraProvider>
    )
}
