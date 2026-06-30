import Button from "../../ui/Button/Button";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">

    <Button
  variant="secondary"
  href="/Fernando Almeida.pdf"
  download
>
  Download CV
</Button>
    </div>
  );
}