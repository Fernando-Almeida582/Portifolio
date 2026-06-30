import { socialLinks } from "../../../data/social";
import SocialButton from "./SocialButton";

export default function SocialButtons() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((item) => (
        <SocialButton
          key={item.label}
          icon={item.icon}
          href={item.href}
          label={item.label}
        />
      ))}
    </div>
  );
}