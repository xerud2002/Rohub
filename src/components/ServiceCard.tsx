type Props = { title: string; summary: string; link?: string }

export default function ServiceCard({ title, summary, link }: Props) {
  return (
    <article className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{summary}</p>
      {link && <a href={link} className="mt-4 inline-block text-primary font-medium">Learn more →</a>}
    </article>
  )
}
