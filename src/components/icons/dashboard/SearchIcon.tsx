
import {createIcon} from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="url(#paint0_linear_3488_1198)"/>
		<path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="url(#paint1_linear_3488_1198)"/>
		<path d="M21.9999 22.7504C21.8099 22.7504 21.6199 22.6804 21.4699 22.5304L19.4699 20.5304C19.1799 20.2404 19.1799 19.7604 19.4699 19.4704C19.7599 19.1804 20.2399 19.1804 20.5299 19.4704L22.5299 21.4704C22.8199 21.7604 22.8199 22.2404 22.5299 22.5304C22.3799 22.6804 22.1899 22.7504 21.9999 22.7504Z" fill="url(#paint2_linear_3488_1198)"/>
		<path d="M21.9999 22.7504C21.8099 22.7504 21.6199 22.6804 21.4699 22.5304L19.4699 20.5304C19.1799 20.2404 19.1799 19.7604 19.4699 19.4704C19.7599 19.1804 20.2399 19.1804 20.5299 19.4704L22.5299 21.4704C22.8199 21.7604 22.8199 22.2404 22.5299 22.5304C22.3799 22.6804 22.1899 22.7504 21.9999 22.7504Z" fill="url(#paint3_linear_3488_1198)"/>
		<defs>
			<linearGradient id="paint0_linear_3488_1198" x1="11.5" y1="1.25" x2="11.5" y2="21.75" gradientUnits="userSpaceOnUse">
				<stop stop-color="#232323"/>
				<stop offset="1"/>
			</linearGradient>
			<linearGradient id="paint1_linear_3488_1198" x1="1.25159" y1="11.5017" x2="21.7516" y2="11.5017" gradientUnits="userSpaceOnUse">
				<stop stop-color="#3B82F6"/>
				<stop offset="1" stop-color="#2563EB"/>
			</linearGradient>
			<linearGradient id="paint2_linear_3488_1198" x1="20.9999" y1="19.2529" x2="20.9999" y2="22.7504" gradientUnits="userSpaceOnUse">
				<stop stop-color="#232323"/>
				<stop offset="1"/>
			</linearGradient>
			<linearGradient id="paint3_linear_3488_1198" x1="19.2527" y1="21.002" x2="22.7477" y2="21.002" gradientUnits="userSpaceOnUse">
				<stop stop-color="#3B82F6"/>
				<stop offset="1" stop-color="#2563EB"/>
			</linearGradient>
		</defs>
	</svg>


);

export const SearchDashboardIcon = createIcon(SvgContent, "SearchDashboardIcon");
export default SearchDashboardIcon;
