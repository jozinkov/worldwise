import { useNavigate } from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";

ButtonBack.propTypes = {
  history: PropTypes.any,
};

function ButtonBack({ history = -1 }) {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(history);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default ButtonBack;
