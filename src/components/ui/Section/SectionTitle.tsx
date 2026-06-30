type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-16">
      <p className="text-blue-400 uppercase tracking-widest">{subtitle}</p>

      <h2 className="mt-3 text-5xl font-bold text-white">{title}</h2>
    </div>
  );
}
