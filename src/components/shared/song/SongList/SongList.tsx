import React, { FC } from 'react';
import { Text, VStack } from '@chakra-ui/react';

import { Song } from '@/resources/Song';

interface ISongListProps {
	songList: Array<Song>;
}

export const SongList: FC<ISongListProps> = ({ songList, ...rest }) => {
	return (
		<VStack spacing={4} align="stretch" {...rest}>
			{songList.map((song) => (
				<Text key={song.id}>{song.title}</Text>
			))}
		</VStack>
	);
};
