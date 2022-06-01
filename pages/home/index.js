import Layout from "../../components/Layout"
import {
    Box,
    Button,
    Text,
    Flex,
    Divider,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"
import { profile } from '../../data/data'
import { useRouter } from "next/router"
import Link from "next/link"

const Homepage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()
    return (
        <Layout hasNavbar>
            <Flex
                flexDirection="column"
                justify="center"
                bgColor="#FFFFFF"
                color="#000000"
                my="28px"
                px="32px"
                pt="36px"
                pb="20px"
                mx="80px"
                h="calc(100vh - 128px)"
                borderRadius="20px">
                <Flex justify="space-between" align="center">
                    <Box>
                        <Text
                            fontSize="36px"
                            lineHeight={1.4}
                            fontWeight={700}
                        >
                            {`Halo, ${profile.name}`}
                        </Text>
                        <Box
                            backgroundColor="#FCEEB6"
                            p="4px 13px"
                            w="fit-content"
                            borderRadius="100px"
                            mt="12px"
                        >
                            <Text
                                fontSize="20px"
                                lineHeight={1.2}
                                fontWeight={400}
                            >
                                {`${profile.division}`}
                            </Text>
                        </Box>
                    </Box>
                    <Button
                        backgroundColor="#ffffff"
                        color="#50AEC7"
                        fontSize="18px"
                        lineHeight={1.5}
                        fontWeight={700}
                        border="1px solid #50AEC7"
                        p="0px 24px"
                        borderRadius="6px"
                        onClick={onOpen}
                    >
                        Log Out
                    </Button>
                </Flex>

                <Text
                    fontSize="20px"
                    mt="32px"
                    lineHeight={1.5}
                    fontWeight={700}
                >
                    Penilaian Akhir Jabatan
                </Text>

                <Box mt="24px">
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th fontWeight={700}
                                    fontSize="16px"
                                    lineHeight={1.5}
                                    color="#000000">Nama</Th>
                                <Th fontWeight={700}
                                    fontSize="16px"
                                    lineHeight={1.5}
                                    color="#000000">Jabatan</Th>
                                <Th fontWeight={700}
                                    fontSize="16px"
                                    lineHeight={1.5}
                                    color="#000000">Biro/Departemen</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody key="staffMap">
                            {profile.otherOfficers.map((el, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td fontWeight={500}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                            color="#000000">{el.name}</Td>
                                        <Td fontWeight={500}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                            color="#000000">{el.role}</Td>
                                        <Td fontWeight={500}
                                            fontSize="16px"
                                            lineHeight={1.5}
                                            color="#000000">{el.division}</Td>
                                        <Td isNumeric>
                                            <Link href={{pathname: `/assesment/[slug]`, query:{slug: el.name, role: el.role, division: el.division}}}>
                                                <Button
                                                    bgColor={el.isAssessed ? "#8D9B9E" : "#50AEC7"}
                                                    color={el.isAssessed ? "#C6CBCC" : "#FFFFFF"}
                                                    p="0px 16px"
                                                    borderRadius="6px"
                                                    fontSize="16px"
                                                    lineHeight={1.5}
                                                    fontWeight={700}
                                                    h="40px"
                                                    isDisabled={el.isAssessed}
                                                    _hover={!el.isAssessed && { backgroundColor: "blue.600" }}
                                                >
                                                    {el.isAssessed ? "Sudah Dinilai" : "Nilai Sekarang"}
                                                </Button>
                                            </Link>

                                        </Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </Box>


                <Divider mt="53px" />
                <Text
                    fontWeight={400}
                    fontSize="20px"
                    lineHeight={1.2}
                    my="20px"
                    alignSelf="center"
                >
                    Bidang Pengembangan Organisasi BEM Fakultas Psikologi UI
                </Text>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent position="absolute" top="30%">
                    <ModalHeader>Log Out</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Anda yaking ingin keluar dari akun?
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            mr="12px"
                            bgColor={"#50AEC7"}
                            color={"#FFFFFF"}
                            p="0px 16px"
                            borderRadius="6px"
                            fontSize="16px"
                            lineHeight={1.5}
                            fontWeight={700}
                            _hover={{ backgroundColor: "blue.600" }}
                            onClick={() => router.push("/login")}
                        >
                            Keluar
                        </Button>
                        <Button
                            onClick={onClose}
                            bgColor={"#EDF2F7"}
                            color={"#000000"}
                            p="0px 16px"
                            borderRadius="6px"
                            fontSize="16px"
                            lineHeight={1.5}
                            fontWeight={700}
                            _hover={{ backgroundColor: "gray.300" }}
                        >
                            Kembali
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Layout>
    )
}
export default Homepage