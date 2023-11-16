export const getOverview = async () => {
	const res = await fetch("http://localhost:3000/api/overview");
	if (!res.ok) {
		throw new Error("Faield to fetch products");
	}
   return res.json();
};
