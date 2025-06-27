/**
 * Check if a URL is local (same origin) or external
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL is local, false if external
 */
export const isLocalUrl = (url) => {
	if (!url) return false;
	try {
		const urlObj = new URL(url, window.location.origin);
		return urlObj.origin === window.location.origin;
	}
	catch {
		// If URL parsing fails, assume it's a relative path (local)
		return !url.startsWith('http://') && !url.startsWith('https://');
	}
};