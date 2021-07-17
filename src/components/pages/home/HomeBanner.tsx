import { Box, BoxProps, Button, Container, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React, { FC } from 'react';
import NextLink from 'next/link';

export const HomeBanner: FC<BoxProps> = (props) => {
	return (
		<Box {...props}>
			<Container size="lg" centerContent py={24} textAlign="center">
				<Heading as="h1" size="4xl" letterSpacing="2px" color="primary.700">
					Note Ljubavi
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
