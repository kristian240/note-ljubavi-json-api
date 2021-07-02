import { createDescendantContext } from '@chakra-ui/descendant';

export const [
	BottomNavigationDescendantsProvider,
	useBottomNavigationDescendantsContext,
	useBottomNavigationDescendants,
	useBottomNavigationDescendant,
] = createDescendantContext<HTMLButtonElement>();
