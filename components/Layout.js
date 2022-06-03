import { Box, Circle, Flex, Text } from "@chakra-ui/react"

const Layout = ({ hasNavbar, children, pb }) => {
    return (
        <Box bgColor="#DADADA" minH="100vh" pb={pb}>
            {hasNavbar &&
                <Box w="full" position="sticky" h="72px" backgroundColor="#A67399">
                    <Flex alignItems="center" ml={{ base: "16px", md:"80px", lg: "124px" }} h="full">
                        <Circle size="56px" bg="#D9D9D9">

                        </Circle>
                        <Text ml={{ base: "16px", lg: "36px" }} fontSize={{ base: "16px", md:"20px", lg: "24px" }} lineHeight={1.5} fontWeight="700" color="#FFFFFF">
                            Appraisal Form BEM Fakultas Psikologi UI
                        </Text>
                    </Flex>
                </Box>
            }
            <Box h="fit-content">
                {children}
            </Box>
        </Box>
    )
}

export default Layout