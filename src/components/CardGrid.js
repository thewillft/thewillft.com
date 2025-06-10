export default function CardGrid({ items, renderCard, className = '' }) {
	return (
		<div className={`grid gap-4 grid-cols-1 lg:grid-cols-3 ${className}`}>
			{items.map((item, index) => {
				const card = renderCard(item, index);

				// If the card has an href property, wrap it in an anchor tag
				if (item.href) {
					return (
						<a
							key={item.id || index}
							href={item.href}
							rel="noopener noreferrer"
							target="_blank"
						>
							{card}
						</a>
					);
				}

				return card;
			})}
		</div>
	);
}