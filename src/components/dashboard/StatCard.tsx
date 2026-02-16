import Flex from "@/components/ui/Flex";
import IconBox from "@/components/ui/IconBox";
import type { StatCardProps } from "@/types/dashboard";

export default function StatCard({ label, value, subtitle, iconBg, icon: Icon, extra }: StatCardProps) {
	return (
		<div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg">
			<Flex align="start" justify="between">
				<div>
					<p className="text-sm text-colors-primary mb-2">{label}</p>
					<Flex align="center" gap="sm">
						<p className="text-2xl font-bold text-colors-primary">{value}</p>
						{extra}
					</Flex>
					<p className="text-xs text-colors-primary mt-2">{subtitle}</p>
				</div>
				<div className="p-1 rounded-2xl border border-gray-200">
					<IconBox size="sm" variant="rounded" className={`${iconBg} shadow-lg`}>
						<Icon size="sm" className="text-white" />
					</IconBox>
				</div>

			</Flex>
		</div>
	);
}
