import { useEffect, useState } from 'react'
import './App.css'
import Description from './Description/Description'
import Feedback from './Feedback/Feedback'
import Options from './Options/Options'
import Notification from './Notification/Notification'

function App() {

	const [reviews, setReviews] = useState(() => {

		const savedReviews = localStorage.getItem("saved-reviews");

		if (savedReviews !== null) {
			return JSON.parse(savedReviews);
		}

		return {
			good: 0,
			neutral: 0,
			bad: 0
		}
	});

	const updateFeedback = (feedbackType) => {
		setReviews({
			...reviews,
			[feedbackType]: reviews[feedbackType] + 1
		})
	}

	const resetFeedback = () => {
		setReviews({
			good: 0,
			neutral: 0,
			bad: 0
		})
	};

	const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
	const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

	useEffect(() => {
		localStorage.setItem("saved-reviews", JSON.stringify(reviews));
	}, [reviews]);

	return (
		<>

			<Description />

			<Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />

			{!totalFeedback ?
				<Notification /> :
				<Feedback
					reviews={reviews}
					totalFeedback={totalFeedback}
					positiveFeedback={positiveFeedback}
				/>}

		</>
	)
}

export default App