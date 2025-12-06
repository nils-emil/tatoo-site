"use client";

import { usePathname, useRouter } from "next/navigation";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const languages = [
    { code: "et", label: "EST" },
    { code: "en", label: "ENG" },
    { code: "de", label: "GER" },
  ];

  const handleSwitch = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="flex space-x-2 text-sm">
      {languages.map((lang, index) => (
        <div key={lang.code} className="flex items-center">
          <button
            onClick={() => handleSwitch(lang.code)}
            className={`transition-colors ${
              currentLocale === lang.code
                ? "text-accent font-bold"
                : "text-foreground hover:text-accent"
            }`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-foreground ml-2">/</span>
          )}
        </div>
      ))}
    </div>
  );
}