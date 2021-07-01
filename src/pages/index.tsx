import React from 'react';
import { NextPage } from 'next';

import { MainLayout } from '@/components/shared/layouts/MainLayout/MainLayout';

const Home: NextPage = () => {
	return (
		<MainLayout>
			<h1>Hello world!</h1>
		</MainLayout>
	);
};

export default Home;
