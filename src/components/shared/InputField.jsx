export function InputField({ label, ...props }) {
  return (
    <div>
      <label className="w-full p-2 text-sm border border-gray-300 rounded">
        {label}
      </label>
      <input
        {...props}
        className="w-full p-2 text-sm border border-gray-300 rounded"
      />
    </div>
  );
}
