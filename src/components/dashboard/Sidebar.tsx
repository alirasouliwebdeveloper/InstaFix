"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {
	BookingsIcon,
	DashboardIcon,
	JobsIcon,
	LogoutIcon,
	MessageIcon,
	QuestionIcon,
	SearchIcon,
	SettingsIcon,
} from "@/components/icons";

import type {UserType} from "@/types/dashboard";

const customerNavItems = [
	{label: "Dashboard", href: "/dashboard/customer", icon: DashboardIcon},
	{label: "Browse Services", href: "/dashboard/customer/services", icon: SearchIcon},
	{label: "My Bookings", href: "/dashboard/customer/bookings", icon: BookingsIcon},
	{label: "Messages", href: "/dashboard/customer/messages", icon: MessageIcon},
	{label: "Profile & Settings", href: "/dashboard/customer/profile", icon: SettingsIcon},
];

const professionalNavItems = [
	{label: "Dashboard", href: "/dashboard/professional", icon: DashboardIcon},
	{label: "Job Pipeline", href: "/dashboard/professional/jobs", icon: JobsIcon},
	{label: "My Bookings", href: "/dashboard/professional/bookings", icon: BookingsIcon},
	{label: "Messages", href: "/dashboard/professional/messages", icon: MessageIcon},
	{label: "Profile & Settings", href: "/dashboard/professional/profile", icon: SettingsIcon},
];

const bottomItems = [
	{label: "Help & Support", href: "/dashboard/help", icon: QuestionIcon},
	{label: "Log out", href: "/login", icon: LogoutIcon},
];

export default function Sidebar({userType}: { userType: UserType }) {
	const pathname = usePathname();
	const navItems = userType === "professional" ? professionalNavItems : customerNavItems;

	return (
		<aside className="hidden lg:flex flex-col w-[220px] min-h-0 bg-white border-r border-gray-200 py-6 justify-between">
			<nav className="flex flex-col gap-1 px-3">
				{navItems.map((item) => {
					const isActive = pathname === item.href;
					return (
						<div className="flex flex-row items-center justify-start" key={item.href}>
							{isActive ? <div className="h-full bg-[#3E50F7] w-[3px] rounded-e-2xl"/> : <div className="h-full bg-white w-[3px]"/>}
							<Link
								href={item.href}
								className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
									isActive
										? "text-[#3E50F7]"
										: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
								}`}
							>
								<item.icon className="w-5 h-5 shrink-0"/>
								{item.label}
							</Link>
						</div>
					);
				})}
			</nav>

			<nav className="flex flex-col gap-1 px-3 mt-auto">
				{bottomItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition"
					>
						<item.icon className="w-5 h-5 shrink-0"/>
						{item.label}
					</Link>
				))}
			</nav>
		</aside>
	);
}
