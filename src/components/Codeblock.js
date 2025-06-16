import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';

export default function Codeblock({ children, language }) {
	return (
		<SyntaxHighlighter
			className="rounded"
			code={children || ''}
			language={language || 'jsx'}
			style={atomOneDark}
		/>
	);
}