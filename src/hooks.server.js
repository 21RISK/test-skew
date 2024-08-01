export async function handle({ event, resolve }) {
	const currentDeploymentId = process.env.VERCEL_DEPLOYMENT_ID;

	const cookies = event.request.headers.get('cookie');
	let deploymentId;

	if (cookies) {
		const match = cookies.match(/__vdpl=([^;]+)/);
		if (match) {
			deploymentId = match[1];
		}
	}

	const isExpiredDeployment = deploymentId && deploymentId !== currentDeploymentId;

	event.locals.isExpiredDeployment = isExpiredDeployment;

	return resolve(event);
}
