export function DateStringToReadable(dstring) {
	const [year, month] = dstring.split('-').map(Number);
	const date = new Date(year, month - 1);
	return date.toLocaleString('default', { month: 'long', year: 'numeric' });
}
