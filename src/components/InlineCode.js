export default function InlineCode({ children, className = '', ...props }) {
	return (
		<code
			className={`inline px-1 bg-[#2f2f2f] text-[#eeeeee] rounded ${className}`}
			{...props}
		>
			{children}
		</code>
	);
}