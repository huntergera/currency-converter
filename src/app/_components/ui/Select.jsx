export default function Select () {
  return (
    <div>
      <select className="relative after::content-[''] after:absolute after:top-1/2 h-12 border-gray-100 border border-solid outline-none">
        <option value="">UAH</option>
        <option value="">USD</option>
      </select>
    </div>
  )
}
