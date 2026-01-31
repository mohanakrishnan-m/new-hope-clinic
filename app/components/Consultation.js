'use client'
import { FiCalendar, FiUserCheck, FiCheckSquare } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Consultation() {
  const steps = [
    {
      icon: FiCalendar,
      title: 'Make Appointment',
      description: 'Call us or message on WhatsApp to schedule your visit at a convenient time.',
    },
    {
      icon: FiUserCheck,
      title: 'Select Expert Doctor',
      description: 'Choose from our experienced specialists based on your health needs.',
    },
    {
      icon: FiCheckSquare,
      title: 'Confirm Consultation',
      description: 'Receive confirmation and visit us for personalized, compassionate care.',
    },
  ]

  return (
    <section id="consultation" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">How to Get a Consultation?</h2>
            <ul className="space-y-4 text-lg text-body">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </span>
                <span>Simple and quick appointment booking process</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </span>
                <span>Expert care from qualified specialists</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="tel:+918222090909" className="btn-primary">
                <FiCalendar className="w-5 h-5" />
                Book Appointment
              </a>
              <a href="https://wa.me/918222090909" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            {steps.map((step, index) => (
              <div key={index} className="card p-6 hover:shadow-card-hover transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-body">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}