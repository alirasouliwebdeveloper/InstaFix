import {InputHTMLAttributes} from "react";
import {Flex} from "@/components/ui";
import {Input, Label} from "@/components/form";


interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
	error?: string;
}

export default function Checkbox({
																	 label,
																	 error,
																	 className = "",
																	 id,
																	 ...props
																 }: CheckboxProps) {
	return (
		<Flex direction="row" gap="sm" align="start" justify="start">
			<div className="w-14">
				<Input
					type="checkbox"
					id={id}
					className={`h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 
					focus:bg-gradient-to-r from-btn-primary-from to-btn-primary-to transition
					 cursor-pointer ${
						error ? "border-red-500" : ""
					} ${className}`}
					{...props}
				/>
			</div>
			<Label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
				{label && <span className="text-sm text-colors-primary">{label}</span>}
			</Label>
			{error && <span className="text-red-500 text-xs mt-1">{error}</span>}
		</Flex>
	);
}
