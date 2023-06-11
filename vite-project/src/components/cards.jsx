import { ChakraProvider, Box, Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Flex } from '@chakra-ui/react'
import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { flowerData } from './flowerData'
import { Grid, GridItem } from '@chakra-ui/react'


export default function cards() {
    const navigate = useNavigate();
    const email = localStorage.getItem("email")
    console.log(flowerData);
    const [search, setSearch] = useState("")
    console.log(search);

    if (email == undefined) {
        console.log("err")
        useEffect(() => {
            navigate("/")
        })

    }

    return (
        <>

            <Nav></Nav>
            <ChakraProvider>
                <Flex justifyContent="center" mt="50px">
                    <Box>
                        <input name='Search' placeholder='Search' id="searchInp" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Box>
                </Flex>
                <Flex flexDir='column-reverse' id="containerFlex">

                    <Flex justifyContent="center" mt="90px" gap="40px" id="flexCard" >
                        <Grid templateColumns='repeat(3, 1fr)' gap={6} id="mygrid">
                            {
                                flowerData.filter((item) => {
                                    return search.toLowerCase() === '' ? item :
                                        item.name.toLowerCase().includes(search)
                                }).map((item) => (
                                    <div key={item.id}>
                                        <Card maxW='sm' >
                                            <CardBody>
                                                <div id="bor">
                                                    <Image
                                                        src={item.image}
                                                        height="300"
                                                        width="280px"
                                                        alt='Green double couch with wooden legs'
                                                        borderRadius='lg'
                                                        id="theImg"
                                                    />
                                                </div>
                                                <Stack mt='6' spacing='3'>
                                                    <Heading size='md' id="title3" textAlign='Left'> {item.name}</Heading>
                                                    <Box textAlign='right'>
                                                        <Text>
                                                        </Text>
                                                    </Box>
                                                </Stack>
                                            </CardBody>
                                            <Divider />
                                            <CardFooter>
                                                <ButtonGroup spacing='2'>
                                                    <Button variant='solid' bg='#3B4529' color="gray.400" onClick={() => Navigate('/Cards/1')}>
                                                        more
                                                    </Button>
                                                </ButtonGroup>
                                            </CardFooter>
                                        </Card>

                                        <br />
                                    </div>

                                ))
                            }

                        </Grid>
                    </Flex>
                </Flex>
            </ChakraProvider>
            <Footer></Footer>
        </>
    )
}

