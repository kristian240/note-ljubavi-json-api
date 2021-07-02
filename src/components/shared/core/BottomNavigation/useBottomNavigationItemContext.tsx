import { createContext } from '@chakra-ui/react-utils';

export interface IBottomNavigationItemContext {
	isDisabled?: boolean;
	isSelected: boolean;
}

export const [BottomNavigationItemProvider, useBottomNavigationItemContext] =
	createContext<IBottomNavigationItemContext>({
		name: 'BottomNavigationItemContext',
		errorMessage:
			'useBottomNavigationItemContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<BottomNavigationItem />`',
	});
