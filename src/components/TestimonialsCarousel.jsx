import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    text: 'This service transformed our business! Highly recommended.',
    company: 'Acme Corp',
  },
  {
    name: 'John Smith',
    text: 'Professional, reliable, and innovative. A pleasure to work with.',
    company: 'Beta LLC',
  },
  {
    name: 'Alice Johnson',
    text: 'Exceeded our expectations in every way.',
    company: 'Gamma Inc',
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl shadow p-6 flex-1 text-center hover:shadow-lg transition">
              <p className="text-lg italic mb-4">"{t.text}"</p>
              <div className="font-semibold text-blue-600">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
