const TOOLS = ["File", "Edit", "View", "Object"];
const INFO = ["1998-05-10", "México", "Spanish/English"];
const SKILLS = [
  { icon: "/ilustrator.svg", name: "Ilustrator" },
  { icon: "/photoshop.svg", name: "Photoshop" },
  { icon: "/indesign.svg", name: "InDesign" },
  { icon: "/figma.svg", name: "Figma" },
];
const EXPERIENCE = [
  {
    initDate: "2022",
    finalDate: "Now",
    place: "R Publicidad",
    role: "Marketing graphic designer",
  },
];
const SCHOOLING = [
  {
    initDate: "2022",
    finalDate: "Now",
    place: "Universidad de Sonora",
    role: "Graphic design",
  },
];
const SUB_SECTIONS = [
  { title: "Experience", data: EXPERIENCE },
  { title: "Education", data: SCHOOLING },
];

export function About() {
  return (
    <section className="flex flex-1 py-12 px-2 md:px-12 lg:px-32 z-10 bg-white ">
      <main className="flex flex-1 flex-col border-primaryBlue border-4 z-10 bg-white">
        <header className="flex flex-row items-center justify-between bg-primaryBlue py-2 px-4 text-white">
          <span className="font-bold">About Me</span>
          <img src="/window_handlers.svg" className="h-3 pointer-events-none" />
        </header>
        <div className="py-1 px-4 bg-gray mb-6 ">
          {TOOLS.map((item) => (
            <span className="mr-8 text-xs">{item}</span>
          ))}
        </div>
        <div className="p-12 flex flex-1 flex-row items-center">
          <div className="flex flex-col mr-4 md:mr-8 lg:mr-12">
            <img
              src="/mfalcaraz.png"
              className="h-64 pointer-events-none object-contain"
            />
            {SUB_SECTIONS.map((section) => (
              <aside className="bg-secondaryGray p-2 px-6 border-2 border-dashed border-primaryBlue mb-6">
                <h1 className="text-primaryBlue text-lg font-bold mb-3">
                  {section.title}
                </h1>
                {section.data.map((item) => (
                  <div className="flex flex-row items-center">
                    <h1 className="italic font-bold text-sm text-primaryBlue">
                      {`${item.initDate} - ${item.finalDate}`}
                    </h1>

                    <span>
                      <h1 className="text-primaryBlue text-sm font-bold italic">
                        {item.place}
                      </h1>
                      <h2 className="text-primaryBlue text-xs">{item.role}</h2>
                    </span>
                  </div>
                ))}
              </aside>
            ))}
          </div>

          <article>
            <h1 className="text-2xl font-bold">Hello,</h1>
            <h1 className="text-2xl font-bold mb-4">I'm Maria Fernanda</h1>

            <p className="text-zinc-600 mb-6">
              I’m a graphic designer with great interest in digital design
            </p>
            <div className="mb-6">
              {INFO.map((info) => (
                <span className="p-1 px-4 bg-primaryBlue rounded-xl text-yellow mr-2">
                  {info}
                </span>
              ))}
            </div>
            {SKILLS.map((skill) => (
              <span className="flex flex-row items-center mb-1">
                <img src={skill.icon} className="h-8 mr-4" />
                <h1 className="text-primaryBlue">{skill.name}</h1>
              </span>
            ))}
          </article>
        </div>
      </main>
    </section>
  );
}
