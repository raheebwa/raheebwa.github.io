'use client'
import { Center } from '@chakra-ui/react'
import React from 'react'
import Countdown from './ComingSoon'

const HomePage = () => {
  return (
    <Center as="main" h="100vh">
        <Countdown
          endDateTime="2023-09-05T00:00:00.000Z"
        />
    </Center>
  )
}

export default HomePage
