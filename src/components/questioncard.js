export default function QuestionCard({ question, answer }) {
	return (
		<div className="p-4 h-full shadow shadow-md rounded border border-card-border bg-card">
			<div className="flex items-center mb-2">
				<h1 className="mr-1 text-md">{question}</h1>
			</div>
			<div className="">
				<p className="text-sm text-muted">{answer}</p>
			</div>
		</div>
	);
}
