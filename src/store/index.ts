import { Client } from '@datx/jsonapi-react';

import { Author } from '@/resources/Author';

class AppCollection extends Client {
	public static types = [Author];
}

export default new AppCollection();
