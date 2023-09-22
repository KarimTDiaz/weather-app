export const formatDateAndFilterByCurrent = data => {
	const date = new Date();
	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const finalDay = `${year}-${month}-${day}`;

	const result = data.list.filter(item => {
		const parts = item.dt_txt.split(' ');
		return parts[0] === finalDay;
	});

	return result;
};
