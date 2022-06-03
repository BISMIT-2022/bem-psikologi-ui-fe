import Layout from "../../components/Layout"
import {
    Box,
    Button,
    Text,
    Flex,
    Input,
    Divider,
    FormControl,
    FormErrorMessage,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
} from "@chakra-ui/react"
import Image from 'next/image'
import computerPic from '../../public/computerImage.png'
import { useState, createRef } from "react"
import { arrayOfNpm } from '../../data/data'
import ErrorIcon from '@atlaskit/icon/glyph/error'
import { useRouter } from 'next/router'

const LoginPage = () => {
    const [inputNpm, setInputNpm] = useState("")
    const [isLoginSuccess, setIsLoginSuccess] = useState(false)
    const [changeInputState, setChangeInputState] = useState(true)
    const router = useRouter()
    const npmRef = createRef()

    const isNpmExists = arrayOfNpm.includes(inputNpm)

    const loginHandler = (e) => {
        setChangeInputState(false)
        e.preventDefault()
        if (isNpmExists) {
            setIsLoginSuccess(true), 1000
            setTimeout(() => router.push("/home"), 2000)
            return true;
        }
        e.target.blur();
        npmRef.current.blur();
        setIsLoginSuccess(false)
        return false
    }

    return (
        <Layout hasNavbar>
            <Flex
                flexDirection="column"
                align="center"
                justify="center"
                bgColor="#FFFFFF"
                color="#000000"
                my={{ base: "", lg: "28px" }}
                pt="36px"
                pb="20px"
                mx={{ base: "", lg: "80px" }}
                h={{base:"calc(100vh - 72px)", lg:"calc(100vh - 128px)"}}
                borderRadius={{ base: "", lg: "20px" }}>
                <Flex
                    w="fit-content"
                    justify="center"
                    flexDirection="column"
                    align="center">
                    <Text
                        fontSize={{ base: "24px", lg: "48px" }}
                        lineHeight={1.4}
                        fontWeight={700}
                        fontFamily="HKGrotesk"
                    >
                        Selamat Datang!
                    </Text>
                    {isLoginSuccess &&
                        <Alert className="show-alert" 
                        p="8px" gap="10px" h="56px" 
                        status='success' position="absolute" 
                        bottom="20px" maxW="336px">
                            <AlertIcon />
                            <AlertTitle
                                fontSize="16px"
                                fontWeight={700}
                                lineHeight={1.5}
                            >
                                Success!
                            </AlertTitle>
                            <AlertDescription
                                fontSize="16px"
                                fontWeight={500}
                                lineHeight={1.5}>
                                Selamat Datang!
                            </AlertDescription>
                        </Alert>
                    }
                    <Text
                        mt="8px"
                        fontSize={{ base: "16px", lg: "20px" }}
                        lineHeight={{ base: 1.5, lg: 1.2 }}
                        fontWeight={400}
                        fontFamily="HKGrotesk"
                        mb="40px"
                        textAlign="center"
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
                        mx={{base: "16px", lg:""}}
                    >
                        Nomor Pokok Mahasiswa (NPM)
                    </Text>
                    <Box w="full">
                        <form>
                            <FormControl isInvalid={!isLoginSuccess && !changeInputState}>
                                <Flex
                                    justify="center"
                                    flexDirection="column"
                                    align="center"
                                >
                                    <Input
                                        ref={npmRef}
                                        type="number"
                                        mx={{base: "16px", lg:""}}
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
                                        _hover={{ backgroundColor: "blue.600" }}
                                        color={"#FFFFFF"}
                                        p="0px 24px"
                                        borderRadius="6px"
                                        mt={{base:"30px", lg:"15px"}}
                                        h="48px"
                                        type="submit"
                                        fontSize="16px"
                                        lineHeight={1.5}
                                        fontWeight="700"
                                        onClick={(e) => { loginHandler(e) }}
                                    >
                                        Log In
                                    </Button>
                                </Flex>
                            </FormControl>
                        </form>
                    </Box>
                </Flex>

                <Divider mt={{base:"", lg:"53px"}} position={{base: "absolute", lg:""}} 
                    bottom={{base: "104px", lg:""}} />
                <Text
                    fontWeight={400}
                    fontSize={{base: "14px", lg:"20px"}}
                    lineHeight={{base: 1.7, lg:1.2}}
                    mt={{base: "", lg:"20px"}}
                    mx={{base: "16px", lg:""}}
                    textAlign="center"
                    position={{base: "absolute", lg:""}}
                    bottom={{base: "33px", lg:""}}
                >
                    Bidang Pengembangan Organisasi BEM Fakultas Psikologi UI
                </Text>
            </Flex>
        </Layout>
    )
}

export default LoginPage