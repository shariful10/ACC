const url = "http://localhost:3000"

export const getOverview = async () => {
	const res = await fetch(`${url}/api/overview`);
	if (!res.ok) {
		throw new Error("Faield to fetch products");
	}
   return res.json();
};
