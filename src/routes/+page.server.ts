import type { Actions } from './$types';

const serverVersion = '2.8';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		// const name = formData.get('name');
		const version = formData.get('version');
		// const surName = formData.get('surname') || '';
		const email = formData.get('email');
		const age = formData.get('age');

		console.log(`server version: ${serverVersion}`);
		console.log(formData);

		if (!email && !age) {
			throw new Error('fields are required!');
		}

		return {
			success: `Submitted: (App version: ${version})`
		};
	}
};
