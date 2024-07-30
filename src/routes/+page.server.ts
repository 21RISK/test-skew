import type { Actions } from './$types';

const serverVersion = '5';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const surName = formData.get('surname') || '';
		const version = formData.get('version');

		console.log(`server version: ${serverVersion}`);
		console.log(formData);

		if (!name) {
			return {
				error: 'Name is required!'
			};
		}

		return {
			success: `Thank you for your submission, ${name} ${surName}! (App version: ${version})`
		};
	}
};
