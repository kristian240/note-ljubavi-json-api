import React, { FC } from 'react';
import { Button, Container, Heading, Center } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ArrowBackIcon } from '@chakra-ui/icons';

const NotFound: FC = () => {
	return (
		<Container h="full">
			<Center h="full" flexDirection="column">
				<Heading size="4xl" variant="tertiary">
					404
				</Heading>

				<Heading as="h1" size="xl" variant="tertiary" mt={8}>
					Stranica ne postoji!
				</Heading>

				<NextLink href="/" passHref>
					<Button as="a" mt={8} leftIcon={<ArrowBackIcon />}>
						Natrag na početnu stranicu
					</Button>
				</NextLink>
			</Center>
		</Container>
	);
};

export default NotFound;
