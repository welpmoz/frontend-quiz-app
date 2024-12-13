import Link from "next/link";


export default function QuizTopic({
    icon,
    title,
}) {
    return (
        // this could be a link
        <Link className="home__topic" href={title.toLowerCase()}>
            <img
                alt={`${title} topic`}
                className="home__topic-icon"
                src={icon}
            />
            <span className="home__topic-label">{title}</span>
        </Link>
    );
}