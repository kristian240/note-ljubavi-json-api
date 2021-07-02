import { As, Icon, IconProps, useStyles } from '@chakra-ui/react';
import { cx, __DEV__ } from '@chakra-ui/utils';

interface IBottomNavigationIconProps extends IconProps {
	as: As<any>;
}

export const BottomNavigationIcon: React.FC<IBottomNavigationIconProps> = (props) => {
	const styles = useStyles();

	return (
		<Icon
			aria-hidden
			__css={styles.icon}
			{...props}
			className={cx('chakra-bottom-navigation__icon', props.className)}
		/>
	);
};

if (__DEV__) {
	BottomNavigationIcon.displayName = 'BottomNavigationIcon';
}
