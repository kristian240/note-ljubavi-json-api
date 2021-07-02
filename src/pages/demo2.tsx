import React from 'react';
import { NextPage } from 'next';

import { MainBottomNavigation } from '@/components/shared/navigations/MainBottomNavigation/MainBottomNavigation';

const Home: NextPage = () => {
	return <MainBottomNavigation variant="flat" colorScheme="blue" />;
};

export default Home;
