import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonies = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, Example Company',
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec velit vulputate, luctus tellus vitae, tempus odio. Nullam finibus tortor eu leo aliquet, eget placerat nisi venenatis.",
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Founder, Another Company',
    quote:
      "Sed sit amet consequat metus. Etiam auctor vestibulum nunc. Nullam ac consectetur velit, vitae laoreet sem. Sed lacinia, orci ut imperdiet fermentum, elit leo fringilla elit.",
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    title: 'CTO, New Startup',
    quote:
      "Fusce ullamcorper venenatis risus vel dapibus. In hac habitasse platea dictumst. Aliquam erat volutpat. Cras ultrices arcu nec libero elementum.",
    photo: 'https://via.placeholder.com/150',
  },
];

const Testimonies = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Client Testimonials</h2>
      <Slider {...sliderSettings}>
        {testimonies.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 shadow-md rounded-md">
            <div className="flex items-center mb-4">
              <img src={testimonial.photo} alt={testimonial.name} className="rounded-full mr-4" />
              <div>
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-lg">{testimonial.quote}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonies;
