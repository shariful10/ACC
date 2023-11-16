import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";

export const metadata = {
	title: "Dashboard | ACC",
	description: "Generated by create next app",
};

const DashboardLayout = ({ children }) => {
	return (
		<div className="relative min-h-screen md:flex">
			<Sidebar />
			<div className="flex-1  md:ml-64">
				<div className="p-5">{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;