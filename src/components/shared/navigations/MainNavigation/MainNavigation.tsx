import React, { FC } from 'react';
import { Flex, Heading, HStack, Icon, IconButton, Link, LinkBox, LinkOverlay, useColorMode } from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { NavigationWrapper } from './MainNavigation.elements';

import LogoIcon from '@/assets/icons/ic-logo.svg';
import MoonIcon from '@/assets/icons/ic-moon.svg';
import SunIcon from '@/assets/icons/ic-sun.svg';

export const MainNavigation: FC = () => {
	const { pathname } = useRouter();
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<NavigationWrapper>
			<Flex justify="space-between" align="center" color={colorMode === 'light' ? 'primary.700' : 'white'}>
				<NextLink href="/" passHref>
					<IconButton
						as={Link}
						aria-label="Početna stranica"
						variant="ghost"
						icon={<Icon as={LogoIcon} boxSize={6} />}
					/>
				</NextLink>

				<LinkBox>
					<NextLink href="/" passHref>
						<LinkOverlay>
							<Heading as="span" size="lg">
								Note Ljubavi
							</Heading>
						</LinkOverlay>
					</NextLink>
				</LinkBox>

				<HStack spacing={2}>
					<NextLink href="/songs" passHref>
						<Heading
							as={Link}
							size="sm"
							aria-current={['/songs', '/songs/[id]'].includes(pathname) ? 'page' : undefined}
							display={{ base: 'none', lg: 'block' }}
						>
							Pjesme
						</Heading>
					</NextLink>

					<IconButton
						aria-label="Promjeni temu"
						onClick={toggleColorMode}
						icon={<Icon boxSize={4} as={colorMode === 'light' ? MoonIcon : SunIcon} />}
					/>
				</HStack>
			</Flex>
		</NavigationWrapper>
	);
};
