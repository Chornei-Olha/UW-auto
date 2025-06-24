'use client';

export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/6613287b48abd1589c4aa4b6a0909864"
      method="POST"
      className="space-y-4 max-w-lg mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        required
        className="w-full border border-gray-300 p-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Ваш email"
        required
        className="w-full border border-gray-300 p-2 rounded"
      />

      <textarea
        name="message"
        placeholder="Сообщение"
        className="w-full border border-gray-300 p-2 rounded"
      />

      {/* Защита от спама */}
      <input type="text" name="_honey" style={{ display: 'none' }} />

      {/* Перенаправление после отправки */}
      <input type="hidden" name="_next" value="https://example.com/thanks.html" />

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Отправить
      </button>
    </form>
  );
}
