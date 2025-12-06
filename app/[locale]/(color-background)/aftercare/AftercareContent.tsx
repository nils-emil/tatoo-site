'use client';

import Link from 'next/link';

type AftercareSection = {
  title: string;
  todoTitle: string;
  todoItems: string[];
  expectTitle: string;
  expectItems: string[];
  importantTitle: string;
  importantItems: string[];
};

type TranslationData = {
  pageTitle: string;
  introText: string;
  phases: AftercareSection[];
  bandageSection: {
    title: string;
    text1: string;
    text2: string;
  };
  contactSection: {
    title: string;
    text: string;
    btn: string;
  };
};

const translations: Record<string, TranslationData> = {
  en: {
    pageTitle: "AFTERCARE",
    introText: "It's important to remember everyone heals differently. Don't hesitate to reach out to your artist with any questions you may have. If your artist gives you instructions different from the instructions below, follow your artist's instructions.",
    phases: [
      {
        title: "Day 1-3",
        todoTitle: "WHAT TO DO:",
        todoItems: [
          "Leave the second skin on for 48-72 hours (follow artist instructions). No need to wash or put ointment on the tattoo during this period.",
          "Avoid strenuous activities, sweating, water, and sunlight during this period.",
          "If the bandage becomes damaged and the tattoo gets exposed, remove it and wash with antibacterial soap. Contact your artist for further instructions.",
          "If you experience excessive \"weeping\", send a picture to your artist and they will advise.",
          "Don't take Advil or anything that thins your blood.",
          "Remove the bandage on the last day (see below for instructions)."
        ],
        expectTitle: "WHAT TO EXPECT:",
        expectItems: [
          "The second skin will protect the tattoo from infection and prevent scabbing.",
          "Some redness, swelling, and heat around the tattooed area are normal.",
          "A clear or ink colored liquid may leak from the tattoo. This is known as \"Weeping\".",
          "A bit of weeping is ok and the liquid will be absorbed back into the body. However if you have a sac of liquid, contact your artist."
        ],
        importantTitle: "MOST IMPORTANT:",
        importantItems: [
          "Avoid hot water and sweating. Sweat contains bacteria and can cause an infection. Heat/sweat also make removing the bandage more difficult resulting in a bad heal due to irritation from adhesive residue.",
          "Do not remove the second skin early as it may damage the tattoo and increase the risk of infection. If you have excessive weeping, contact your artist."
        ]
      },
      {
        title: "Day 4-6",
        todoTitle: "WHAT TO DO:",
        todoItems: [
          "Gently wash the tattooed area 2-3 times/day (follow artist instructions). Use antibacterial soap such as Dial or SoftSoap.",
          "Pat the area dry with a clean towel immediately after washing. Let it air dry for 5-10 minutes before applying ointment.",
          "Apply a thin layer of Aquaphor Healing Ointment to the tattoo 2-3 times/day (follow artist instructions). Rub the ointment in with light pressure and remove any excess ointment from the surface with your hand.",
          "Avoid sun exposure."
        ],
        expectTitle: "WHAT TO EXPECT:",
        expectItems: [
          "The tattoo may feel itchy as it begins to peel (If it isn't peeling at this point, don't worry, everyone's different).",
          "The tattooed skin will dry out, this is normal. Be careful to not over-moisturize.",
          "The tattoo will generally look darker and fuzzier during this period. Don't worry, it will go back to normal in 1-2 weeks."
        ],
        importantTitle: "MOST IMPORTANT:",
        importantItems: [
          "Avoid water, sweating, picking at skin, and sun exposure.",
          "Take short showers.",
          "Avoid wearing tight or restrictive clothing that may rub against the tattooed area."
        ]
      },
      {
        title: "Day 7-14",
        todoTitle: "WHAT TO DO:",
        todoItems: [
          "Continue to gently wash with antibacterial soap 2-3 times per day (follow artist instructions).",
          "Apply unscented lotion or tattoo-specific aftercare product as needed to keep the skin moisturized. Gentle lotions such as Nivea, Aveeno, Cera Ve, or Cetaphil should be used. Tattoo products such as Tat-Fat, Hustle Butter, or H2Ocean can be used in place of lotion during this period.",
          "Avoid sun exposure."
        ],
        expectTitle: "WHAT TO EXPECT:",
        expectItems: [
          "The tattoo will continue to heal and the skin will become smoother and shiny.",
          "The color/contrast of the tattoo may look more vibrant as the healing process progresses. This is because the top layer of your skin has not regenerated yet.",
          "Peeling/flaking of the skin should subside."
        ],
        importantTitle: "MOST IMPORTANT:",
        importantItems: [
          "Avoid water, and sun exposure."
        ]
      }
    ],
    bandageSection: {
      title: "Removing the Second Skin Bandage",
      text1: "Sun, water, and over-moisturizing are the main causes of bad tattoo heals.",
      text2: "Don't apply sunscreen on your new tattoo for 6 weeks. This means it's important to keep it covered from the sun during this period when it's most vulnerable to UV."
    },
    contactSection: {
      title: "Questions About Your Healing?",
      text: "If you have any concerns about how your tattoo is healing, please don't hesitate to contact me.",
      btn: "Contact Me"
    }
  },
  et: {
    pageTitle: "JÄRELHOOLDUS",
    introText: "On oluline meeles pidada, et igaüks paraneb erinevalt. Küsimuste korral võta julgelt ühendust oma tätoveerijaga. Kui sinu tätoveerija annab alltoodust erinevaid juhiseid, järgi oma tätoveerija juhiseid.",
    phases: [
      {
        title: "Päevad 1-3",
        todoTitle: "MIDA TEHA:",
        todoItems: [
          "Jäta 'second skin' (kile) peale 48-72 tunniks (järgi kunstniku juhiseid). Sellel perioodil pole vaja tätoveeringut pesta ega kreemitada.",
          "Väldi sel perioodil rasket füüsilist koormust, higistamist, vett ja päikesevalgust.",
          "Kui kile saab kahjustada ja tätoveering paljastub, eemalda see ja pese antibakteriaalse seebiga. Võta ühendust kunstnikuga edasisteks juhisteks.",
          "Kui tekib liigne leemendamine, saada kunstnikule pilt ja ta annab nõu.",
          "Ära võta Ibuprofeeni ega muid verd vedeldavaid ravimeid.",
          "Eemalda side viimasel päeval (juhised allpool)."
        ],
        expectTitle: "MIDA OODATA:",
        expectItems: [
          "Kile kaitseb tätoveeringut infektsiooni eest ja takistab kooriku teket.",
          "Punetus, turse ja kuumus tätoveeritud piirkonnas on normaalne.",
          "Tätoveeringust võib erituda selget või tindist vedelikku (lümfivedelik).",
          "Väike leemendamine on normaalne ja keha imab vedeliku tagasi. Kui vedelik koguneb kile alla suurema 'kotina', võta ühendust kunstnikuga."
        ],
        importantTitle: "KÕIGE OLULISEM:",
        importantItems: [
          "Väldi kuuma vett ja higistamist. Higi sisaldab baktereid ja võib põhjustada infektsiooni. Kuumus/higi muudab ka kile eemaldamise raskemaks, mis võib liimiärrituse tõttu paranemist halvendada.",
          "Ära eemalda kilet liiga vara, kuna see võib tätoveeringut kahjustada ja suurendada infektsiooniohtu."
        ]
      },
      {
        title: "Päevad 4-6",
        todoTitle: "MIDA TEHA:",
        todoItems: [
          "Pese tätoveeritud piirkonda õrnalt 2-3 korda päevas (järgi kunstniku juhiseid). Kasuta antibakteriaalset seepi.",
          "Kuivata piirkond kohe pärast pesemist puhta rätikuga tupsutades. Lase õhu käes kuivada 5-10 minutit enne salvi pealekandmist.",
          "Kanna tätoveeringule õhuke kiht Aquaphori (või sarnast) ravisalvi 2-3 korda päevas. Hõõru salv kergelt sisse ja eemalda liigne salv.",
          "Väldi päikese käes viibimist."
        ],
        expectTitle: "MIDA OODATA:",
        expectItems: [
          "Tätoveering võib naha koorumise alguses sügeleda (kui see veel ei kooru, ära muretse, kõik on erinevad).",
          "Tätoveeritud nahk kuivab, see on normaalne. Ole ettevaatlik, et mitte üle niisutada.",
          "Tätoveering näeb sel perioodil üldiselt tumedam ja hägusem välja. Ära muretse, see taastub 1-2 nädala jooksul."
        ],
        importantTitle: "KÕIGE OLULISEM:",
        importantItems: [
          "Väldi vett, higistamist, naha nokkimist ja päikese käes viibimist.",
          "Käi duši all lühidalt.",
          "Väldi kitsaid või hõõruvaid riideid tätoveeritud piirkonnas."
        ]
      },
      {
        title: "Päevad 7-14",
        todoTitle: "MIDA TEHA:",
        todoItems: [
          "Jätka õrna pesemist antibakteriaalse seebiga 2-3 korda päevas.",
          "Kanna vajadusel lõhnatut kreemi, et nahk püsiks niisutatud. Sobivad õrnad kreemid nagu Nivea, Aveeno, CeraVe või Cetaphil. Võib kasutada ka spetsiaalseid tätoveeringutooteid.",
          "Väldi päikese käes viibimist."
        ],
        expectTitle: "MIDA OODATA:",
        expectItems: [
          "Tätoveering paraneb edasi ning nahk muutub siledamaks ja läikivamaks.",
          "Tätoveeringu värv/kontrast võib paranemisprotsessi edenedes muutuda erksamaks, kuna naha pealmine kiht pole veel taastunud.",
          "Naha koorumine peaks vaibuma."
        ],
        importantTitle: "KÕIGE OLULISEM:",
        importantItems: [
          "Väldi vett ja päikest."
        ]
      }
    ],
    bandageSection: {
      title: "Kile (Second Skin) eemaldamine",
      text1: "Päike, vesi ja üleniisutamine on peamised halva paranemise põhjused.",
      text2: "Ära kasuta uuel tätoveeringul päikesekaitsekreemi 6 nädalat. See tähendab, et on oluline hoida seda päikese eest kaetuna sel perioodil, kui see on UV-kiirguse suhtes kõige haavatavam."
    },
    contactSection: {
      title: "Küsimusi paranemise kohta?",
      text: "Kui sul on muresid tätoveeringu paranemise osas, võta minuga kindlasti ühendust.",
      btn: "Võta ühendust"
    }
  },
  de: {
    pageTitle: "NACHSORGE",
    introText: "Es ist wichtig zu bedenken, dass jeder anders heilt. Zögere nicht, deinen Tätowierer bei Fragen zu kontaktieren. Wenn dein Tätowierer dir andere Anweisungen gibt als unten aufgeführt, befolge die Anweisungen deines Tätowierers.",
    phases: [
      {
        title: "Tag 1-3",
        todoTitle: "WAS ZU TUN IST:",
        todoItems: [
          "Lass die 'Second Skin' Folie für 48-72 Stunden drauf (befolge die Anweisungen des Künstlers). In dieser Zeit nicht waschen oder eincremen.",
          "Vermeide in dieser Zeit anstrengende Aktivitäten, Schwitzen, Wasser und Sonnenlicht.",
          "Wenn der Verband beschädigt wird und das Tattoo freiliegt, entferne ihn und wasche die Stelle mit antibakterieller Seife. Kontaktiere deinen Tätowierer für weitere Anweisungen.",
          "Bei übermäßigem Nässen (Wundsekret) sende ein Bild an deinen Tätowierer.",
          "Kein Aspirin oder blutverdünnende Mittel einnehmen.",
          "Entferne den Verband am letzten Tag (siehe unten für Anweisungen)."
        ],
        expectTitle: "WAS ZU ERWARTEN IST:",
        expectItems: [
          "Die Folie schützt das Tattoo vor Infektionen und verhindert Schorfbildung.",
          "Rötungen, Schwellungen und Wärme um den tätowierten Bereich sind normal.",
          "Eine klare oder tintenfarbene Flüssigkeit kann austreten. Das ist Wundsekret und ganz normal.",
          "Ein wenig Flüssigkeit ist okay und wird vom Körper wieder aufgenommen. Wenn sich jedoch viel Flüssigkeit ansammelt, kontaktiere deinen Tätowierer."
        ],
        importantTitle: "DAS WICHTIGSTE:",
        importantItems: [
          "Vermeide heißes Wasser und Schwitzen. Schweiß enthält Bakterien und kann Infektionen verursachen. Hitze/Schweiß erschweren auch das Entfernen des Verbands.",
          "Entferne die Folie nicht zu früh, da dies das Tattoo beschädigen und das Infektionsrisiko erhöhen kann."
        ]
      },
      {
        title: "Tag 4-6",
        todoTitle: "WAS ZU TUN IST:",
        todoItems: [
          "Wasche den tätowierten Bereich vorsichtig 2-3 Mal täglich mit antibakterieller Seife.",
          "Tupfe den Bereich sofort nach dem Waschen mit einem sauberen Handtuch trocken. Lass es 5-10 Minuten an der Luft trocknen, bevor du Salbe aufträgst.",
          "Trage 2-3 Mal täglich eine dünne Schicht Wundsalbe (z.B. Aquaphor) auf. Massiere sie leicht ein und entferne überschüssige Salbe.",
          "Vermeide Sonneneinstrahlung."
        ],
        expectTitle: "WAS ZU ERWARTEN IST:",
        expectItems: [
          "Das Tattoo kann jucken, wenn es sich zu schälen beginnt.",
          "Die tätowierte Haut wird trocken, das ist normal. Nicht übermäßig eincremen.",
          "Das Tattoo sieht in dieser Zeit oft dunkler und unschärfer aus. Keine Sorge, das normalisiert sich in 1-2 Wochen."
        ],
        importantTitle: "DAS WICHTIGSTE:",
        importantItems: [
          "Vermeide Wasser, Schwitzen, Kratzen und Sonne.",
          "Nur kurz duschen.",
          "Vermeide enge Kleidung, die am Tattoo reiben könnte."
        ]
      },
      {
        title: "Tag 7-14",
        todoTitle: "WAS ZU TUN IST:",
        todoItems: [
          "Weiterhin 2-3 Mal täglich vorsichtig waschen.",
          "Verwende bei Bedarf unparfümierte Lotion, um die Haut feucht zu halten (z.B. Nivea, Aveeno, CeraVe).",
          "Vermeide Sonneneinstrahlung."
        ],
        expectTitle: "WAS ZU ERWARTEN IST:",
        expectItems: [
          "Das Tattoo heilt weiter und die Haut wird glatter und glänzender.",
          "Die Farben können kräftiger wirken, da sich die oberste Hautschicht regeneriert.",
          "Das Schälen der Haut sollte nachlassen."
        ],
        importantTitle: "DAS WICHTIGSTE:",
        importantItems: [
          "Vermeide Wasser und Sonne."
        ]
      }
    ],
    bandageSection: {
      title: "Entfernen der Folie (Second Skin)",
      text1: "Sonne, Wasser und zu viel Feuchtigkeit sind die Hauptursachen für schlechte Heilung.",
      text2: "Verwende 6 Wochen lang keine Sonnencreme auf dem neuen Tattoo. Schütze es stattdessen mit Kleidung vor der Sonne."
    },
    contactSection: {
      title: "Fragen zur Heilung?",
      text: "Wenn du Bedenken bezüglich der Heilung hast, zögere nicht, mich zu kontaktieren.",
      btn: "Kontaktieren"
    }
  }
};

