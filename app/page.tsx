"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionsRef.current[index] = el;
    }
  };

  useEffect(() => {
    const section = sectionsRef.current;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          if (sectionId) {
            history.replaceState(null, "", `#${sectionId}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    section.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      section.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="home" className="flex flex-col min-h-screen" ref={setRef(0)}>
        <div className="container px-4 md:px-8 lg:px-16 mx-auto flex-1 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 flex-1 content-center">
            <div className="flex flex-col gap-10 py-32">
              <div className="flex flex-col gap-4">
                <h1 className="text-custom-gray font-bold text-6xl lg:text-8xl block">
                  Ayo Produktif dengan{" "}
                  <span className="text-custom-orange">Taskly.</span>
                </h1>
                <p className="text-custom-gray font-normal text-sm md:text-base text-wrap w-[70%]">
                  Atur tugas harian Anda dengan mudah.{" "}
                  <span className="text-custom-orange font-bold">Taskly</span>{" "}
                  membantu Anda tetap fokus dan terorganisir, baik di kantor
                  maupun di rumah.
                </p>
              </div>
              <Link
                href="/signup"
                className="font-poppins text-sm md:text-base w-fit px-5 py-2.5 bg-custom-gray rounded-lg font-medium font-sm text-white"
              >
                Mulai Sekarang
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <Image
                  alt="Illustration"
                  src="/image/hero-illustration.svg"
                  style={{ objectFit: "contain" }}
                  priority={true}
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" ref={setRef(1)}>
        <div className="container px-4 md:px-8 lg:px-16 mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:grid grid-cols-6 gap-8 md:gap-10">
            <div
              className="h-48 md:col-span-2"
              style={{
                backgroundColor: "#f3f2ec",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%231e2631' fill-opacity='0.4' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E");`,
              }}
            ></div>
            <div className="col-span-5 md:col-span-4">
              <div className="flex flex-col gap-4 md:gap-8">
                <h1 className="font-bold text-custom-gray text-4xl md:text-6xl">
                  Tentang <span className="text-custom-orange">Taskly.</span>
                </h1>
                <div className="flex flex-col gap-3 md:gap-4">
                  <p className="font-normal text-custom-gray text-sm md:text-base text-justify">
                    Selamat datang di Taskly, solusi terdepan untuk manajemen
                    tugas dan produktivitas pribadi Anda. Taskly berkomitmen
                    untuk membantu Anda mengelola pekerjaan dengan cara yang
                    lebih efisien dan terorganisir, sehingga Anda dapat fokus
                    pada hal-hal yang benar-benar penting.
                  </p>
                  <p className="font-normal text-custom-gray text-sm md:text-base text-justify">
                    Taskly didirikan pada tahun 2024 dengan misi untuk
                    menyederhanakan cara mengelola tugas sehari-hari Anda. Dari
                    hari pertama, kami bertekad untuk menciptakan platform yang
                    intuitif dan efektif untuk semua pengguna.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:grid grid-cols-2">
            <div className="flex flex-col gap-4 md:p-8 lg:p-32">
              <h1 className="font-bold text-2xl md:text-4xl text-custom-gray italic">
                &quot;Prioritaskan tugas Anda dan lakukan yang terpenting
                terlebih dahulu.&quot;
              </h1>
              <p className="font-light text-sm md:text-lg">— Stephen Covey</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square md:aspect-auto w-full h-full">
                <Image
                  alt="Illustration"
                  src="/image/quotes.svg"
                  style={{ objectFit: "contain" }}
                  priority={true}
                  fill
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:grid grid-cols-6 gap-6 lg:gap-10">
            <div className="col-span-2 flex flex-col gap-4 items-start p-4 rounded-lg bg-white h-fit">
              <div className="w-full aspect-square relative ">
                <Image
                  className="rounded-md"
                  alt="Illustration"
                  src="/image/me.JPG"
                  style={{
                    objectFit: "contain",
                    objectPosition: "top",
                    aspectRatio: 1 / 1,
                  }}
                  priority={true}
                  fill
                />
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold text-xl text-custom-gray font-poppins">
                    Egy Dya Hermawan
                  </h1>
                  <p className="text-custom-gray text-sm">22 Tahun</p>
                </div>
                <div className="flex items-center">
                  <Link
                    href="https://www.linkedin.com/in/egydyahermawan/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0288D1"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/egydyahermawan/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                    >
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                        cx="19.38"
                        cy="42.035"
                        r="44.899"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#fd5"></stop>
                        <stop offset=".328" stopColor="#ff543f"></stop>
                        <stop offset=".348" stopColor="#fc5245"></stop>
                        <stop offset=".504" stopColor="#e64771"></stop>
                        <stop offset=".643" stopColor="#d53e91"></stop>
                        <stop offset=".761" stopColor="#cc39a4"></stop>
                        <stop offset=".841" stopColor="#c837ab"></stop>
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                      ></path>
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                        cx="11.786"
                        cy="5.54"
                        r="29.813"
                        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#4168c9"></stop>
                        <stop
                          offset=".999"
                          stopColor="#4168c9"
                          stopOpacity="0"
                        ></stop>
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                      ></path>
                      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                      <path
                        fill="#fff"
                        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-4 md:gap-8">
              <h1 className="font-bold text-custom-gray text-4xl md:text-6xl">
                Di Balik <span className="text-custom-orange">Taskly.</span>
              </h1>
              <div className="flex flex-col gap-3 md:gap-4">
                <p className="font-bold text-custom-gray text-lg md:text-2xl">
                  Halo, saya Egy. 🤗
                </p>
                <p className="font-normal text-custom-gray text-sm md:text-base text-justify">
                  Saya adalah seorang lulusan D4 Teknik Informatika dari
                  Politeknik Caltex Riau dengan IPK 3.85. Saat ini, saya sedang
                  berusaha mencari peluang kerja yang sesuai dengan minat dan
                  keahlian saya sebagai seorang Fresh Graduate.
                </p>
                <p className="font-normal text-custom-gray text-sm md:text-base text-justify">
                  Selama masa studi dan beberapa tahun terakhir, saya telah
                  mengembangkan keterampilan saya di bidang Fullstack Web
                  Development. Saya memiliki pengalaman sebagai UI/UX Designer
                  dan Frontend Web Developer di Mongga Indonesia, di mana saya
                  merancang dan mengimplementasikan desain UI/UX untuk aplikasi
                  internal real estate menggunakan Figma dan Svelte Framework.
                  Selain itu, saya juga bekerja sebagai Frontend Web Developer
                  di E-Syakl (Arabic-Go), di mana saya menangani implementasi
                  desain UI dan integrasi API sambil melakukan black-box testing
                  untuk memastikan kualitas aplikasi.
                </p>
                <p className="font-normal text-custom-gray text-sm md:text-base text-justify">
                  Selain itu, saya memiliki pengalaman sebagai Fullstack Web
                  Developer Mentor di PT Global Investment Institusi
                  (LearningX), di mana saya membimbing siswa MSIB dan siswa
                  sekolah vokasi dalam pengembangan web menggunakan Bootstrap
                  dan Flask. Selama masa magang saya di LearningX, saya juga
                  terlibat dalam merancang dan merencanakan kurikulum serta
                  mengembangkan proyek akhir untuk manajemen kehadiran dan nilai
                  peserta MSIB.
                </p>
                <p className="font-normal text-custom-gray text-sm md:text-base text-justify">
                  Di luar dunia profesional, saya menikmati bermusik dan
                  menonton film. Saya percaya bahwa kombinasi pengalaman teknis
                  dan minat pribadi saya memberi saya perspektif unik dalam
                  mengatasi tantangan dan menemukan solusi kreatif.
                </p>
                <p className="font-normal text-custom-gray text-sm md:text-base text-justify">
                  Saya sangat antusias untuk menerapkan keterampilan dan
                  pengetahuan saya dalam lingkungan kerja yang dinamis dan terus
                  berkembang. Terima kasih telah meluangkan waktu untuk mengenal
                  saya lebih baik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" ref={setRef(2)}>
        <div className="container px-4 py-16 md:px-8 md:py-16 lg:p-16 mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-10 lg:grid grid-cols-10">
            <div className="flex flex-col gap-8 md:gap-10 lg:col-span-6">
              <div className="flex flex-col">
                <p className="text-sm md:text-base text-custom-orange">KONTAK</p>
                <h1 className="font-bold text-custom-gray text-4xl md:text-6xl">
                  Ayo, kita ngobrol!
                </h1>
              </div>
              <p className="text-sm md:text-base text-custom-gray">
                Saya selalu senang mendengar sesuatu dari Anda. Punya
                pertanyaan, ide, atau sekadar ingin berbagi cerita? Jangan ragu,
                Saya di sini untuk mendengarkan dan membantu. ✨
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex w-full gap-4 items-center bg-white rounded-lg p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#4caf50"
                      d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                    ></path>
                    <path
                      fill="#1e88e5"
                      d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                    ></path>
                    <polygon
                      fill="#e53935"
                      points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                    ></polygon>
                    <path
                      fill="#c62828"
                      d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                    ></path>
                    <path
                      fill="#fbc02d"
                      d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                    ></path>
                  </svg>
                  <div className="flex flex-col">
                    <p className="text-custom-gray text-xs font-bold">Gmail</p>
                    <p className="text-custom-gray text-sm md:text-base">
                      egydya.edh12@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex w-full gap-4 items-center bg-white rounded-lg p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    ></path>
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    ></path>
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    ></path>
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="flex flex-col">
                    <p className="text-custom-gray text-xs font-bold">
                      WhatsApp
                    </p>
                    <p className="text-custom-gray text-sm md:text-base">
                      +62 823-8765-5402
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:justify-end lg:col-span-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
