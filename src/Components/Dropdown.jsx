export default function Dropdown({
  label,
  options,
  selectedValue,
  value,
  handleSort,
}) {
  const currentValue = selectedValue ?? value;

  return (
    <div className="flex items-center gap-2 justify-end pr-12 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary dark:text-light">
        {label}
      </label>
      <select
        className="rounded-md border border-primary bg-white px-3 py-2 text-base text-gray-900 transition focus:outline-none focus:ring focus:ring-dark/30 dark:border-light/40 dark:bg-darkcard dark:text-darktext dark:focus:border-light dark:focus:ring-light/20"
        value={currentValue}
        onChange={(event) => handleSort(event.target.value)}
      >
        {options.map((optionVal, index) => (
          <option key={index} value={optionVal}>
            {optionVal}
          </option>
        ))}
      </select>
    </div>
  );
}
