import { ChakraProvider, Flex, Text, Spacer, VStack } from "@chakra-ui/react"
export default function Footer() {
    return (
        <ChakraProvider>

            <Flex as="nav" bg="#FDCEDF" alignItems="center" gap="10px" mb="0px" id="footer" justifyContent="center">
                <VStack ml="40px">

                    <Text textalign="center" color="#fff">جميع الحقوق محفوظة</Text>
                </VStack>
                <Spacer />

            </Flex>
        </ChakraProvider>

    )
}
