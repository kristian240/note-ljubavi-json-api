import React, { FC } from 'react';
import { Container, Text } from '@chakra-ui/react';

import { FooterWrapper } from './MainFooter.elements';

export const MainFooter: FC = () => {
	return (
		<FooterWrapper>
			<Container size="lg">
				<Text textAlign="center">Note Ljubavi © 2021</Text>
			</Container>
		</FooterWrapper>
	);
};
