import React from 'react';
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import { MainLayout } from '@/components/shared/layouts/MainLayout/MainLayout';
import { HomeBanner } from '@/components/pages/home/HomeBanner';

const Home: NextPage = () => {
	return (
		<MainLayout>
			<Box as="main" flex={1}>
				<HomeBanner h="full" />
			</Box>
		</MainLayout>
	);
};

export default Home;
