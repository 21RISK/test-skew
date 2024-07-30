import type { Actions } from './$types';

const serverVersion = '2.0';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const version = formData.get('version');
		// const surName = formData.get('surname') || '';
		// const email = formData.get('email');
		// const age = formData.get('age');

		console.log(`server version: ${serverVersion}`);
		console.log(formData);

		// if (!name && !email) {
		// 	return {
		// 		error: 'Name / email are required!'
		// 	};
		// }

		// if (!age) {
		// 	throw new Error('Age is required!');
		// }

		return {
			success: `Submitted: ${name}! (App version: ${version})`
		};
	}
};
