import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total} </p>
      <p>Positive feedback: {percentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
