import { DateStringToReadable } from '@/libs/date';

export default function Experience({ title, subtitle, from, to, bullets }) {
	return (
		<div className="mt-3">
			<div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start">
				<h2 className="font-semibold text-lg mr-1">{title}</h2>
				<span className="font-normal text-sm text-muted">
					&#40;
					<time dateTime={from}>{DateStringToReadable(from)}</time>
					&nbsp; - &nbsp;
					{to === 'Present' ? (
						<span>Present</span>
					) : (
						<time dateTime={to}>{DateStringToReadable(to)}</time>
					)}
					&#41;
				</span>
			</div>
			<h3>{subtitle}</h3>
			<ul className="list-disc pl-5">
				{bullets?.map((bullet, index) => (
					<li className="text-muted" key={index}>
						{bullet}
					</li>
				))}
			</ul>
		</div>
	);
}
