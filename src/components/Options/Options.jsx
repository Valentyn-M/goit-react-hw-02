import s from "./Options.module.css"

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {

	return (
		<div className={s.wrap}>
			<button type="button" className={s.button} onClick={() => updateFeedback("good")}>Good</button>
			<button type="button" className={s.button} onClick={() => updateFeedback("neutral")}>Neutral</button>
			<button type="button" className={s.button} onClick={() => updateFeedback("bad")}>Bad</button>
			{totalFeedback > 0 && <button type="button" className={s.button} onClick={resetFeedback}>Reset</button>}
		</div>
	)
}

export default Options