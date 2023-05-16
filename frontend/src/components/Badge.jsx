import PropTypes from "prop-types";
import { getColorByTrilogy } from "../utils/colors";

Badge.propTypes = {
  trilogy: PropTypes.string,
};
function Badge({ trilogy }) {
  return (
    <span
      className={`italic text-white bg-${getColorByTrilogy(
        trilogy
      )}-900 bg- rounded-xl p-2`}
    >
      {trilogy}
    </span>
  );
}

export default Badge;
