import {
	chakra,
	forwardRef,
	HTMLChakraProps,
	omitThemingProps,
	StylesProvider,
	ThemingProps,
	useMultiStyleConfig,
} from '@chakra-ui/react';
import { cx, __DEV__ } from '@chakra-ui/utils';
import React from 'react';

import { BottomNavigationProvider, IBottomNavigationContext } from './useBottomNavigationContext';
import { BottomNavigationDescendantsProvider, useBottomNavigationDescendants } from './useBottomNavigationDescendants';

interface IBottomNavigationProps
	extends Omit<HTMLChakraProps<'nav'>, 'onChange'>,
		ThemingProps<'BottomNavigation'>,
		IBottomNavigationContext {}

export const BottomNavigation = forwardRef<IBottomNavigationProps, 'nav'>(
	({ value, onChange, showLabel, ...props }, ref) => {
		const styles = useMultiStyleConfig('BottomNavigation', props);
		const ownProps = omitThemingProps(props);

		const descendants = useBottomNavigationDescendants();

		const ctx = React.useMemo(() => ({ value, onChange, showLabel }), [value, onChange, showLabel]);

		return (
			<BottomNavigationProvider value={ctx}>
				<BottomNavigationDescendantsProvider value={descendants}>
					<StylesProvider value={styles}>
						<chakra.nav
							ref={ref}
							className={cx('chakra-bottom-navigation', props.className)}
							__css={styles.container}
							{...ownProps}
						/>
					</StylesProvider>
				</BottomNavigationDescendantsProvider>
			</BottomNavigationProvider>
		);
	}
);

if (__DEV__) {
	BottomNavigation.displayName = 'BottomNavigation';
}

BottomNavigation.defaultProps = {
	showLabel: 'always',
};
