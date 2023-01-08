import { useState } from 'react'
import Links from './views/Links'
import Groups from './views/Groups'
import Configuration from './views/Configuration'
import About from './views/About'
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import SimpleSidebar from './components/SideNav'
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom'

function App() {
  

  return (
    <Container as="section" maxW="4xl">
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" py={4}>
        Settings
      </Text>
      <Flex>
        <SimpleSidebar />
        <Box flex="1" mx="0" px='8'>
          <Outlet />
        </Box>
      </Flex>
    </Container>
  )
}

export default App
