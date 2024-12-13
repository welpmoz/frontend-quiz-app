'use client';

import { usePathname } from "next/navigation";

export default function HeaderTopic({
	topic,
	icon,
}) {
	const pathname = usePathname();
	const isHome = pathname === '/';

	return (
		<div className={`
			header__topic header__topic--${isHome ? 'hidden' : 'visible'}
		`}>
			<div className="home__topic-icon">
				<img
					alt={`${topic} topic`}
					className="home__icon"
					src={icon}
				/>
			</div>
			<span>{topic}</span>
		</div>
	);
}