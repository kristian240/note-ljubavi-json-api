import React, { FC } from 'react';
import NextLink from 'next/link';
import { HStack, IconButton, Link } from '@chakra-ui/react';

import { Song } from '@/resources/Song';
import { useMemo } from 'react';

interface ISongListItemProps {
	song: Song;
}

export const SongListItem: FC<ISongListItemProps> = ({ song }) => {
	const songHref = useMemo(() => `/songs/${song.slug}-${song.id}`, [song.slug, song.id]);

	return (
		<HStack>
			<NextLink href={songHref} passHref>
				<Link flex={1}>{song.title}</Link>
			</NextLink>
		</HStack>
	);
};
