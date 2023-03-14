
import PropTypes from "prop-types";

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <ul className={buttons}>
            {options.map((label) => (
                <li key={label} className={buttons-item}>
                    <button
                        className={button}
                        name={label}
                        type="button"
                        onClick={onLeaveFeedback}>
                        {label}
                    </button>
                </li>
            ))}
    </ul>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  };