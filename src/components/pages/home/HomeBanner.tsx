import { Box, BoxProps, Button, Container, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React, { FC } from 'react';
import NextLink from 'next/link';

export const HomeBanner: FC<BoxProps> = (props) => {
	const bgColor = useColorModeValue('primary.300', 'primary.900');

	return (
		<Box bgColor={bgColor} {...props}>
			<Container size="lg" centerContent py={24}>
				<Heading as="h1" size="4xl" letterSpacing="2px" color="white">
					Note Ljubavi
				</Heading>

				<Heading as="h2" size="md" mt={5} color="whiteAlpha.800">
					Tko pjeva, dvostruko moli
				</Heading>

				<VStack spacing={4} mt={10}>
					<NextLink href="/songs" passHref>
						<Button as="a" size="lg" colorScheme="primary" rightIcon={<ArrowForwardIcon />}>
							Pjesme
						</Button>
					</NextLink>
				</VStack>
			</Container>
		</Box>
	);
};
