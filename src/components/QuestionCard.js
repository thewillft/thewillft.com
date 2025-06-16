import Card from '@/components/Card';

export default function QuestionCard({ question, answer }) {
	return (
		<Card>
			<div className="flex items-center mb-2">
				<h1 className="mr-1 text-md">{question}</h1>
			</div>
			<div className="">
				<p className="text-sm text-neutral-400">{answer}</p>
			</div>
		</Card>
	);
}