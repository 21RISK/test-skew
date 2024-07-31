import type { Actions } from './$types';

const serverVersion = '2.9.6';

export const actions = {
	/**
	 * Modify game state in reaction to a keypress. If client-side JavaScript
	 * is available, this will happen in the browser instead of here
	 */

	submit: async ({ request }) => {
		const formData = await request.formData();
		// const name = formData.get('name');
		const version = formData.get('version');
		// const surName = formData.get('surname') || '';
		const email = formData.get('email');
		const age = formData.get('age');

		console.log(`server version: ${serverVersion}`);
		console.log(`enhanced: ${formData}`);

		if (!email && !age) {
			throw new Error('fields are required!');
		}

		return {
			success: `Submitted: (App version: ${version})`
		};
	}
} satisfies Actions;
