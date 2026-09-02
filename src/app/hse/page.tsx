import Link from "next/link";

export default function HSE() {
  return (
    <>
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Does the HSE Say About Mental Health in the Workplace?</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            The Health and Safety Executive is clear that employers have a responsibility to protect both the physical and mental health of their employees.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12">

          <div>
            <p className="text-gray-600 leading-relaxed">
              The HSE states that mental health should be considered as part of an organisation&apos;s overall health and safety arrangements, rather than being treated as a separate issue. Employers should identify workplace factors that may cause stress or poor mental health, assess risks to employees&apos; mental wellbeing, take practical steps to reduce or eliminate those risks, support employees who may be struggling, and monitor and review the effectiveness of workplace wellbeing measures.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mental health is a workplace health and safety issue</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The HSE recognises work-related stress, depression and anxiety as significant workplace health issues. In 2024/25, around 964,000 workers reported suffering from work-related stress, depression or anxiety, making mental ill health one of the leading causes of work-related ill health in Great Britain.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The HSE&apos;s Working Minds campaign encourages employers to prevent work-related stress in the same way they would manage any other workplace hazard — assessing the risk, taking action, and checking that the steps taken are working.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h3 className="font-bold text-gray-900 mb-3">What support does the HSE expect employers to provide?</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              The HSE does not prescribe a single approach, but expects employers to take reasonable and proportionate steps to support employee wellbeing. This may include mental health awareness training, manager training and development, Employee Assistance Programmes, occupational health support, wellbeing policies and procedures, Mental Health First Aiders, and clear signposting to professional support services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What about Mental Health First Aid?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In the HSE&apos;s updated First Aid at Work guidance, it highlights the importance of considering employees&apos; mental health when carrying out first aid needs assessments and determining appropriate workplace support arrangements. This means employers should consider the nature of their workforce, workplace stressors and risks, the level of support available to employees, and whether additional mental health awareness or Mental Health First Aid training would be beneficial.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The importance of compassionate leadership</h2>
            <p className="text-gray-600 leading-relaxed">
              The HSE also emphasises the importance of management behaviours, communication and employee involvement in creating healthy workplaces. Employees who feel supported by managers and leaders are more likely to raise concerns early and seek help when needed. Compassionate leadership helps organisations build trust, reduce stigma, improve employee engagement, encourage open conversations, and support earlier intervention when problems arise.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Will Mental Health First Aid become mandatory?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At present, there is no legal requirement for UK employers to provide Mental Health First Aid training or appoint Mental Health First Aiders. Employers are, however, legally required to protect the health, safety and welfare of their employees, including consideration of mental health risks in the workplace.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              In recent years there has been increasing focus on workplace mental health from government, the HSE, professional bodies and employers. HSE guidance now emphasises the importance of considering employees&apos; mental health when assessing workplace first aid needs, reflecting a growing recognition that mental wellbeing should be considered alongside physical health.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Several factors make increased expectations likely: rising levels of work-related stress, anxiety and depression; increasing recognition of mental health as a workplace health and safety issue; evidence that early intervention improves outcomes; and continued government and HSE focus on preventing work-related stress and promoting psychologically healthy workplaces.
            </p>
          </div>

          <div className="bg-blue-700 text-white rounded-lg p-8">
            <h3 className="font-bold text-lg mb-3">Our view at Positive Cultures</h3>
            <p className="text-blue-100 leading-relaxed text-sm">
              We believe the question should not be &ldquo;Will MHFA become mandatory?&rdquo; but rather &ldquo;How can we best support our people?&rdquo; Organisations that invest in mental health awareness and Mental Health First Aid training are often ahead of the curve, creating workplaces where employees feel supported, valued and able to perform at their best. Good mental health is fundamental to both employee wellbeing and organisational success — and that case is independent of any regulatory requirement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key message for employers</h2>
            <p className="text-gray-600 leading-relaxed">
              The HSE&apos;s position is not that every organisation must appoint Mental Health First Aiders. Rather, employers should actively consider mental health as part of their health and safety responsibilities and take reasonable steps to support employee wellbeing. Training staff in Mental Health First Aid is increasingly recognised as one effective way of achieving this — and the evidence for return on investment is strong. For every £1 invested in employee mental health support, organisations may achieve an average return of approximately £5.90 through reduced absence, improved productivity and lower turnover.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-gray-900 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Take the first step</h2>
        <p className="text-gray-400 mb-8">Talk to David about how Mental Health First Aid training can support your organisation&apos;s health and safety responsibilities.</p>
        <Link href="/contact" className="bg-white text-gray-900 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
          Get in touch
        </Link>
      </section>
    </>
  );
}
