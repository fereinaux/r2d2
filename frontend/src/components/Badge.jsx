import PropTypes from "prop-types";

Badge.propTypes = {
  trilogy: PropTypes.string,
};
function Badge({ trilogy }) {
  let cor = "red";

  switch (trilogy) {
    case "prequel":
      cor = "blue";
      break;
    case "classic":
      cor = "green";
      break;
    default:
      break;
  }

  return (
    <span className={`italic text-white bg-${cor}-600 rounded-xl p-2`}>
      {trilogy}
    </span>
  );
}

export default Badge;
