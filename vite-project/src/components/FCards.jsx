import { ChakraProvider, Box, Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Flex } from '@chakra-ui/react'
import Image1 from '../assets/tulip1.jpeg'
import Image2 from '../assets/roses_3.jpeg'
import Image3 from '../assets/login.jpeg'
import Image4 from '../assets/peonyy.jpeg'
import Image5 from '../assets/daisy2.jpeg'
import Image6 from '../assets/Hydrangea.jpeg'
import { useNavigate } from "react-router-dom";
import Nav from './Nav'
import Footer from './Footer'


export default function Cards() {
    const Navigate = useNavigate();
    const [search, setSearch] = useState("")
    const flowerName = ["Tulips Flower", "Roses Flower", "Lilies Flower", "Peonies Flower", "Daisies Flower", "Hydrangeas Flower"]
    return (
        <>
            <Nav></Nav>
            <ChakraProvider>
                <Flex justifyContent="center" mt="50px">
                    <Box>
                        <Button w="10em" bg="#F2BED1" mr="2em" color="#3B4529" onClick={myfilter}>Search</Button>
                        <input name='Search' id="searchInp" value={search} onChange={(e) => setSearch(e.target.value)} />


                    </Box>
                </Flex>
                <Flex flexDir='column-reverse'>
                    <Flex justifyContent="center" mt="90px" gap="40px" id="flexCard">

                        <Card maxW='sm'>
                            <CardBody>
                                <div id="bor">
                                    <Image
                                        src={Image1}
                                        height="300"
                                        width="280px"
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                </div>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md' id="title2" textAlign='Left'> </Heading>
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
                        {/* ***********************************************************************************/}
                        <Card maxW='sm'>
                            <CardBody>
                                <div id="bor">
                                    <Image
                                        src={Image2}
                                        height="300"
                                        width="280px"
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                </div>
                                <Stack mt='6' spacing='3'>
                                    <Heading id="title2" textAlign='Left' size='md'></Heading>
                                    <Box textAlign='right'>
                                        <Text>

                                        </Text>

                                    </Box>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>


                                    <Button variant='solid' bg='#3B4529' color="gray.400" onClick={() => Navigate('/Cards/2')}>
                                        more

                                    </Button>

                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                        {/* ***********************************************************************************/}

                        <Card maxW='sm'>
                            <CardBody>
                                <div id="bor">
                                    <Image
                                        src={Image3}
                                        height="300"
                                        width="280px"
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                </div>
                                <Stack mt='6' spacing='3'>
                                    <Heading id="title2" textAlign='Left' size='md'></Heading>
                                    <Box textAlign='right'>
                                        <Text>

                                        </Text>

                                    </Box>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>


                                    <Button variant='solid' bg='#3B4529' color="gray.400" onClick={() => Navigate('/Cards/2')}>
                                        more

                                    </Button>

                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                        {/* ***********************************************************************************/}

                    </Flex>
                    <Flex justifyContent="center" mt="90px" gap="40px" id="flexCard">

                        <Card maxW='sm'>
                            <CardBody>
                                <div id="bor">
                                    <Image
                                        src={Image4}
                                        height="300"
                                        width="280px"
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                </div>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md' id="title2" textAlign='Left'></Heading>
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
                        {/* ***********************************************************************************/}
                        <Card maxW='sm'>
                            <CardBody>
                                <div id="bor">
                                    <Image
                                        src={Image5}
                                        height="300"
                                        width="280px"
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                </div>
                                <Stack mt='6' spacing='3'>
                                    <Heading id="title2" textAlign='left' size='md'></Heading>
                                    <Box textAlign='right'>
                                        <Text>

                                        </Text>

                                    </Box>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>


                                    <Button variant='solid' bg='#3B4529' color="gray.400" onClick={() => Navigate('/Cards/2')}>
                                        more

                                    </Button>

                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                        {/* ***********************************************************************************/}

                        <Card maxW='sm'>
                            <CardBody>
                                <div id="bor">
                                    <Image
                                        src={Image6}
                                        height="300"
                                        width="280px"
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                </div>
                                <Stack mt='6' spacing='3'>
                                    <Heading id="title2" textAlign='left' size='md'></Heading>
                                    <Box textAlign='right'>
                                        <Text>

                                        </Text>

                                    </Box>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>


                                    <Button variant='solid' bg='#3B4529' color="gray.400" onClick={() => Navigate('/Cards/2')}>
                                        more

                                    </Button>

                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                        {/* ***********************************************************************************/}

                    </Flex>
                </Flex>

            </ChakraProvider>
            <Footer></Footer>
        </>
    )
}
