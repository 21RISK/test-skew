import { writable } from 'svelte/store';
import { updated } from '$app/stores';

const buildDate = new Date(__BUILD_DATE__);
const expireInMs = 1000 * 60 * 60 * 12; // 12 hours in ms
// const expireInMs = 12 * 60 * 60 * 1000; // 12 hours
const checkInterval = 30 * 1000; // 30 seconds

function createBuildStatusStore() {
	const { subscribe, set } = writable(false);

	function checkIfExpired(isUpdated: boolean) {
		const currentDate = new Date();
		console.log({ isUpdated, currentDate, buildDate });
		// Check if build is expired
		if (isUpdated) {
			set(currentDate.getTime() - buildDate.getTime() > expireInMs);
		}
	}

	function startChecking() {
		updated.subscribe((isUpdated) => {
			checkIfExpired(isUpdated); // Initial check
			const interval = setInterval(() => checkIfExpired(isUpdated), checkInterval); // Set interval for checking

			return () => clearInterval(interval); // Clear the interval when unsubscribed
		});
	}

	return {
		subscribe,
		startChecking
	};
}

export const isExpired = createBuildStatusStore();
