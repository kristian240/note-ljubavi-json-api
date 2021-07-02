import { createContext } from '@chakra-ui/react-utils';

export interface IBottomNavigationContext {
	value: number;
	onChange(newValue: number): void;
	showLabel?: 'never' | 'if-active' | 'always';
}

export const [BottomNavigationProvider, useBottomNavigationContext] = createContext<IBottomNavigationContext>({
	name: 'BottomNavigationContext',
	errorMessage:
		'useBottomNavigationContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<BottomNavigation />`',
});
