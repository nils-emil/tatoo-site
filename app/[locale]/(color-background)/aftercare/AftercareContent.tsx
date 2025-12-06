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
    introText:
      "It’s important to remember that everyone heals differently. Don’t hesitate to reach out to me if you have any questions. If I give you instructions that are different from the ones below, always follow my personal instructions.",
    phases: [
      {
        title: "Day 1–3",
        todoTitle: "WHAT TO DO:",
        todoItems: [
          "Leave the second skin on for 48–72 hours (follow my instructions). No need to wash or put ointment on the tattoo during this period.",
          "Avoid strenuous activities, sweating, water, and sunlight during this period.",
          "If the bandage becomes damaged and the tattoo gets exposed, remove it and wash with antibacterial soap. Contact me for further instructions.",
          "If you experience excessive “weeping”, send me a picture and I will advise you.",
          "Don't take Advil or anything that thins your blood.",
          "Remove the bandage on the last day (see below for instructions)."
        ],
        expectTitle: "WHAT TO EXPECT:",
        expectItems: [
          "The second skin will protect the tattoo from infection and prevent scabbing.",
          "Some redness, swelling, and heat around the tattooed area are normal.",
          "A clear or ink-colored liquid may leak from the tattoo. This is called “weeping”.",
          "A small amount of weeping is normal. If a large pocket of liquid forms, contact me."
        ],
        importantTitle: "MOST IMPORTANT:",
        importantItems: [
          "Avoid hot water and sweating. Sweat contains bacteria and can cause an infection. Heat and sweat also make removing the bandage more difficult, which can irritate the skin and affect healing.",
          "Do not remove the second skin too early, as this can damage the tattoo and increase the risk of infection. If you have excessive weeping, contact me."
        ]
      },
      {
        title: "Day 4–6",
        todoTitle: "WHAT TO DO:",
        todoItems: [
          "Gently wash the tattooed area 2–3 times per day (follow my instructions) using antibacterial soap.",
          "Pat the area dry with a clean towel after washing. Let it air dry for 5–10 minutes before applying ointment.",
          "Apply a thin layer of Aquaphor (or similar healing ointment) 2–3 times per day. Rub it in gently and remove any excess.",
          "Avoid sun exposure."
        ],
        expectTitle: "WHAT TO EXPECT:",
        expectItems: [
          "The tattoo may feel itchy as it starts to peel (if it isn’t peeling yet, that’s totally normal).",
          "The skin may feel dry and tight. Do not over-moisturize.",
          "The tattoo may appear darker and slightly blurry during this phase. This will improve within 1–2 weeks."
        ],
        importantTitle: "MOST IMPORTANT:",
        importantItems: [
          "Avoid water, sweating, picking at skin, and sun exposure.",
          "Take short showers.",
          "Avoid tight or restrictive clothing that may rub against the tattoo."
        ]
      },
      {
        title: "Day 7–14",
        todoTitle: "WHAT TO DO:",
        todoItems: [
          "Continue gently washing with antibacterial soap 2–3 times per day.",
          "Apply an unscented lotion or tattoo-specific aftercare product as needed to keep the skin moisturized. Good options include Nivea, Aveeno, CeraVe, Cetaphil, or tattoo products such as Hustle Butter or H2Ocean.",
          "Avoid sun exposure."
        ],
        expectTitle: "WHAT TO EXPECT:",
        expectItems: [
          "The tattoo will continue to heal and the skin will become smoother and slightly shiny.",
          "The color/contrast of the tattoo may look more vibrant while the top layer of skin is still regenerating.",
          "Peeling and flaking should begin to subside."
        ],
        importantTitle: "MOST IMPORTANT:",
        importantItems: [
          "Avoid water and sun exposure."
        ]
      }
    ],
    bandageSection: {
      title: "Removing the Second Skin Bandage",
      text1: "Sun, water, and over-moisturizing are the main causes of poor tattoo healing.",
      text2:
        "Do not apply sunscreen on your new tattoo for 6 weeks. During this time, keep it covered from the sun as it is most vulnerable to UV damage."
    },
    contactSection: {
      title: "Questions About Your Healing?",
      text:
        "If you have any concerns about how your tattoo is healing, please don’t hesitate to contact me.",
      btn: "Contact Me"
    }
  },

  et: {
    pageTitle: "JÄRELHOOLDUS",
    introText:
      "On oluline meeles pidada, et igaüks paraneb erinevalt. Küsimuste korral võta julgelt minuga ühendust. Kui ma annan sulle allolevast erinevaid juhiseid, järgi alati minu isiklikke juhiseid.",
    phases: [
      {
        title: "Päevad 1–3",
        todoTitle: "MIDA TEHA:",
        todoItems: [
          "Jäta second skin (kile) peale 48–72 tunniks (järgi minu juhiseid). Sellel perioodil pole vaja tätoveeringut pesta ega kreemitada.",
          "Väldi sel perioodil rasket füüsilist koormust, higistamist, vett ja päikesevalgust.",
          "Kui kile saab kahjustada ja tätoveering paljastub, eemalda see ja pese antibakteriaalse seebiga. Võta minuga ühendust edasisteks juhisteks.",
          "Kui tekib liigne leemendamine, saada mulle pilt ja ma annan nõu.",
          "Ära võta ibuprofeeni ega muid verd vedeldavaid ravimeid.",
          "Eemalda kile viimase päeva lõpus (juhised allpool)."
        ],
        expectTitle: "MIDA OODATA:",
        expectItems: [
          "Kile kaitseb tätoveeringut infektsiooni eest ja takistab kooriku teket.",
          "Punetus, turse ja kuumus tätoveeritud piirkonnas on normaalsed.",
          "Tätoveeringust võib erituda selget või tindist vedelikku (lümfvedelik).",
          "Väike kogus on normaalne. Kui vedelik koguneb suure kotina, võta minuga ühendust."
        ],
        importantTitle: "KÕIGE OLULISEM:",
        importantItems: [
          "Väldi kuuma vett ja higistamist. Higi sisaldab baktereid ja võib põhjustada infektsiooni. Kuumus/higi teeb ka kile eemaldamise raskemaks ja võib ärritada nahka.",
          "Ära eemalda kilet liiga vara, sest see võib tätoveeringut kahjustada ja suurendada infektsiooniriski."
        ]
      },
      {
        title: "Päevad 4–6",
        todoTitle: "MIDA TEHA:",
        todoItems: [
          "Pese tätoveeritud piirkonda õrnalt 2–3 korda päevas antibakteriaalse seebiga.",
          "Kuivata piirkond pärast pesemist puhta rätikuga tupsutades ja lase 5–10 minutit õhu käes kuivada.",
          "Kanna 2–3 korda päevas õhuke kiht ravisalvi (nt Aquaphor). Hõõru kergelt sisse ja eemalda liigne salv.",
          "Väldi päikest."
        ],
        expectTitle: "MIDA OODATA:",
        expectItems: [
          "Tätoveering võib hakata sügelema, kui nahk hakkab kooruma.",
          "Nahk võib tunduda kuiv – see on normaalne. Ära üle niisuta.",
          "Tätoveering võib tunduda tumedam ja hägusem. See välimus taastub 1–2 nädala jooksul."
        ],
        importantTitle: "KÕIGE OLULISEM:",
        importantItems: [
          "Väldi vett, higistamist, nokkimist ja päikest.",
          "Käi ainult lühidalt duši all.",
          "Väldi kitsaid riideid, mis hõõruvad vastu tätoveeringut."
        ]
      },
      {
        title: "Päevad 7–14",
        todoTitle: "MIDA TEHA:",
        todoItems: [
          "Jätka pesemist 2–3 korda päevas.",
          "Kasuta vajadusel lõhnatut kreemi (nt Nivea, Aveeno, CeraVe või Cetaphil), et nahk püsiks niisutatud.",
          "Väldi päikest."
        ],
        expectTitle: "MIDA OODATA:",
        expectItems: [
          "Tätoveering paraneb edasi ning nahk muutub siledamaks ja veidi läikivaks.",
          "Värvid võivad tunduda erksamad, kuni naha pealmine kiht taastub.",
          "Koorumine peaks vähenema."
        ],
        importantTitle: "KÕIGE OLULISEM:",
        importantItems: [
          "Väldi vett ja päikesekiirgust."
        ]
      }
    ],
    bandageSection: {
      title: "Second Skin kile eemaldamine",
      text1: "Päike, vesi ja liigne niisutamine on peamised halva paranemise põhjused.",
      text2:
        "Ära kasuta uuel tätoveeringul päikesekreemi 6 nädala jooksul. Hoia see sel perioodil päikese eest kaetuna."
    },
    contactSection: {
      title: "Küsimusi paranemise kohta?",
      text:
        "Kui sul on muresid, võta minuga kindlasti ühendust.",
      btn: "Võta ühendust"
    }
  },

  de: {
    pageTitle: "NACHSORGE",
    introText:
      "Bitte denke daran, dass jeder unterschiedlich heilt. Zögere nicht, mich bei Fragen zu kontaktieren. Wenn ich dir andere Anweisungen gebe als unten angegeben, folge immer meinen persönlichen Anweisungen.",
    phases: [
      {
        title: "Tag 1–3",
        todoTitle: "WAS ZU TUN IST:",
        todoItems: [
          "Lass die Second Skin Folie 48–72 Stunden auf der Haut (folge meinen Anweisungen). In dieser Zeit nicht waschen oder eincremen.",
          "Vermeide anstrengende Aktivitäten, Schwitzen, Wasser und Sonnenlicht.",
          "Wenn die Folie beschädigt wird, entferne sie und wasche die Stelle mit antibakterieller Seife. Kontaktiere mich für weitere Anweisungen.",
          "Bei starkem Nässen sende mir bitte ein Foto.",
          "Keine blutverdünnenden Medikamente wie Aspirin oder Ibuprofen einnehmen.",
          "Entferne die Folie am letzten Tag (siehe unten)."
        ],
        expectTitle: "WAS ZU ERWARTEN IST:",
        expectItems: [
          "Die Folie schützt das Tattoo und verhindert die Bildung von Krusten.",
          "Rötungen, Schwellungen und Wärme sind normal.",
          "Eine klare oder farbige Flüssigkeit kann austreten – das ist normal.",
          "Wenn sich viel Flüssigkeit sammelt, kontaktiere mich bitte."
        ],
        importantTitle: "DAS WICHTIGSTE:",
        importantItems: [
          "Vermeide heißes Wasser und Schwitzen. Schweiß enthält Bakterien und kann Infektionen verursachen.",
          "Entferne die Folie nicht zu früh, da dies das Tattoo beschädigen kann."
        ]
      },
      {
        title: "Tag 4–6",
        todoTitle: "WAS ZU TUN IST:",
        todoItems: [
          "Wasche den Bereich 2–3 Mal täglich vorsichtig mit antibakterieller Seife.",
          "Mit einem sauberen Handtuch trocken tupfen und 5–10 Minuten lufttrocknen lassen.",
          "Eine dünne Schicht Heilsalbe (z.B. Aquaphor) 2–3 Mal täglich auftragen.",
          "Sonne vermeiden."
        ],
        expectTitle: "WAS ZU ERWARTEN IST:",
        expectItems: [
          "Jucken und Schälen können auftreten.",
          "Die Haut kann trocken sein – nicht zu viel eincremen.",
          "Das Tattoo kann dunkler und unschärfer aussehen, normalisiert sich aber wieder."
        ],
        importantTitle: "DAS WICHTIGSTE:",
        importantItems: [
          "Wasser, Schwitzen, Kratzen und Sonne vermeiden.",
          "Nur kurz duschen.",
          "Enge Kleidung vermeiden."
        ]
      },
      {
        title: "Tag 7–14",
        todoTitle: "WAS ZU TUN IST:",
        todoItems: [
          "Weiterhin 2–3 Mal täglich reinigen.",
          "Bei Bedarf unparfümierte Lotion verwenden (z.B. Nivea, Aveeno, CeraVe oder Cetaphil).",
          "Sonne vermeiden."
        ],
        expectTitle: "WAS ZU ERWARTEN IST:",
        expectItems: [
          "Die Haut wird glatter und glänzender.",
          "Die Farben können kräftiger wirken.",
          "Die Schälung lässt nach."
        ],
        importantTitle: "DAS WICHTIGSTE:",
        importantItems: [
          "Wasser und Sonne vermeiden."
        ]
      }
    ],
    bandageSection: {
      title: "Entfernen der Second Skin Folie",
      text1: "Sonne, Wasser und zu viel Feuchtigkeit sind die Hauptursachen für schlechte Heilung.",
      text2:
        "Trage in den ersten 6 Wochen keine Sonnencreme auf dein neues Tattoo auf. Schütze es stattdessen mit Kleidung."
    },
    contactSection: {
      title: "Fragen zur Heilung?",
      text:
        "Wenn du Bedenken bezüglich der Heilung hast, kontaktiere mich bitte direkt.",
      btn: "Kontakt"
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
          <p className="text-light-gray">{t.introText}</p>
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
          <p className="text-light-gray mb-4">{t.bandageSection.text1}</p>
          <p className="text-light-gray">{t.bandageSection.text2}</p>
        </div>

        <div className="text-center border-t border-accent pt-8">
          <h2 className="text-xl text-accent mb-4">{t.contactSection.title}</h2>
          <p className="text-light-gray mb-4">{t.contactSection.text}</p>
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
