import PropTypes from "prop-types";
import checkIcon from ".././assets/icon-list.svg";

const CheckListItem = ({ text }) => {
  return (
    <div className="flex items-start mb-2">
      <img src={checkIcon} alt="checkmark" className="mr-4" />
      <p className="text-primaryColor leading-6 text-[17px]">{text}</p>
    </div>
  );
};

CheckListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CheckListItem;
