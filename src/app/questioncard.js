export default function QuestionCard({ question, answer }) {
    return (
      <div className="p-4 h-full shadow shadow-md rounded border border-neutral-600/25 bg-[#1b1b1b]">
        <div className="flex items-center mb-2">
            <h1 className="mr-1 text-md">{question}</h1>
        </div>
        <div className="">
            <p className="text-sm text-neutral-400">{answer}</p>
        </div>
      </div>
    )
  }