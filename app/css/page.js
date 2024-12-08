export default function Page() {
	return (
		<form>
			<div>
				<span>Question 6 of 10</span>
				<label htmlFor="">
					Which of these color contrast ratios defines the minimun WCAG 2.1 Level AA requirement for normal text?
				</label>
				<div className="stepper"></div>
			</div>

			<div>
				<ul>
					<li>
						<input type="checkbox" />
						<label htmlFor=""></label>
					</li>
					<li>3:1</li>
					<li>2.5:1</li>
					<li>5:1</li>
				</ul>
				<button type="submit">Submit Answer</button>
			</div>
		</form>
	);
}
