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

	// Використання функції оновлення (prevReviews) гарантує, що дані, які ми оновлюємо, є актуальними (об'єкт reviews). У конспекті про це не згадується.
	const updateFeedback = (feedbackType) => {
		setReviews((prevReviews) => ({
			...prevReviews,
			[feedbackType]: prevReviews[feedbackType] + 1
		}));
	}

	const resetFeedback = () => {
		setReviews({
			good: 0,
			neutral: 0,
			bad: 0
		})
	};

	const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
	const positiveFeedback = totalFeedback > 0 ? Math.round((reviews.good / totalFeedback) * 100) : 0;

	useEffect(() => {
		localStorage.setItem("saved-reviews", JSON.stringify(reviews));
	}, [reviews]);

	return (
		<>

			<Description />

			<Options
				updateFeedback={updateFeedback}
				resetFeedback={resetFeedback}
				totalFeedback={totalFeedback}
			/>

			{totalFeedback > 0 ?
				<Feedback
					reviews={reviews}
					totalFeedback={totalFeedback}
					positiveFeedback={positiveFeedback}
				/>
				:
				<Notification />}


		</>
	)
}

export default App