import type { Metadata } from "next";
import Link from "next/link";
import { SearchIcon, BookingsIcon, EmailIcon, CalenderIcon } from "@/components/icons";
import Flex from "@/components/ui/Flex";
import Grid from "@/components/ui/Grid";
import Badge from "@/components/ui/Badge";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import QuickAccessGrid from "@/components/dashboard/QuickAccessGrid";
import DashboardCard from "@/components/dashboard/DashboardCard";
import SectionHeader from "@/components/dashboard/SectionHeader";

export const metadata: Metadata = {
  title: "Customer Dashboard - InstaFix",
};

const quickAccessItems = [
  { label: "Browse Services", href: "/dashboard/customer/services", icon: SearchIcon, iconBg: "bg-[#3E50F7]" },
  { label: "My Bookings", href: "/dashboard/customer/bookings", icon: BookingsIcon, iconBg: "bg-green-500" },
  { label: "Messages", href: "/dashboard/customer/messages", icon: EmailIcon, iconBg: "bg-amber-500" },
];

const activeBookings = [
  {
    title: "Plumbing Repair",
    professional: "John Smith",
    status: "Confirmed" as const,
    date: "Feb 18, 2026",
    time: "10:00 AM",
    reference: "1253340",
  },
  {
    title: "Electrical Inspection",
    professional: "Sarah Johnson",
    status: "Pending" as const,
    date: "Feb 20, 2026",
    time: "2:00 PM",
    reference: "1253341",
  },
];

const statusVariant: Record<string, string> = {
  Confirmed: "bg-green-50 text-green-700",
  Pending: "bg-amber-50 text-amber-700",
};

export default function CustomerDashboardPage() {
  return (
    <div className="max-w-6xl">
      <WelcomeHeader
        name="Alex"
        actionLabel="Browse services"
        actionHref="/dashboard/customer/services"
        actionIcon={SearchIcon}
      />

      <QuickAccessGrid items={quickAccessItems} />

      <DashboardCard>
        <SectionHeader
          title="Active Bookings"
          linkText="View all bookings"
          linkHref="/dashboard/customer/bookings"
        />
        {activeBookings.length > 0 ? (
          <Grid cols={2} gap="sm">
            {activeBookings.map((booking) => (
              <Flex
                key={booking.reference}
                direction="col"
                gap="none"
                className="border border-gray-200 rounded-xl p-5"
              >
                <Flex align="start" justify="between" className="mb-3">
                  <h3 className="text-base font-bold text-gray-900">{booking.title}</h3>
                  <Badge variant="none" size="sm" className={`rounded-full ${statusVariant[booking.status]}`}>
                    {booking.status}
                  </Badge>
                </Flex>
                <p className="text-sm text-gray-500 mb-1">Professional: {booking.professional}</p>
                <Flex align="center" gap="sm" className="text-sm text-gray-500 mb-1">
                  <CalenderIcon size="sm" className="shrink-0" />
                  {booking.date} at {booking.time}
                </Flex>
                <p className="text-xs text-gray-400 mb-4">Ref: {booking.reference}</p>
                <Link
                  href={`/dashboard/customer/bookings/${booking.reference}`}
                  className="w-full text-center py-2.5 border border-[#3E50F7] text-[#3E50F7] rounded-lg text-sm font-medium hover:bg-blue-50 transition"
                >
                  View details
                </Link>
              </Flex>
            ))}
          </Grid>
        ) : (
          <Flex direction="col" align="center" className="py-8 text-gray-500">
            <p>No active bookings yet.</p>
            <Link href="/dashboard/customer/services" className="text-[#3E50F7] hover:underline mt-2">
              Browse services to get started
            </Link>
          </Flex>
        )}
      </DashboardCard>
    </div>
  );
}
