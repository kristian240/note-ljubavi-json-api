import { extendTheme } from '@chakra-ui/react';

import { styles } from './styles';
import { colors } from './foundations/colors';
import { Container } from './components/container';
import { Heading } from './components/heading';

const overrides = {
	styles,
	colors,
	sizes: {
		sm: '400px',
		md: '560px',
		lg: '800px',
	},
	components: {
		Container,
		Heading,
	},
};

const theme = extendTheme(overrides);

export default theme;
