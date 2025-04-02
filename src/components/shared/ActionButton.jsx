import { Link } from "react-router-dom";

const ActionButton = ({
  type = "button",
  label,
  icon: Icon,
  styles = "",
  styleIcon,
  onClick,
  disabled = false,
  to,
}) => {
    const btndefault = `px-4 py-1 rounded-md flex items-center gap-2 transition duration-200 ${styles}`;

    const contentdefault = (
        <>
          {Icon && <Icon className={`w-5 h-5 ${styleIcon}`}  />}
          {label}
        </>
      );
    
  return to ? (
    <Link to={to} className={btndefault}>
    {contentdefault}
  </Link>
  ) :(
    <button
      type={type}
      className={btndefault}
      onClick={onClick}
      disabled={disabled}
    >
      {contentdefault}
    </button>
  )
};

export default ActionButton;
