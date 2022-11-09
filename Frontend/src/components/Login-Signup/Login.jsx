import React from 'react'
import { Box, Button, Grid, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import style from "./style.module.css"
import { useState } from 'react';

const InitialState = {
    email:"",
    password:"",
    }    

const Login = () => {
    const [show1, setShow1] = useState(false)
    const [form, setForm] = useState(InitialState)

    const handleChange = (e) => {
        let {name, value} = e.target;
        setForm((prev) => ({...prev, [name]:value}))
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form", form)
        setForm("")
        e.target.reset()
    }
  
    const { email, password } = form;
  
  
    return (
    <div>
            <Box w="100%" p="4" pt="0" pl={["0","0","28","28"]} textAlign={["center","center","left","left"]} position={"fixed"} bg="#ffffff" zIndex={100}>
                <Text fontSize={"48"} fontWeight={600}>SkinStore</Text>
                <Text mt="-4" ml={["0","0","3","3"]} fontSize={"13"}>part of the <span style={{color:"#2fc6f7"}}>look</span><span style={{color:"grey"}}>fantastic</span> group</Text>
            </Box>

        <Grid bg={"#f2f2f2"} pt="154" pb="20">
            <Grid w={["70%","70%","60%","60%"]} 
            m="auto" textAlign={"left"} display={["block","block","flex","flex"]} gap="10">
            <Grid bg="#ffffff" p="6" borderRadius={"5px"} w="100%">
                    <Text fontSize={"26px"} mb="1">Existing Customers</Text>
                <br />
                <form onSubmit={handleSubmit} className={style.form}>
                    <label>* Email address</label>
                    <Input required onChange={handleChange} name="email" value={email} type="email"/>
                    <label>* Password</label>
                    
                    <InputGroup size='md' h="50px" mb="23px" border={"1px solid grey"} borderRadius="10px">
                    <Input
                        onChange={handleChange} name="password" value={password}
                        pattern=".{8,15}"                        
                        required title='Please enter password of Length 8 to 15 !'
                        type={show1 ? 'text' : 'password'}
                        h="50px" mb="23px"
                    />
                    <InputRightElement mr='4'>
                        <Text onClick={()=> setShow1(!show1)} mt="2">
                        {show1 ? 'Hide' : 'Show'}
                        </Text>
                    </InputRightElement>
                    </InputGroup>

                    <Text fontSize={13}>
                    <u>
                    FORGOTTEN YOUR PASSWORD?
                    </u>
                    </Text>
                    <br />
                    
                    <Button type="submit" w={"100%"} bg="#2e3337" fontWeight={300} color="white" h="12" _hover={{bg:"#2fc6f7", color:"black"}}>
                        SIGN IN
                    </Button>
                </form>
                    <br />
                    {/* --------------------------- (Google FaceBook) --------------- */}
                    <Text fontSize={14}>Or, Continue with</Text>
                    <br />
                    <Box display={"flex"} m="auto" textAlign={"center"} gap="5" w="100%">
                        <Button fontWeight={400} border={"1px"} p={["4","4","6","6"]} w="50%">
                            <GrFacebook style={{color:"#4267b2", marginRight:"4px", fontSize:"20px"}}/>FaceBook
                        </Button>
                        <Button fontWeight={400} border={"1px"} p={["4","4","6","6"]} w="50%">
                            <FcGoogle style={{marginRight:"4px", fontSize:"25px"}}/>Google
                        </Button>
                    </Box>
                
                <br />
                </Grid>
                
                <Grid borderRadius={"5px"} w={["100%"]} p="6" m="auto" mt={["4","4","0","0"]} textAlign={"left"} bg="#ffffff">
                    <Heading fontSize={24}>
                    New Customers
                    </Heading>
                    <br />
                    <Button type="submit" w={"100%"} bg="#2e3337" fontWeight={300} color="white" h="10" _hover={{bg:"#2fc6f7", color:"black"}}>
                        REGISTER
                    </Button>
                    <br />
                    <br />
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default Login