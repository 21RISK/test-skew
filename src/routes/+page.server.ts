import type { Actions } from './$types';

const serverVersion = '7';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const surName = formData.get('surname') || '';
		const version = formData.get('version');
		const email = formData.get('email');
		const age = formData.get('age');

		console.log(`server version: ${serverVersion}`);
		console.log(formData);

		if (!name && !email) {
			return {
				error: 'Name / email are required!'
			};
		}

		if (!age) {
			throw new Error('Age is required!');
		}

		return {
			success: `Thank you for your submission, ${name} ${surName}! (App version: ${version})`
		};
	}
};
