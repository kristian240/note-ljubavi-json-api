import { IError } from '@datx/jsonapi/dist/interfaces/JsonApi';

export const handleGetPropsError = (error: Array<IError> | Error) => {
	if (error instanceof Error) {
		return {
			props: {
				errorStatusCode: 500,
			},
		};
	}

	return {
		props: {
			errorStatusCode: error[0].status,
		},
	};
};
