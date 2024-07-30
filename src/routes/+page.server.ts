import type { Actions } from './$types';

const serverVersion = '6';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const surName = formData.get('surname') || '';
		const version = formData.get('version');
		const email = formData.get('email');

		console.log(`server version: ${serverVersion}`);
		console.log(formData);

		if (!name && !email) {
			return {
				error: 'Name / email are required!'
			};
		}

		return {
			success: `Thank you for your submission, ${name} ${surName}! (App version: ${version})`
		};
	}
};
