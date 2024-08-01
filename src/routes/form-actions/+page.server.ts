import type { Actions } from './$types';
import { version } from '$app/environment';

const serverVersion = version;

interface CustomLocals extends App.Locals {
	isExpiredDeployment?: boolean;
}

export const actions = {
	/**
	 * Modify game state in reaction to a keypress. If client-side JavaScript
	 * is available, this will happen in the browser instead of here
	 */

	submit: async ({ request, locals }: { request: Request; locals: App.Locals & CustomLocals }) => {
		const formData = await request.formData();
		// const name = formData.get('name');
		const version = formData.get('version');
		// const surName = formData.get('surname') || '';
		const email = formData.get('email');
		const age = formData.get('age');
		const isClientExpired = locals.isExpiredDeployment;

		console.log(`form running...`, { formData, serverVersion, isClientExpired });

		if (!email && !age) {
			throw new Error('fields are required!');
		}

		return {
			success: `Submitted: (App version: ${version})`
		};
	}
} satisfies Actions;
