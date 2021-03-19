import React from "react";

function TheenPickerCell({
  label, active, span = 1,
  color = 'gray',
  opacity = 200,
  activeOpacity = 500,
  hideLabel = false,
  onClick = () => {}
}) {
  const textColor = hideLabel ? `text-${color}-${opacity} hover:text-white` : 'text-black'
  const classNameActiveWrapper = active ?
    `scale-125 bg-${color}-${activeOpacity} text-white` :
    `bg-${color}-${opacity} ${textColor} hover:scale-125`;
  const classNameWrapper = 'flex items-center justify-center rounded transform h-5 ' +
    `col-span-${span} ${classNameActiveWrapper} transition-all cursor-pointer text-xs lowercase`;

  const classNameLabel = `transform scale-75`

  return (
    <div className={classNameWrapper} onClick={onClick}>
      <div className={classNameLabel}>{label}</div>
    </div>
  );
}

export default TheenPickerCell;
