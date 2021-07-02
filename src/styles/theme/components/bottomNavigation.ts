import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

const parts = ['container', 'item', 'label', 'icon'];

const baseStyle = {
	container: {
		position: 'fixed',
		display: 'flex',
		justifyContent: 'space-between',

		px: 4,
		py: 2,
	},
	item: {
		flex: 1,
		mx: 4,
	},
};

function variantFlat(props: Dict) {
	const { colorScheme: c } = props;

	return {
		container: {
			bottom: 0,
			left: 0,
			right: 0,

			color: mode(`${c}.900`, `#fff`)(props),
			bg: mode(`${c}.300`, `${c}.900`)(props),

			boxShadow: 'lg',
		},
	};
}

function variantFloat(props: Dict) {
	const flatVariantStyles = variantFlat(props);

	return {
		...flatVariantStyles,
		container: {
			...flatVariantStyles.container,

			bottom: 4,
			left: 4,
			right: 4,

			borderRadius: 'base',
		},
	};
}

const variants = {
	flat: variantFlat,
	float: variantFloat,
};

const defaultProps = {
	variant: 'float',
	colorScheme: 'primary',
};

export const BottomNavigation = {
	parts,
	baseStyle,
	variants,
	defaultProps,
};
