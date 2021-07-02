import { SearchIcon, StarIcon } from '@chakra-ui/icons';
import React, { FC, useState } from 'react';

import { BottomNavigation } from '@/components/shared/core/BottomNavigation/BottomNavigation';
import { BottomNavigationItem } from '@/components/shared/core/BottomNavigation/BottomNavigationItem';
import { BottomNavigationIcon } from '@/components/shared/core/BottomNavigation/BottomNavigationIcon';
import { BottomNavigationLabel } from '@/components/shared/core/BottomNavigation/BottomNavigationLabel';

interface IMainBottomNavigationProps {}

export const MainBottomNavigation: FC<IMainBottomNavigationProps> = ({ ...rest }) => {
	const [index, setIndex] = useState(0);

	return (
		<BottomNavigation value={index} onChange={setIndex}>
			<BottomNavigationItem>
				<BottomNavigationIcon as={StarIcon} />
				<BottomNavigationLabel>Početna</BottomNavigationLabel>
			</BottomNavigationItem>

			<BottomNavigationItem>
				<BottomNavigationIcon as={SearchIcon} />
				<BottomNavigationLabel>Traži</BottomNavigationLabel>
			</BottomNavigationItem>

			<BottomNavigationItem>
				<BottomNavigationIcon as={StarIcon} />
				<BottomNavigationLabel>Favoriti</BottomNavigationLabel>
			</BottomNavigationItem>
		</BottomNavigation>
	);
};
