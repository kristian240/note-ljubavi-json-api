import { Center, CenterProps, HStack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IErrorMessageProps extends CenterProps {
	message?: string;
}

export const ErrorMessage: FC<IErrorMessageProps> = ({ message, ...rest }) => (
	<Center h="full" {...rest}>
		<HStack spacing={4}>
			<Text ml={10} fontSize="3xl">
				{message}
			</Text>
		</HStack>
	</Center>
);
