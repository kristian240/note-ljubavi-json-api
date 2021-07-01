import { Client } from '@datx/jsonapi-react';

import { Author } from '@/resources/Author';
import { Song } from '@/resources/Song';

class AppCollection extends Client {
	public static types = [Author, Song];
}

export default new AppCollection();
