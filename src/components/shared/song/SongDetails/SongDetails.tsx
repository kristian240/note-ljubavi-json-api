import { Song } from '@/resources/Song';
import { Box, chakra, ChakraComponent, Heading, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import React from 'react';

interface ISongDetailsProps {
	song: Song;
}

export const SongDetails: ChakraComponent<'section', ISongDetailsProps> = ({ song, ...rest }) => {
	return (
		<chakra.section {...rest}>
			<Heading as="h1" size="xl">
				{song.title}
			</Heading>

			<Box mt={4}>
				<Text>{song.lyrics}</Text>
			</Box>
		</chakra.section>
	);
};

export const SongDetailsSkeleton: ChakraComponent<'section'> = (props) => {
	return (
		<chakra.section pt={2} {...props}>
			<Skeleton height="30px" />

			<SkeletonText mt={6} spacing="12px" noOfLines={16} />
		</chakra.section>
	);
};
