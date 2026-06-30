import Card from "../Card/Card";

type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <Card>
      <h3 className="text-4xl font-bold text-blue-400">
        {value}
      </h3>

      <p className="mt-2 text-gray-400">
        {label}
      </p>
    </Card>
  );
}