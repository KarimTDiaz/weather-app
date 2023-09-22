import { useEffect, useState } from 'react';

const fetchData = async (fetchInfo, signal) => {
	if (!fetchInfo) return;

	try {
		const response = await fetch(fetchInfo);
		if (!response.ok) {
			return;
		}
		const finalData = await response.json();
		return finalData;
	} catch (err) {
		throw err;
	}
};

export const useFetch = initialFetch => {
	const [fetchStatus, setFetchStatus] = useState({
		finalData: undefined,
		loading: true,
		error: undefined
	});
	const [fetchInfo, setFetchInfo] = useState(initialFetch);

	useEffect(() => {
		const controller = new AbortController();

		const fetchDataAndStore = async () => {
			try {
				const dataArray = await Promise.all(
					fetchInfo.map(info => fetchData(info, controller.signal))
				);

				setFetchStatus({
					finalData: dataArray,
					loading: false,
					error: undefined
				});
			} catch (err) {
				setFetchStatus({
					finalData: [],
					loading: false,
					error: err
				});
			}
		};
		fetchDataAndStore();
		return () => controller.abort();
	}, [fetchInfo]);

	return { ...fetchStatus, setFetchInfo };
};
