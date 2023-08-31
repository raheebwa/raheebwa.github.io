import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

// a stop clocking showing the time left to the launch of the website

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = React.useState(1000000)
    const [timeLeftString, setTimeLeftString] = React.useState('')
    const [timeLeftStringArray, setTimeLeftStringArray] = React.useState([])

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)
        return () => clearTimeout(timer)
    }, [timeLeft])

    React.useEffect(() => {
        const days = Math.floor(timeLeft / (60 * 60 * 24))
        const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60))
        const minutes = Math.floor((timeLeft % (60 * 60)) / 60)
        const seconds = Math.floor(timeLeft % 60)

        setTimeLeftString(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
        setTimeLeftStringArray([days, hours, minutes, seconds])
    }, [timeLeft])

    React.useEffect(() => {
        setTimeLeft(60 * 60 * 24 * 7)
    }, [])


  return (
    <Box as="section">
        <Heading as="h1" fontSize="3xl" textAlign="center" mb="1rem">Currently Under Upgrade</Heading>
        <Heading as="h2" fontSize="xl" textAlign="center" mb="1rem">{"Aheebwa Ramadhan's Portfolio"}</Heading>
        <Heading as="h3" fontSize="l" textAlign="center" mb="1rem">{`Will be live in ${timeLeftString}`}</Heading>
    </Box>
  )
}

export default ComingSoon
