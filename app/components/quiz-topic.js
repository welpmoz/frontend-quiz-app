export default function QuizTopic({
    iconPath,
    topic,
}) {
    return (
        // this could be a link
        <div className="quiz__topic">
            <img
                alt={`${topic} topic`}
                className="quiz__topic-icon"
                src={`${iconPath}`}
            />
            <span className="quiz__topic-label">{topic}</span>
        </div>
    );
}