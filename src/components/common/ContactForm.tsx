import { section } from 'framer-motion/client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    agreeProcessing: false,
    agreePolicy: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-5 sm:py-16">
      {' '}
      <div className="mb-6 text-left font-semibold">
        <h2 className="text-base md:text-xl mb-6 text-gray-700">
          Купити оптом, або замовити консультацію
        </h2>
      </div>
      <div
        className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden w-full"
        style={{
          backgroundImage: "url('/images/form.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* контент */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 text-white flex flex-col gap-6 p-5 sm:p-5"
        >
          {/* Верхняя часть */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label className="block mb-1">Як Вас звати?</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Введіть Ваше Ім'я"
                className="w-full p-2 rounded-lg text-white bg-transparent border border-white placeholder-white/50"
                required
              />
            </div>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Введіть e-mail..."
                  className="w-full p-2 rounded-lg text-white bg-transparent border border-white placeholder-white/50"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-1">Коментар</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Текст"
                className="w-full p-2 rounded-lg text-white h-20 bg-transparent border border-white placeholder-white/50"
              />
            </div>
          </div>

          {/* Нижняя часть */}
          <div className="flex flex-col sm:flex-row justify-between items-left sm:items-center gap-5 sm:gap-0">
            <div className="items-left space-y-2 text-sm">
              <label className="flex items-left gap-2">
                <input
                  type="checkbox"
                  name="agreeProcessing"
                  checked={formData.agreeProcessing}
                  onChange={handleChange}
                />
                Даю згоду на обробку інформації
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreePolicy"
                  checked={formData.agreePolicy}
                  onChange={handleChange}
                />
                Погоджуюсь з політикою конфіденційності
              </label>
            </div>
            <div className="flex justify-center sm:justify-end">
              <button
                type="submit"
                className="bg-white hover:bg-red-600 text-[#C52233] hover:text-white px-6 py-2 rounded-full shadow-md "
              >
                Надіслати
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
