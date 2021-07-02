import React, { FC } from 'react';
import { Center, CenterProps, HStack, Spinner, Text } from '@chakra-ui/react';

interface ILoadingMessage extends CenterProps {
	message?: string;
}

export const LoadingMessage: FC<ILoadingMessage> = ({ message, ...rest }) => (
	<Center h="full" {...rest}>
		<HStack spacing={4}>
			<Spinner />

			<Text ml={10} fontSize="3xl">
				{message}
			</Text>
		</HStack>
	</Center>
);

LoadingMessage.defaultProps = {
	message: 'Učitavanje...',
};
