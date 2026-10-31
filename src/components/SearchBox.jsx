export default function SearchBox({ label, placeholder, value, handleSearch }) {
  return (
    <div className="flex items-center gap-3 pl-4 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary dark:text-light">
        {label}
      </label>
      <input
        type="text"
        className="rounded-md border border-primary bg-white px-4 py-2 text-base text-gray-800 transition placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-dark/30 dark:border-light/40 dark:bg-darkcard dark:text-darktext dark:placeholder:text-slate-500 dark:focus:border-light dark:focus:ring-light/20"
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleSearch(event.target.value)}
      /> 
    </div>
  );
}
