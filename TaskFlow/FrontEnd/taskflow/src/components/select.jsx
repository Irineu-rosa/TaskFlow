import "./style/select.css";

const Select = ({ value, onChange, options, placeholder }) => {
  return (
    <select
      className="app-select"
      value={value}
      onChange={onChange}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
