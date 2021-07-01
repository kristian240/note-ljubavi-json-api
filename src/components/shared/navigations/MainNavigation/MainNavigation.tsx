import React, { FC } from 'react';
import { Flex, Heading, HStack, Icon, IconButton, Link, LinkBox, LinkOverlay, useColorMode } from '@chakra-ui/react';
import { ariaAttr } from '@chakra-ui/utils';
import NextLink from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { NavigationWrapper } from './MainNavigation.elements';

import MoonIcon from '@/assets/icons/ic-moon.svg';
import SunIcon from '@/assets/icons/ic-sun.svg';

export const MainNavigation: FC = () => {
	const { pathname } = useRouter();
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<NavigationWrapper>
			<Flex justify="space-between" align="center" color={colorMode === 'light' ? 'primary.700' : 'white'}>
				<LinkBox>
					<NextLink href="/" passHref>
						<LinkOverlay>
							<Heading as="span" size="lg">
								Note Ljubavi
							</Heading>
						</LinkOverlay>
					</NextLink>
				</LinkBox>

				<HStack spacing={4}>
					<NextLink href="/songs" passHref>
						<Heading as={Link} size="sm" aria-current={ariaAttr(['/songs', '/songs/[id]'].includes(pathname))}>
							Pjesme
						</Heading>
					</NextLink>

					<IconButton
						aria-label="Toggle color mode"
						onClick={toggleColorMode}
						icon={<Icon boxSize="16px" as={colorMode === 'light' ? MoonIcon : SunIcon} />}
					/>
				</HStack>
			</Flex>
		</NavigationWrapper>
	);
};
