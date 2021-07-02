import { chakra, forwardRef, HTMLChakraProps, StylesProvider, SystemStyleObject, useStyles } from '@chakra-ui/react';
import { cx, __DEV__ } from '@chakra-ui/utils';
import React from 'react';

import { useBottomNavigationContext } from './useBottomNavigationContext';
import { useBottomNavigationItemContext } from './useBottomNavigationItemContext';

interface IBottomNavigationLabelProps extends HTMLChakraProps<'div'> {}

export const BottomNavigationLabel = forwardRef<IBottomNavigationLabelProps, 'div'>((props, ref) => {
	const { showLabel } = useBottomNavigationContext();
	const { isSelected, isDisabled } = useBottomNavigationItemContext();
	const styles = useStyles();

	if (showLabel === 'never') {
		return null;
	}

	if (showLabel === 'if-active' && !isSelected) {
		return null;
	}

	const labelStyles: SystemStyleObject = {
		flex: 1,
		...styles.label,
	};

	return (
		<StylesProvider value={styles}>
			<chakra.div
				ref={ref}
				className={cx('chakra-bottom-navigation__label', props.className)}
				__css={labelStyles}
				{...props}
			/>
		</StylesProvider>
	);
});

if (__DEV__) {
	BottomNavigationLabel.displayName = 'BottomNavigationLabel';
}
