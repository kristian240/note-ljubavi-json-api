import { chakra, forwardRef, HTMLChakraProps, StylesProvider, SystemStyleObject, useStyles } from '@chakra-ui/react';
import { cx, __DEV__ } from '@chakra-ui/utils';
import { mergeRefs } from '@chakra-ui/react-utils';
import React, { useMemo, MouseEvent } from 'react';

import { useBottomNavigationContext } from './useBottomNavigationContext';
import { useBottomNavigationDescendant } from './useBottomNavigationDescendants';
import { BottomNavigationItemProvider } from './useBottomNavigationItemContext';

interface IBottomNavigationItemProps extends HTMLChakraProps<'button'> {}

export const BottomNavigationItem = forwardRef<IBottomNavigationItemProps, 'button'>((props, ref) => {
	const isDisabled = props.disabled || false;

	const styles = useStyles();

	const context = useBottomNavigationContext();

	const { index, register } = useBottomNavigationDescendant({
		disabled: isDisabled,
	});

	const isSelected = index === context.value;

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		props.onClick?.(e);
		context.onChange(index);
	};

	const itemStyles: SystemStyleObject = {
		opacity: isDisabled || !isSelected ? 0.4 : 1,
		...styles.item,
	};

	const ctx = useMemo(() => ({ isDisabled, isSelected }), [isDisabled, isSelected]);

	return (
		<BottomNavigationItemProvider value={{ isSelected, isDisabled }}>
			<StylesProvider value={styles}>
				<chakra.button
					ref={mergeRefs(register, ref)}
					className={cx('chakra-bottom-navigation__item', props.className)}
					__css={itemStyles}
					{...props}
					onClick={handleClick}
				/>
			</StylesProvider>
		</BottomNavigationItemProvider>
	);
});

// if (__DEV__) {
// 	BottomNavigationItem.displayName = 'BottomNavigationItem';
// }
