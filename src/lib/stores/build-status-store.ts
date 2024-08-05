import { writable } from 'svelte/store';

const buildDate = new Date(__BUILD_DATE__);
// const expireInMs = 12 * 60 * 60 * 1000;
const expireInMs = 1000; // to test
const checkInterval = 30 * 1000; // 30 секунд

function createBuildStatusStore() {
	const { subscribe, set } = writable(false);

	function checkIfExpired(isUpdated: boolean) {
		const currentDate = new Date();
		if (isUpdated && currentDate.getTime() - buildDate.getTime() > expireInMs) {
			set(true);
		} else {
			set(false);
		}
	}

	function startChecking(isUpdated: boolean) {
		checkIfExpired(isUpdated); // check init

		const interval = setInterval(() => checkIfExpired(isUpdated), checkInterval);

		return () => clearInterval(interval);
	}

	return {
		subscribe,
		startChecking
	};
}

export const buildStatus = createBuildStatusStore();
