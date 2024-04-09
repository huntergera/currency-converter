export default function InputFile ({className, placeholder}) {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className={`${className} rounded outline-none py-4 px-2 text-center border-gray-100 border border-solid text-gray font-medium text-20`}/>
  )
}
