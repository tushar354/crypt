import React from 'react';
import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import { RxDashboard } from 'react-icons/rx';
import { BsArrowDownUp } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';

const Sidenav = () => {
    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icon: BsArrowDownUp,
            text: "Transactions",
            link: "/transactions",
        },
    ];

    return (
        <Stack justifyContent="space-between" boxShadow={{ base: "none", lg: "lg" }} w={{ base: "full", lg: "16rem" }} h="100vh"


        >



            <Box>
                <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">@TusharGarg</Heading>
                <Box mt="6" mx="3">
                    {navLinks.map((nav) => (
                        <HStack mx="3" key={nav.text} py="3" px="4">
                            <nav.icon />
                            <Text fontSize="14px">{nav.text}</Text>
                        </HStack>
                    ))}


                </Box>
            </Box>


            <Box>
                <HStack mx="3" py="3" px="4" mb="6">
                    <BiSupport />
                    <Text fontSize="14px">Support</Text>
                </HStack>
            </Box>
        </Stack>
    );
};

export default Sidenav;
