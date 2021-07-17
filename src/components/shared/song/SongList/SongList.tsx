import React, { FC } from 'react';
import { Divider, StackProps, VStack } from '@chakra-ui/react';

import { Song } from '@/resources/Song';
import { SongListItem } from '@/components/shared/song/SongList/SongListItem';

interface ISongListProps extends StackProps {
	songList: Array<Song>;
}

export const SongList: FC<ISongListProps> = ({ songList, ...rest }) => {
	return (
		<VStack w="full" spacing={4} align="stretch" divider={<Divider opacity="0.4" />} {...rest}>
			{songList.map((song) => (
				<SongListItem key={song.id} song={song} />
			))}
		</VStack>
	);
};
