export default function Button ({children, className, ...props}) {
  return (
    <button type='button' className={`py-4 px-7 text-18 font-medium rounded ${className}`} { ...props}>
      {children}
    </button>
  )
}
