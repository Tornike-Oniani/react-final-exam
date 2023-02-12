import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down.svg';

import './combo-box.style.scss';

const ComboBox = ({ name, label, options, onChange }) => {
  return (
    <div className="combo-box">
      <label htmlFor={name} className="combo-box__label">
        {label}
      </label>
      <div className="combo-box__input">
        <select
          className="combo-box__select"
          name={name}
          id={name}
          onChange={onChange}
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option}>
                {option.name}
              </option>
            );
          })}
        </select>
        <ArrowDownIcon className="combo-box__arrow" />
      </div>
    </div>
  );
};

export default ComboBox;
