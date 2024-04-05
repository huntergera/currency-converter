export default function ContactItem({item}) {
  const {Icon, number, text} = item;

  return (
    <div className="flex gap-4">
      <Icon className="mt-1.5 shrink-0" />
      <div>
        <a href="tel:{number}">{number}</a>
        <p className="text-12 text-gray mt-2">{text}</p>
      </div>
    </div>
  );
}
