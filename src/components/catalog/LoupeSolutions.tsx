import Image from "next/image";
import RouteEnum from "@/enums/route.enum";
import { ButtonLink, CircleLink, Container, ReadMore } from "@/components/ui";
import ergonomicsPhoto from "@/assets/ergonomics.jpg";

const LOUPE_DETAILS = [
  {
    title: "More than magnification",
    paragraphs: [
      "ExamVision loupes are built for dentists, hygienists, surgeons, students, veterinarians and every professional whose work depends on fine detail. You get a wider field of view, deeper depth of field and true colour, so you see more and guess less.",
      "The award winning frame balances the weight of the loupes, so after a few minutes they feel like ordinary glasses. That is what makes a full working day with them comfortable.",
    ],
  },
  {
    title: "Magnification and ergonomics go hand in hand",
    paragraphs: [
      "Without loupes most of us lean in to see better. Day after day that posture turns into neck and lower back pain, tired eyes and headaches. With the right magnification and working distance you sit upright and the detail comes to you.",
      "Try ExamVision loupes yourself. At the fitting we advise you on magnification, vision, optics, eye protection and ergonomics.",
    ],
  },
  {
    title: "Ergonomic guidance",
    paragraphs: [
      "When you order loupes from Lume, we also look at how you work. We check your working position and distance, the height of your chair and tools, your lighting and your eyesight, and show you how to set things up better.",
      "Long static positions are a common cause of pain and injury, so we also share simple ways to change position during the day and stretches you can do between patients. The result is better treatments, faster procedures and more energy at the end of the day.",
    ],
  },
  {
    title: "Longer working life",
    paragraphs: [
      "Bright LED lights and curing lamps expose your eyes to UV and blue violet light every day. Over the years this is one of the factors behind cataracts and age related macular degeneration.",
      "ExamVision BLP and VLP coatings protect both the ocular and the carrier lenses, and ExamVision LED lights give you the right amount of light exactly where you need it. Your eyes stay healthier and your vision stays relaxed.",
    ],
  },
  {
    title: "Your perfect loupe",
    paragraphs: [
      "ExamVision design has won the Red Dot Product Design Award five times: in 2010, 2012, 2014, 2019 and 2024. Book a fitting with Lume and find the loupe that is made for you.",
    ],
  },
];

// const BENEFITS = [
//   {
//     title: "Magnification and ergonomics go hand in hand",
//     text: "The right working distance and declination angle keep your neck and back straight during long treatments.",
//   },
//   {
//     title: "Ergonomic guidance",
//     text: "During the fitting we look at how you sit and work, and set up the loupes for your real posture.",
//   },
//   {
//     title: "Longer working life",
//     text: "BLP and VLP coatings protect your eyes from UV and blue violet light from curing lamps and LEDs.",
//   },
//   {
//     title: "Your perfect loupe",
//     text: "Award winning Danish design, Red Dot Product Design Award in 2010, 2012, 2014, 2019 and 2024.",
//   },
// ];

export const LoupeSolutions = () => {
  return (
    <>
      <section className="border-t border-line">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-widest text-muted uppercase">Made for you</p>
            <h2 className="text-3xl font-semibold tracking-tight">The most customisable loupes on the market, fitted to you in Armenia</h2>
            <p className="text-muted">
              Every ExamVision loupe is built around one person: YOU. Your height, working distance, facial features and
              prescription all go into the specification. The loupes are handmade in Denmark under optometrist
              supervision and pass strict quality control before they ship. Lume measures you at your clinic and does the
              final fitting, so you put them on and start working.
            </p>
            <ReadMore>
              <div className="flex flex-col gap-6 pt-2">
                {LOUPE_DETAILS.map((detail) => (
                  <div key={detail.title} className="flex flex-col gap-2">
                    <h3 className="font-semibold">{detail.title}</h3>
                    {detail.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </ReadMore>
          </div>
          {/* <div className="grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="rounded-xl bg-soft p-5">
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted">{benefit.text}</p>
              </div>
            ))}
          </div> */}
        </Container>
      </section>

      <section className="bg-[#f6f6f6]">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[56fr_44fr] lg:gap-0 lg:py-20">
          <div className="relative aspect-4/3">
            <Image
              src={ergonomicsPhoto}
              alt="Dentist sitting upright while working with ExamVision loupes"
              fill
              unoptimized
              sizes="(min-width: 1280px) 700px, (min-width: 1024px) 55vw, 100vw"
              className="object-cover object-[50%_40%]"
            />
          </div>
          <div className="flex max-w-md flex-col lg:pl-20 xl:max-w-none xl:pl-32">
            <h2 className="mb-8 text-5xl font-light tracking-tight xl:text-[4.25rem] xl:leading-none">Ergonomics</h2>
            <div className="flex flex-col gap-3 text-xl leading-relaxed font-light text-muted">
              <p>
                Loupes help improve your work position significantly. Longer working distances place greater demand on
                your vision. Loupes offer the solution.
              </p>
              <p>Good ergonomics are a crucial prerequisite for a long, enjoyable and healthy working life.</p>
            </div>
            <CircleLink href={RouteEnum.BOOKING} className="mt-12">
              Ergonomics
            </CircleLink>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container className="flex flex-col items-center gap-6 py-20 text-center sm:py-28">
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">Try them in your clinic. Free.</h2>
          <p className="max-w-xl text-lg font-light text-white/70">
            We visit your clinic anywhere in Armenia, take your measurements and let you evaluate the optics in your own
            working position. The fitting is complimentary and carries no obligation.
          </p>
          <ButtonLink href={RouteEnum.BOOKING} variant="light" className="mt-2">
            Book a visit
          </ButtonLink>
        </Container>
      </section>
    </>
  );
};
