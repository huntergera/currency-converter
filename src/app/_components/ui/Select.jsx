export default function Select ({className, options}) {
  return (
    <div className={`${className} relative after::content-[''] after:absolute after:top-5 after:border-gray after:border-b-2 after:border-r-2 after:border-solid after:pointer-events-none after:w-3 after:h-3 after:rotate-45 after:translate-x-1/2 after:right-5`}>
      <select className="relative border-gray-100 border border-solid outline-none w-full h-full rounded pl-4 text-gray font-medium text-20 appearance-none cursor-pointer">
        {options && options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
