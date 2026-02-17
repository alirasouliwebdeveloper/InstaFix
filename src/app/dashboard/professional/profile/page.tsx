"use client";

import { useState } from "react";
import Image from "next/image";
import { Flex, Button } from "@/components/ui";
import DashboardCard from "@/components/dashboard/DashboardCard";
import {
	CameraIcon,
	PlusIcon,
	CheckCircleIcon,
	DocumentIcon,
	UploadIcon,
	MoreVerticalIcon,
} from "@/components/icons";
import avatar1 from "@/assets/web/images/avatarImages/Avatar_Image_2.png";

interface Service {
	id: string;
	name: string;
	description: string;
	rate: string;
	enabled: boolean;
}

const initialServices: Service[] = [
	{
		id: "1",
		name: "Basement Development",
		description: "Renovation, framing, and finishing",
		rate: "$65/hr",
		enabled: true,
	},
	{
		id: "2",
		name: "Furniture Assembly",
		description: "IKEA, Wayfair, and custom furniture",
		rate: "$40/hr",
		enabled: true,
	},
	{
		id: "3",
		name: "Plumbing Minor Fixes",
		description: "Leaky faucets, pipe checks",
		rate: "$55/hr",
		enabled: false,
	},
];

const verificationDocs = [
	{
		label: "Government ID",
		status: "Verified on Jan 10",
		statusColor: "text-teal-500",
		icon: "shield",
	},
	{
		label: "Liability Insurance",
		status: "Expires Dec 2025",
		statusColor: "text-gray-500",
		icon: "document",
	},
	{
		label: "Upload Certificate",
		status: "Trade tickets, etc.",
		statusColor: "text-red-400",
		icon: "upload",
	},
];

export default function ProfilePage() {
	const [services, setServices] = useState(initialServices);

	const toggleService = (id: string) => {
		setServices((prev) =>
			prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
		);
	};

	return (
		<div>
			<h1 className="text-2xl font-bold text-colors-primary mb-1">Profile Management</h1>
			<p className="text-sm text-gray-500 mb-6">Manage your public profile, services, and verification status.</p>

			<div className="flex gap-6">
				{/* Left Column — Profile Form */}
				<div className="w-[420px] shrink-0">
					<DashboardCard>
						{/* Avatar */}
						<Flex direction="col" align="center" className="mb-6">
							<div className="relative mb-3">
								<Image
									src={avatar1}
									alt="Profile"
									width={100}
									height={100}
									className="rounded-full border-4 border-white shadow-md"
								/>
							</div>
							<button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-800 transition">
								<CameraIcon size="sm" />
								Change Photo
							</button>
						</Flex>

						{/* Form Fields */}
						<div className="space-y-5">
							<div>
								<label className="block text-sm font-medium text-gray-500 mb-1.5">Full Name</label>
								<input
									type="text"
									defaultValue="Alex Johnson"
									className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-colors-primary focus:outline-none focus:ring-2 focus:ring-[#3E50F7]/20 focus:border-[#3E50F7]"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-500 mb-1.5">Email Address</label>
								<input
									type="email"
									defaultValue="alex.j@instafix.com"
									className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-colors-primary focus:outline-none focus:ring-2 focus:ring-[#3E50F7]/20 focus:border-[#3E50F7]"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-500 mb-1.5">Phone Number</label>
								<input
									type="tel"
									defaultValue="+1 (780) 555-0129"
									className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-colors-primary focus:outline-none focus:ring-2 focus:ring-[#3E50F7]/20 focus:border-[#3E50F7]"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-500 mb-1.5">Location</label>
								<input
									type="text"
									defaultValue="Edmonton, AB"
									className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-colors-primary focus:outline-none focus:ring-2 focus:ring-[#3E50F7]/20 focus:border-[#3E50F7]"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-500 mb-1.5">Bio</label>
								<textarea
									defaultValue="Expert handyman with 10+ years of experience in home repairs, plumbing basics, and furniture assembly. Dedicated to high-quality service."
									rows={4}
									className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-colors-primary font-mono focus:outline-none focus:ring-2 focus:ring-[#3E50F7]/20 focus:border-[#3E50F7] resize-none"
								/>
							</div>

							<Button variant="primary" size="md" className="w-full">
								Save Changes
							</Button>
						</div>
					</DashboardCard>
				</div>

				{/* Right Column */}
				<div className="flex-1 space-y-6">
					{/* My Services */}
					<DashboardCard>
						<Flex justify="between" align="center" className="mb-5">
							<h2 className="text-[20px] font-semibold text-colors-primary">My Services</h2>
							<Button variant="primary" size="sm" className="gap-1.5">
								<PlusIcon size={14} className="text-white" />
								Add New Service
							</Button>
						</Flex>

						<div className="space-y-0">
							{services.map((service) => (
								<Flex
									key={service.id}
									justify="between"
									align="center"
									className="py-4 border-b border-gray-100 last:border-0"
								>
									<div>
										<h3 className="text-sm font-semibold text-colors-primary">{service.name}</h3>
										<p className="text-xs text-gray-500">{service.description}</p>
									</div>
									<Flex align="center" gap="md">
										<span className="text-sm font-semibold text-colors-primary">{service.rate}</span>
										{/* Toggle */}
										<button
											onClick={() => toggleService(service.id)}
											className={`relative w-11 h-6 rounded-full transition-colors ${
												service.enabled ? "bg-[#3E50F7]" : "bg-gray-200"
											}`}
										>
											<span
												className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
													service.enabled ? "translate-x-5" : "translate-x-0"
												}`}
											/>
										</button>
										<button className="text-gray-400 hover:text-gray-600">
											<MoreVerticalIcon size="sm" />
										</button>
									</Flex>
								</Flex>
							))}
						</div>
					</DashboardCard>

					{/* Verification Documents */}
					<DashboardCard>
						<Flex justify="between" align="center" className="mb-5">
							<h2 className="text-[20px] font-semibold text-colors-primary">Verification Documents</h2>
							<Flex align="center" gap="xs" className="px-3 py-1 bg-green-50 rounded-full">
								<CheckCircleIcon size={14} className="text-green-500" />
								<span className="text-xs font-medium text-green-600">Identity Verified</span>
							</Flex>
						</Flex>

						<div className="grid grid-cols-3 gap-4">
							{verificationDocs.map((doc) => (
								<div
									key={doc.label}
									className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-300 transition cursor-pointer"
								>
									<div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-3">
										{doc.icon === "shield" && <CheckCircleIcon size="lg" className="text-teal-500" />}
										{doc.icon === "document" && <DocumentIcon size="lg" className="text-gray-400" />}
										{doc.icon === "upload" && <UploadIcon size="lg" className="text-red-400" />}
									</div>
									<p className="text-sm font-medium text-colors-primary mb-1">{doc.label}</p>
									<p className={`text-xs ${doc.statusColor}`}>{doc.status}</p>
								</div>
							))}
						</div>
					</DashboardCard>
				</div>
			</div>
		</div>
	);
}
