import { ChangeEvent, FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const mailToLink = `mailto:egydya.edh12@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nama: ${formData.name}\n\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`

    window.location.href = mailToLink;
  }

  return (
    <div className="w-full bg-white rounded-2xl md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-6 md:space-y-6 sm:p-8">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-custom-gray"
            >
              Nama Lengkap
            </label>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full py-2.5 px-4 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-custom-gray focus:border-custom-gray"
                placeholder="Nama lengkap anda"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-custom-gray"
            >
              Alamat Email
            </label>
            <div className="flex flex-col gap-1">
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full py-2.5 px-4 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-custom-gray focus:border-custom-gray"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-custom-gray"
            >
              Subyek
            </label>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                id="subject"
                name="subject"
                className="block w-full py-2.5 px-4 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-custom-gray focus:border-custom-gray"
                placeholder="Subyek pesan"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-custom-gray"
            >
              Pesan
            </label>
            <div className="flex flex-col gap-1">
              <textarea
                id="message"
                name="message"
                className="block w-full py-2.5 px-4 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-custom-gray focus:border-custom-gray"
                placeholder="Subyek pesan"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-5 py-2.5 text-white bg-custom-gray hover:bg-gray-900 font-normal text-sm rounded-lg text-center"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
