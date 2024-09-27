import React, { useState } from "react";
import Divider from "../components/divider/divider";
import emailjs from 'emailjs-com';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Service, Template, and User IDs from EmailJS
    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const userID = "your_user_id";

    // Send the message to site admin
    emailjs.send(serviceID, templateID, formData, userID).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      }
    );

    // Send thank you message to the user
    const thankYouTemplateID = "your_thank_you_template_id";
    emailjs
      .send(
        serviceID,
        thankYouTemplateID,
        { user_email: formData.email, user_name: formData.name },
        userID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send thank you email.");
        }
      );

    // Clear form
    setFormData({ name: "", email: "", tel: "", message: "" });
  };
  return (
    <>
      <section className="container mx-auto pt-48 xl:pt-64 xl:py-32 py-24">
        <div className="mx-auto flex lg:gap-24 gap-10 lg:items-center items-start justify-start lg:flex-row flex-col w-full">
          {/* Left */}
          <div className="md:basis-2/4 basis-full pb-6">
            <h2 className="leading-normal font-bold mb-4 xl:text-4xl lg:text-3xl md:text-2xl text-xl text-secondary">
              Let's Connect
            </h2>
            <p className="text-base font-light leading-normal text-primary-800 mb-8 lg:pr-48">
              Whether you have questions, need support, or just want to share
              your thoughts, our team is ready to listen. Fill out the form or
              reach out via our contact details.{" "}
              <br className="lg:inline-block hidden" />{" "}
            </p>
            <h3 className="leading-[1.15] font-semibold mb-3 lg:text-xl text-lg text-primary">
              Follow us on Social Media
            </h3>
            <nav className="flex gap-3 text-lg">
              <a
                href="/"
                target="__blank"
                className="w-10 h-10 text-primary-50 flex items-center justify-center leading-[0] bg-primary hover:bg-primary-600 hover:text-secondary-100 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="25"
                  fill="none"
                >
                  <g clip-path="url(#facebook-dark_svg__a)">
                    <path
                      fill="currentColor"
                      d="M2.599 24.133v-11.16H.922c-.51 0-.922-.39-.922-.868V8.571c0-.476.415-.865.922-.865h1.677V4.864C2.599 2.178 4.917 0 7.775 0h4.303c.51 0 .922.388.922.867V4.4c0 .479-.413.866-.922.866H9.531c-.29 0-.53.226-.53.498v1.944l3.02-.002c.51.033.923.356.923.865-.062.822-.14 1.65-.217 2.475l-.105 1.131c-.04.447-.44.795-.918.795H9.001v11.161c0 .476-.413.866-.92.866L3.52 25c-.508 0-.922-.389-.922-.867Zm1.204-.263h3.994V11.84h3.648l.27-3.005H7.797v-3.07c0-.9.776-1.63 1.734-1.63h2.265V1.131H7.775c-2.194 0-3.972 1.671-3.972 3.732v3.973H1.204v3.003h2.6v12.03Z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="facebook-dark_svg__a">
                      <path fill="#fff" d="M0 0h13v25H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="/"
                target="__blank"
                className="w-10 h-10 text-primary-50 flex items-center justify-center leading-[0] bg-primary hover:bg-primary-600 hover:text-secondary-100 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                >
                  <g clip-path="url(#instagram-dark_svg__a)">
                    <path
                      fill="currentColor"
                      d="M16.045 0H5.955A5.962 5.962 0 0 0 0 5.955v10.09A5.962 5.962 0 0 0 5.955 22h10.09A5.962 5.962 0 0 0 22 16.045V5.955A5.962 5.962 0 0 0 16.045 0Zm4.665 16.045a4.67 4.67 0 0 1-4.665 4.665H5.955a4.67 4.67 0 0 1-4.665-4.665V5.955A4.67 4.67 0 0 1 5.955 1.29h10.09a4.67 4.67 0 0 1 4.665 4.665v10.09Z"
                    ></path>
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.05"
                      d="M11.5 5.975A5.531 5.531 0 0 0 5.975 11.5a5.531 5.531 0 0 0 5.525 5.525 5.531 5.531 0 0 0 5.525-5.525A5.531 5.531 0 0 0 11.5 5.975Zm0 9.82A4.3 4.3 0 0 1 7.204 11.5 4.3 4.3 0 0 1 11.5 7.204a4.3 4.3 0 0 1 4.296 4.296 4.3 4.3 0 0 1-4.296 4.296Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-width="0.6"
                      d="M18.3 5a1.3 1.3 0 1 0-2.6 0 1.3 1.3 0 0 0 2.6 0Z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="instagram-dark_svg__a">
                      <path fill="#fff" d="M0 0h22v22H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="/"
                target="__blank"
                className="w-10 h-10 text-primary-50 flex items-center justify-center leading-[0] bg-primary hover:bg-primary-600 hover:text-secondary-100 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="22"
                  fill="none"
                >
                  <g clip-path="url(#linkedin-dark_svg__a)">
                    <path
                      fill="currentColor"
                      d="m5.187 5.076-.004.004c-.364.352-.856.572-1.375.541H3.8c-.496 0-1.024-.193-1.383-.541l-.004-.004c-.39-.346-.588-.853-.588-1.364 0-.508.196-.984.592-1.368.36-.348.852-.541 1.418-.541.494 0 .987.192 1.348.541.396.384.592.86.592 1.368 0 .511-.198 1.018-.588 1.364Zm11.178 1.562c-1.286 0-2.514.499-3.375 1.312v-.17a.796.796 0 0 0-.257-.556.837.837 0 0 0-.568-.247h-3.5a.88.88 0 0 0-.549.211.733.733 0 0 0-.276.558V20.39c0 .233.121.42.28.543a.911.911 0 0 0 .545.192h3.85c.186 0 .388-.07.545-.192a.687.687 0 0 0 .28-.543v-7.322c0-1.055.789-1.875 1.8-1.875.53 0 1.023.192 1.383.54l.005.005c.31.27.447.701.447 1.296v7.288c0 .212.108.412.257.556.149.144.354.247.568.247h3.5a.837.837 0 0 0 .568-.247.795.795 0 0 0 .257-.556v-8.746c0-2.783-2.193-4.938-5.025-4.938h-.735Zm-1.19 3.627h-.003c-1.537.035-2.747 1.242-2.747 2.803v7.129h-3.6V7.905h3.25v2.339l.212-.205.98-.95.007-.006.007-.009c.675-.915 1.861-1.508 3.119-1.508h.735c2.276 0 4.04 1.775 4.04 4.01v8.621h-3.216l-.034-7.163c0-.836-.216-1.483-.703-1.954a2.924 2.924 0 0 0-2.047-.815ZM3.835.875c-.8 0-1.532.282-2.082.815-.584.565-.878 1.275-.878 2.022 0 .782.33 1.492.878 2.022.546.529 1.312.85 2.05.815h.067a2.82 2.82 0 0 0 1.977-.815c.546-.53.877-1.238.878-2.02.036-.751-.297-1.46-.842-1.989a2.816 2.816 0 0 0-2.048-.85ZM5.2 6.977H2.365c-.628 0-1.14.495-1.14 1.142v11.864c0 .615.55 1.142 1.175 1.142h2.8c.622 0 1.175-.524 1.175-1.108V8.119c0-.616-.55-1.142-1.175-1.142Zm.225 13.04c0 .04-.02.083-.065.12a.257.257 0 0 1-.16.06H2.4a.232.232 0 0 1-.154-.07.212.212 0 0 1-.071-.144V8.12c0-.114.097-.214.19-.214H5.2c.048 0 .106.024.154.07.048.047.071.101.071.144v11.898Z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="linkedin-dark_svg__a">
                      <path fill="#fff" d="M0 0h23v22H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </nav>
          </div>
          {/* Right */}
          <form
            className="p-8 px-6 rounded-xl w-full md:basis-2/4 basis-full shadow-2xl bg-white-base border-secondary-100 border"
            onSubmit={sendEmail}
          >
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                type="text"
                id="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                type="email"
                id="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1" htmlFor="tel">
                Phone
              </label>
              <input
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                type="tel"
                id="tel"
                required
                placeholder="Enter your phone"
                value={formData.tel}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                id="message"
                rows={5}
                required
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary justify-self-end text-white py-2 px-4 rounded-md transition duration-200 hover:bg-primary-dark"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Divider className="mb-12" />
    </>
  );
};

export default ContactUs;
