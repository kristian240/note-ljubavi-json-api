const parts = ['container', 'item', 'label', 'icon'];

const baseStyle = {
	container: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		right: 0,
		w: 'full',
		display: 'flex',
		justifyContent: 'space-between',
		bgColor: 'primary.900',
		px: 4,
		py: 2,
	},
	item: {
		flex: 1,
		mx: 4,
	},
};

export const BottomNavigation = {
	parts,
	baseStyle,
};
