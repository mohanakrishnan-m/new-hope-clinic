'use client'
import { FiStar } from 'react-icons/fi'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya R.',
      feedback: 'Dr. Sarasjothi provided exceptional care during my pregnancy. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Arun K.',
      feedback: 'Dr. Premnath's cardiac expertise and compassionate approach made all the difference.',
      rating: 5,
    },
    {
      name: 'Meena S.',
      feedback: 'Professional, caring staff and excellent facilities. Best clinic in Puducherry!',
      rating: 5,
    },
    {
      name: 'Rajesh M.',
      feedback: 'Very satisfied with the personalized care and attention to detail.',
      rating: 5,
    },
    {
      name: 'Lakshmi V.',
      feedback: 'The doctors take time to explain everything clearly. Truly caring professionals.',
      rating: 5,
    },
    {
      name: 'Kumar P.',
      feedback: 'Clean, modern clinic with experienced doctors. Highly recommend for family care.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-gradient-medical">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What Our Patients Say</h2>
          <p className="text-xl text-body max-w-2xl mx-auto">
            Read testimonials from our satisfied patients who have experienced our compassionate care.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}