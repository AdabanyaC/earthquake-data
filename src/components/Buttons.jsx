export const PrimaryButton = ({ btnText, bgColor, textColor }) => {
  return (
    <button
      className={`px-6 py-3 rounded font-semibold ${bgColor} ${
        bgColor === "main-red" ? `text-white` : textColor
      }`}
    >
      {btnText}
    </button>
  );
};

export const PrimaryButtonWithIcon = ({ btnText, bgColor, textColor }) => {
  return (
    <button
      className={`flex gap-2 px-6 py-3 rounded font-semibold ${bgColor} ${
        bgColor === "main-red" ? `text-white` : textColor
      }`}
    >
      <i className="bi bi-github"></i>
      <p>{btnText}</p>
    </button>
  );
};

export const PrimaryButtonLg = ({ btnText, bgColor, textColor }) => {
  return (
    <button
      className={`px-16 py-4 font-semibold rounded ${bgColor} ${
        bgColor === "main-red" ? `text-white` : textColor
      }`}
    >
      {btnText}
    </button>
  );
};
