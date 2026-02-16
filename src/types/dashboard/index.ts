import { type IconProps } from "@/components/icons";

// Common
export type UserType = "customer" | "professional";

// DashboardCard
export interface DashboardCardProps {
	children: React.ReactNode;
	className?: string;
}

// SectionHeader
export interface SectionHeaderProps {
	title: string;
	linkText?: string;
	linkHref?: string;
}

// WelcomeHeader
export interface WelcomeHeaderProps {
	name: string;
	actionLabel: string;
	actionHref: string;
	actionIcon: React.FC<IconProps>;
}

// QuickAccessGrid
export interface QuickAccessItem {
	label: string;
	href: string;
	icon: React.FC<IconProps>;
	iconBg: string;
}

export interface QuickAccessGridProps {
	items: QuickAccessItem[];
}

// StatCard
export interface StatCardProps {
	label: string;
	value: string;
	subtitle: string;
	iconBg: string;
	icon: React.FC<IconProps>;
	extra?: React.ReactNode;
}

// StarRating
export interface StarRatingProps {
	count?: number;
}

// RoleCard
export interface RoleCardProps {
	href: string;
	title: string;
	description: string;
	icon: React.FC<IconProps>;
	iconBg: string;
	iconHoverBg: string;
	iconColor: string;
}

// NotificationDropdown
export interface Notification {
	id: string;
	title: string;
	message: string;
	time: string;
	read: boolean;
	href: string;
}
