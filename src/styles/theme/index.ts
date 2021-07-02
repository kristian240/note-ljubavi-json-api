import { extendTheme } from '@chakra-ui/react';

import { styles } from './styles';
import { colors } from './foundations/colors';
import { BottomNavigation } from './components/bottomNavigation';
import { Container } from './components/container';
import { Link } from './components/link';
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
		BottomNavigation,
		Container,
		Heading,
		Link,
	},
};

const theme = extendTheme(overrides);

export default theme;
