import s from "./Feedback.module.css"

const Feedback = ({ reviews, totalFeedback, positiveFeedback }) => {

	return (
		<ul className={s.list}>
			<li>Good: {reviews.good}</li>
			<li>Neutral: {reviews.neutral}</li>
			<li>Bad: {reviews.bad}</li>
			<li>Total: {totalFeedback}</li>
			<li>Positive: {positiveFeedback}%</li>
		</ul>
	)
}

export default Feedback
