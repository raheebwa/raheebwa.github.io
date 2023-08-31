import React, { useState, useEffect } from 'react';
import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react';

type CountdownProps = {
    endDateTime: string;
};

type TimeLeft = {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
};

const Countdown: React.FC<CountdownProps> = ({ endDateTime }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: '00', hours: '00', minutes: '00', seconds: '00' });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const endTime = new Date(endDateTime);
            const diff = endTime.getTime() - now.getTime();

            if (diff <= 0) {
                return { days: '00', hours: '00', minutes: '00', seconds: '00' };
            }

            const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
            const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

            return { days, hours, minutes, seconds };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [endDateTime]);

    return (
        <Stack spacing={6} align={"center"}>
            <Heading as="h1" size="xl" >
                {"Hi is this is Ramadhan, and I'm a Full Stack Developer"}
            </Heading>
            <Heading as="h2" size="lg" >
                Currently working on my portfolio ..., it will be ready in:
            </Heading>
            <HStack as="section" spacing="4">
                {Object.keys(timeLeft).map((key, index) => (
                    <Box
                        key={index}
                        fontWeight="bold"
                        color="white"
                        bg="black"
                        p="8"
                        borderRadius="md"
                        textAlign={"center"}
                    >
                        <Text fontSize="6xl">
                            {timeLeft[key as keyof TimeLeft]}
                        </Text>
                        <Text>
                            {key.toUpperCase()}
                        </Text>
                    </Box>
                ))}
            </HStack>
        </Stack>
    );
};

export default Countdown;
