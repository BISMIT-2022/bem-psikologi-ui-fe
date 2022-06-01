import {
    Box,
    Divider,
    Flex, Text,
    Textarea,
    Button,
    FormControl,
    Input,
    RadioGroup,
    Radio,
    Stack,
    FormErrorMessage,
    Modal,
    ModalBody,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    useDisclosure
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { assesmentQuestions } from "../../data/data";
import ErrorIcon from '@atlaskit/icon/glyph/error'

const AssesmentPage = () => {
    const answersMap = new Map()
    const router = useRouter()
    const { 
        isOpen: isOpenBackModal, 
        onOpen: onOpenBackModal,
        onClose: onCloseBackModal } = useDisclosure()
    const { query: queryParams } = useRouter();
    return (
        <Layout hasNavbar pb="22px">
            <Flex
                justify="space-between"
                bgColor="#FFFFFF"
                color="#000000"
                my="28px"
                px="32px"
                py="36px"
                mx="80px"
                borderRadius="20px"
            >
                <Box>
                    <Text
                        fontWeight="700"
                        fontSize="20px"
                        lineHeight={1.5}
                    >
                        Penilaian Akhir Jabatan
                    </Text>
                    <Box
                        fontSize="16px"
                        fontWeight={500}
                        lineHeight={1.5}
                        mt="20px"
                    >
                        <Text>
                            {`Nama: ${queryParams.slug}`}
                        </Text>
                        <Text>
                            {`Jabatan: ${queryParams.role}`}
                        </Text>
                        <Text>
                            {`${queryParams.division}`}
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
                    mt="16px"
                    onClick={onOpenBackModal}
                >
                    Kembali
                </Button>
            </Flex>
            <form >
                <FormControl key="assesmentForm" isInvalid={false}>
                    {assesmentQuestions.map((el, index) => {
                        return (
                            <Box
                                key={index}
                                bgColor="#FFFFFF"
                                color="#000000"
                                my="28px"
                                pt="16px"
                                pb="24px"
                                pl="33px"
                                mx="80px"
                                borderRadius="20px">
                                <Text>
                                    {`${el.id}. ${el.question}`}
                                </Text>
                                {el.type === "radio" ?
                                    <Flex mt="24px" w="75%" direction="row" justify="space-evenly" align="end">
                                        <Text
                                            fontSize="16px"
                                            lineHeight={1.5}
                                            fontWeight={500}
                                        >
                                            Sangat Tidak Setuju
                                        </Text>
                                        <RadioGroup name={el.id}>
                                            <Stack direction="row" spacing="40px">
                                                <Flex direction="column" justify="center" align="center">
                                                    <Text fontSize="14px" lineHeight={1.5} fontWeight={500}>1</Text>
                                                    <Radio className="radio" mt="3px" size="lg" value='1' _checked={{
                                                        bg: "#000000",
                                                        padding: "5px",
                                                        border: "1.5px solid #000000"
                                                    }}>
                                                    </Radio>
                                                </Flex>
                                                <Flex direction="column" justify="center" align="center">
                                                    <Text fontSize="14px" lineHeight={1.5} fontWeight={500}>2</Text>
                                                    <Radio mt="3px" size="lg" value='2' _checked={{
                                                        bg: "#000000",
                                                        padding: "5px",
                                                        border: "1.5px solid #000000"
                                                    }}></Radio>
                                                </Flex>
                                                <Flex direction="column" justify="center" align="center">
                                                    <Text fontSize="14px" lineHeight={1.5} fontWeight={500}>3</Text>
                                                    <Radio mt="3px" size="lg" value='3' _checked={{
                                                        bg: "#000000",
                                                        padding: "5px",
                                                        border: "1.5px solid #000000"
                                                    }}></Radio>
                                                </Flex>
                                                <Flex direction="column" justify="center" align="center">
                                                    <Text fontSize="14px" lineHeight={1.5} fontWeight={500}>4</Text>
                                                    <Radio mt="3px" size="lg" value='4' _checked={{
                                                        bg: "#000000",
                                                        padding: "5px",
                                                        border: "1.5px solid #000000"
                                                    }}></Radio>
                                                </Flex>
                                                <Flex direction="column" justify="center" align="center">
                                                    <Text fontSize="14px" lineHeight={1.5} fontWeight={500}>5</Text>
                                                    <Radio mt="3px" size="lg" value='5' _checked={{
                                                        bg: "#000000",
                                                        padding: "5px",
                                                        border: "1.5px solid #000000"
                                                    }}></Radio>
                                                </Flex>
                                                <Flex direction="column" justify="center" align="center">
                                                    <Text fontSize="14px" lineHeight={1.5} fontWeight={500}>6</Text>
                                                    <Radio mt="3px" size="lg" value='6' _checked={{
                                                        bg: "#000000",
                                                        padding: "5px",
                                                        border: "1.5px solid #000000"
                                                    }}></Radio>
                                                </Flex>
                                            </Stack>
                                        </RadioGroup>
                                        <Text
                                            fontSize="16px"
                                            lineHeight={1.5}
                                            fontWeight={500}
                                        >
                                            Sangat Setuju
                                        </Text>
                                    </Flex> :
                                    <Box w="60%">
                                        <Textarea mt="24px" ml="32px" placeholder="Jawab di sini" />
                                    </Box>
                                }
                            </Box>
                        )
                    })}
                </FormControl>

            </form>
            <Flex
                direction="column"
                bgColor="#FFFFFF"
                color="#000000"
                mt="8px"
                py="24px"
                pl="33px"
                mx="80px"
                borderRadius="20px">
                <Button
                    bgColor={"#50AEC7"}
                    _hover={{ backgroundColor: "blue.600" }}
                    color={"#FFFFFF"}
                    p="0px 24px"
                    borderRadius="6px"
                    mt="15px"
                    h="48px"
                    type="submit"
                    fontSize="18px"
                    lineHeight={1.5}
                    fontWeight="700"
                    w="fit-content"
                    m="0 auto"
                >
                    Kumpulkan Penilaian
                </Button>
                <Divider mt="24px" />
                <Text
                    fontWeight={400}
                    fontSize="20px"
                    lineHeight={1.2}
                    mt="20px"
                    mx="auto"
                >
                    Bidang Pengembangan Organisasi BEM Fakultas Psikologi UI
                </Text>
            </Flex>
            <Modal isOpen={isOpenBackModal} onClose={onCloseBackModal}>
                <ModalOverlay />
                <ModalContent position="absolute" top="30%">
                    <ModalHeader>Kembali ke Home</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Anda yaking ingin keluar dari laman penilaian?
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
                            onClick={() => router.push("//home")}
                        >
                            Keluar
                        </Button>
                        <Button
                            onClick={onCloseBackModal}
                            bgColor={"#EDF2F7"}
                            color={"#000000"}
                            p="0px 16px"
                            borderRadius="6px"
                            fontSize="16px"
                            lineHeight={1.5}
                            fontWeight={700}
                            _hover={{ backgroundColor: "gray.300" }}
                        >
                            Lanjutkan Penilaian
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Layout >
    )
}
export default AssesmentPage