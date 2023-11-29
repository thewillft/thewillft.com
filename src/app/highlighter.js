export default function Highlighter({ string, substrings = [] }) {
    const regex = new RegExp(`\\b(${substrings.join("|")})\\b`, "g")
    return (
        <span>
            {string.split(regex).map((part, i) => 
                substrings.includes(part)
                ? <span key={i} className="text-rose-400">{part}</span>
                : part
            )}
        </span>
    )
}