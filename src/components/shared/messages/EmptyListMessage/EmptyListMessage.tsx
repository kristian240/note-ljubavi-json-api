import React, { FC } from 'react';
import { Center, Heading, Image } from '@chakra-ui/react';

interface IEmptyListMessage {
	message?: string;
}

export const EmptyListMessage: FC<IEmptyListMessage> = ({ message }) => (
	<Center flexDirection="column" my={8}>
		<Heading as="h5" size="md" variant="tertiary">
			{message}
		</Heading>
	</Center>
);

EmptyListMessage.defaultProps = {
	message: 'Nema podataka za prikaz!',
};
