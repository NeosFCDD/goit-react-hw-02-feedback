import css from "components/Feedback.module.css";
import PropTypes from "prop-types";

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.header}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};