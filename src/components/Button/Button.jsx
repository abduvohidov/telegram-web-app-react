import "./Button.css";

export const Button = () => {
  return <button {...props} className={'button' + props.className} />;
};
