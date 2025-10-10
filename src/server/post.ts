'use server';

const sheet = process.env.NEXT_PUBLIC_SHEET_URL;

export async function postData(data: any) {
	const res = await fetch(sheet ?? '', {
		method: 'POST',
		body: JSON.stringify(data),
	});

	if (!res.ok) {
		throw new Error('Failed to submit form');
	}

	const jsonResponse = await res.json();
	console.log(jsonResponse);

	return jsonResponse;
}