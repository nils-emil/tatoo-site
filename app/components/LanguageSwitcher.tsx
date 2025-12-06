"use client";

import { usePathname, useRouter } from "next/navigation";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Map your locale codes to the display labels
  const languages = [
    { code: "et", label: "EST" },
    { code: "en", label: "ENG" },
    { code: "de", label: "GER" },
  ];

  const handleSwitch = (newLocale: string) => {
    if (!pathname) return;

    // Split the path (e.g., "/en/about" -> ["", "en", "about"])
    const segments = pathname.split("/");

    // Replace the locale segment (index 1) with the new locale
    segments[1] = newLocale;

    // Join it back together and push
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
                ? "text-accent font-bold" // Active state styling
                : "text-foreground hover:text-accent"
            }`}
          >
            {lang.label}
          </button>

          {/* Add the slash separator unless it's the last item */}
          {index < languages.length - 1 && (
            <span className="text-foreground ml-2">/</span>
          )}
        </div>
      ))}
    </div>
  );
}