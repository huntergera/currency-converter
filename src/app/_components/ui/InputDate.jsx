export default function InputDate ({className}) {
  return (
    <div className="relative">
      <input type='date' id="dateInput" className={`appearance-none rounded outline-none py-4 px-2 text-center border-gray-100 border border-solid text-gray font-medium text-20  ${className}`}/>
      <label htmlFor="dateInput" className="absolute top-1/2 translate-y-[-50%] right-2 bg-calendar-icon bg-no-repeat bg-center bg-contain w-6 h-6 bg-white pointer-events-none"></label>
    </div>
  )
}