export default function AftercareContent({locale}: { locale: string }) {
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl mb-8 text-center text-accent">{t.pageTitle}</h1>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 p-6 border-2 border-accent bg-dark-gray bg-opacity-50">
          <p className="text-light-gray">
            {t.introText}
          </p>
        </div>

        {t.phases.map((phase, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl text-accent mb-6">{phase.title}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl text-accent mb-3">{phase.todoTitle}</h3>
                <ul className="space-y-4 text-light-gray">
                  {phase.todoItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-accent mb-3">{phase.expectTitle}</h3>
                <ul className="space-y-4 text-light-gray">
                  {phase.expectItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-accent mb-3">{phase.importantTitle}</h3>
                <ul className="space-y-4 text-light-gray">
                  {phase.importantItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className="mb-12 p-6 border-2 border-accent bg-dark-gray bg-opacity-50">
          <h2 className="text-2xl text-accent mb-6">{t.bandageSection.title}</h2>
          <p className="text-light-gray mb-4">
            {t.bandageSection.text1}
          </p>
          <p className="text-light-gray">
            {t.bandageSection.text2}
          </p>
        </div>
        <div className="text-center border-t border-accent pt-8">
          <h2 className="text-xl text-accent mb-4">{t.contactSection.title}</h2>
          <p className="text-light-gray mb-4">
            {t.contactSection.text}
          </p>
          <Link
            href={`/${locale}/booking`}
            className="inline-block px-6 py-2 border-2 border-accent text-accent hover:bg-accent hover:text-foreground transition-colors"
          >
            {t.contactSection.btn}
          </Link>
        </div>
      </div>
    </div>
  );
}