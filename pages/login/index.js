import Layout from "../../components/Layout"
import { Box, Button, Text, Flex, Input, Divider, FormControl, FormErrorMessage } from "@chakra-ui/react"
import Image from 'next/image'
import computerPic from '../../public/computerImage.png'
import { useState } from "react"
import { arrayOfNpm } from '../../data/data'
import ErrorIcon from '@atlaskit/icon/glyph/error'

const LoginPage = () => {
    const [inputNpm, setInputNpm] = useState("")
    const [isLoginSuccess, setIsLoginSuccess] = useState(false)
    const [changeInputState, setChangeInputState] = useState(false)

    const isNpmExists = arrayOfNpm.includes(inputNpm)

    const loginHandler = (e) => {
        setChangeInputState(false)
        e.preventDefault()
        if (isNpmExists) {
            setIsLoginSuccess(true)
            return console.log("login berhasil");
        }
        setIsLoginSuccess(false)
        return console.log("login tidak berhasil")
    }

    return (
        <Layout hasNavbar>
            <Flex
                flexDirection="column"
                align="center"
                justify="center"
                bgColor="#FFFFFF"
                color="#000000"
                my="28px"
                pt="36px"
                pb="20px"
                mx="80px"
                h="calc(100vh - 128px)"
                borderRadius="24px">
                <Flex
                    w="fit-content"
                    justify="center"
                    flexDirection="column"
                    align="center">
                    <Text
                        fontSize="48px"
                        lineHeight={1.4}
                        fontWeight={700}
                        fontFamily="HKGrotesk"
                    >
                        Selamat Datang!
                    </Text>
                    <Text
                        mt="8px"
                        fontSize="20px"
                        lineHeight={1.2}
                        fontWeight={400}
                        fontFamily="HKGrotesk"
                        mb="40px"
                    >
                        Silakan melakukan login dengan NPM anda
                    </Text>
                    <Image
                        src={computerPic}
                        alt="Picture of the login page"
                    />
                    <Text
                        alignSelf="flex-start"
                        mt="40px"
                        fontSize="16px"
                        lineHeight={1.5}
                        fontWeight={700}
                    >
                        Nomor Pokok Mahasiswa (NPM)
                    </Text>
                    <Box w="full">
                        <form>
                            <FormControl isInvalid={!isLoginSuccess}>
                                <Flex
                                    justify="center"
                                    flexDirection="column"
                                    align="center"
                                >
                                    <Input
                                        type="number"
                                        onChange={(e) => { setInputNpm(e.target.value); setChangeInputState(true) }}
                                        border="2px solid #DFE1E6"
                                        mt="4px"
                                        placeholder="Isi NPM di sini"
                                        h="40px"
                                    />
                                    {!isLoginSuccess && !changeInputState &&
                                        <FormErrorMessage
                                            alignSelf="start"
                                        >

                                            <ErrorIcon />
                                            NPM yang Anda isi tidak ditemukan
                                        </FormErrorMessage>}
                                    <Button
                                        bgColor={"#50AEC7"}
                                        color={"#FFFFFF"}
                                        p="0px 24px"
                                        borderRadius="6px"
                                        mt="15px"
                                        h="48px"
                                        type="submit"
                                        onClick={(e) => loginHandler(e)}
                                    >
                                        Log In
                                    </Button>
                                </Flex>
                            </FormControl>


                        </form>
                    </Box>
                </Flex>
                <Divider mt="53px" />
                <Text
                    fontWeight={400}
                    fontSize="20px"
                    lineHeight={1.2}
                    mt="20px"
                >
                    Bidang Pengembangan Organisasi BEM Fakultas Psikologi UI
                </Text>
            </Flex>
        </Layout>
    )
}

export default LoginPage