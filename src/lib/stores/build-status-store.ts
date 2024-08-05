import { writable } from 'svelte/store';

const buildDate = new Date(__BUILD_DATE__);
const expireInMs = 12 * 60 * 60 * 1000; // 12 hours
const checkInterval = 30 * 1000; // 30 seconds

function createBuildStatusStore() {
	const { subscribe, set } = writable(false);

	function checkIfExpired(isUpdated: boolean) {
		const currentDate = new Date();
		// Check if build is expired
		if (isUpdated && currentDate.getTime() - buildDate.getTime() > expireInMs) {
			set(true);
		} else {
			set(false);
		}
	}

	function startChecking(isUpdated: boolean) {
		checkIfExpired(isUpdated); // check init

		// Set interval for checking
		const interval = setInterval(() => checkIfExpired(isUpdated), checkInterval);

		// Return a function to clear the interval
		return () => clearInterval(interval);
	}

	return {
		subscribe,
		startChecking
	};
}

export const buildStatus = createBuildStatusStore();
