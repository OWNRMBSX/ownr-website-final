import Image from "next/image";

const team = [
  {
    name: "Christina Cartagena",
    role: "Chief Executive Officer",
    photo: "/deck-assets/image8.jpg",
  },
  {
    name: "Daniel Pason",
    role: "Chief Innovation Officer",
    photo: "/deck-assets/image9.jpg",
  },
  {
    name: "Matthew Moll",
    role: "Chief Operating Officer",
    photo: "/deck-assets/image4.jpg",
  },
];

const advisors = [
  {
    name: "Ling Xu",
    role: "Former VP Multifamily Investments & Portfolio Management, Freddie Mac",
    photo: "/deck-assets/image19.jpg",
  },
  {
    name: "Hamza Khan",
    role: "Former Head of European Data, NASDAQ | Founder with successful exit to NASDAQ",
    photo: "/deck-assets/image7.jpg",
  },
  {
    name: "Zack An",
    role: "Securitized Products Attorney",
    photo: "/deck-assets/image3.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal/[0.08] border border-teal/20 rounded-full mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-teal text-xs font-semibold uppercase tracking-wider">OWNR x S&P Global</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 leading-tight">
            Meet Our Team
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Deep expertise in fixed income, blockchain infrastructure, and
            financial technology.
          </p>
        </div>

        {/* Core Team */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {team.map((member) => (
            <div key={member.name} className="card-hover text-center bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="w-full h-64 relative bg-navy/5">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                <p className="text-teal text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisors */}
        <h3 className="text-center text-lg font-bold text-navy mb-8">
          Advisors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisors.map((advisor) => (
            <div key={advisor.name} className="card-hover flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
              <div className="w-14 h-14 relative rounded-full overflow-hidden shrink-0">
                <Image
                  src={advisor.photo}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-navy text-sm">{advisor.name}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{advisor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
