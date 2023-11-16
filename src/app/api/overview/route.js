import { NextResponse } from "next/server";
import { overview } from "@/constants/data";

export const GET = async () => {
	try {
		return NextResponse.json({
			message: "Products fetched successfully",
			success: true,
			overview,
		});
	} catch (error) {
		return NextResponse.json(
			{
				error: "Product loading error",
			},
			{ status: 500 }
		);
	}
};
