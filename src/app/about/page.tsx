import Link from "next/link";

export const metadata = {
  title: "About David | Positive Cultures",
  description:
    "David Scott is a registered mental health nurse with 25 years of experience across the NHS and private sector, and a Mental Health First Aid trainer.",
};

export default function About() {
  return (
    <>
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About David</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Registered mental health nurse, clinical lead and Mental Health First Aid trainer.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12">

          <div>
            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
              David is a registered mental health nurse with 25 years of experience within both the NHS and private sector.
            </p>
            <p className="text-gray-600 leading-relaxed">
              David has worked across a range of mental health services, including mental health crisis and home treatment teams, hospital liaison services, community mental health teams, low secure services plus elderly nursing and residential homes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Clinical leadership</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              He has spent much of his career in clinical lead roles ensuring that staff working with individuals with mental health conditions are supported to manage the impact that this may have on their own mental health.
            </p>
            <p className="text-gray-600 leading-relaxed">
              He has also led mental health training across services to ensure individuals with mental health are treated with compassion and understanding.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Current work</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              David is currently dedicated to developing Positive Cultures, after recently finishing work with the First Person Project. In this role he led in the development of bespoke assessment and support for individuals struggling with gambling addiction facilitating outreach work across the Liverpool area for individuals who may be reluctant to engage with health based services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              David also works as an associate trainer, with a number of other organisations, including: Body and Mind First Aid, an organisation providing a range of training from veterans and front line NHS staff, SafeHaven Training, a national company that provides a wide variety of training courses, and Isabelle, who runs a small team of health professionals who run training of all aspects of physical and mental health.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What drives him</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              David is a passionate advocate of increasing mental health awareness in non health settings and the provision of a safe space to raise concerns about the poor mental health and service signposting as needed.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-700 text-white font-medium px-6 py-3 rounded hover:bg-blue-800 transition-colors"
            >
              Enquire about training
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
