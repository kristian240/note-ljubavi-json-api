import { FC } from 'react';

import { MainBottomNavigation } from '@/components/shared/navigations/MainBottomNavigation/MainBottomNavigation';
import { MainNavigation } from '@/components/shared/navigations/MainNavigation/MainNavigation';
import { MainFooter } from '@/components/shared/footers/MainFooter/MainFooter';

export const MainLayout: FC = ({ children }) => (
	<>
		<MainNavigation />
		{children}
		<MainFooter />

		<MainBottomNavigation variant="flat" colorScheme="blue" />
	</>
);
