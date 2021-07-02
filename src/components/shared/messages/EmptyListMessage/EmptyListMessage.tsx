import React, { FC } from 'react';
import { Center, CenterProps, Heading } from '@chakra-ui/react';

interface IEmptyListMessage extends CenterProps {
	message?: string;
}

export const EmptyListMessage: FC<IEmptyListMessage> = ({ message, children }) => (
	<Center flexDirection="column" my={8}>
		<Heading as="h5" size="md" variant="tertiary">
			{message}
		</Heading>
	</Center>
);

EmptyListMessage.defaultProps = {
	message: 'Nema podataka za prikaz!',
};
