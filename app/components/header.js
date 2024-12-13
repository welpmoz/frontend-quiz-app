import HeaderTopic from "./header-topic";
import ThemeToggler from "./theme-toggler";

export default function Header({
  topic,
  icon,
}) {
  return (
    <header className="header grid-wrapper grid-wrapper--header">
      <ThemeToggler />
      {(topic && icon) && <HeaderTopic topic={topic} icon={icon} />}
    </header>
  );
}