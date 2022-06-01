import { Box, Circle, Flex, Text } from "@chakra-ui/react"

const Layout = ({ hasNavbar, children, pb }) => {
    return (
        <Box bgColor="#DADADA" minH="100vh" pb={pb}>
            {hasNavbar &&
                <Box w="full" position="sticky" h="72px" backgroundColor="#A67399">
                    <Flex alignItems="center" ml="124px" h="full">
                        <Circle size="56px" bg="#D9D9D9">

                        </Circle>
                        <Text ml="36px" fontSize="24px" lineHeight={1.5} fontWeight="700" color="#FFFFFF">
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