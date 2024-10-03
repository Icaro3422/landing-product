"use client";

import Image from "next/image";
import logo from "../../../public/assets/LOGO_PNG_COLOR.webp";
import user1 from "../../../public/assets/user5.png";
import user2 from "../../../public/assets/user6.png";
import user3 from "../../../public/assets/user7.png";

import ganchos1 from "../../../public/assets/ganchos1.webp";
import ganchos2 from "../../../public/assets/ganchos2.webp";
import ganchos3 from "../../../public/assets/ganchos3.webp";
import ganchos4 from "../../../public/assets/ganchos4.webp";
import { EvidenceGrid } from "../evidence-grid/EvidenceGrid";

const images = [ganchos1, ganchos2, ganchos3, ganchos4];

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 px-4 lg:px-6 flex items-center justify-center bg-mainGreen">
        <div className="relative">
          <Image
            src={logo}
            alt="Go home logo"
            className="w-36"
            width={144}
            height={36}
          />
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="w-full py-12">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Revoluciona tu closet con nuestro Colgador Mágico
              </h1>
              <h2 className="mt-4 text-xl text-gray-600">
                Gancho ahorrador de espacio para mantener tus pantalones
                ordenados
              </h2>
            </div>
          </section>
          <section className="w-full py-12">
            <div className="aspect-video relative">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/assets/ganchos-horizontal.mp4" type="video/mp4" />
                Tu navegador no soporta archivos mp4.
              </video>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {images.map((src, index) => (
                <div key={index} className="w-full h-40 sm:h-64 relative">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="rounded-lg object-cover"
                    fill
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Beneficios
            </h3>
            <ul className="grid gap-4 md:grid-cols-2 mt-6">
              <li className="flex items-center space-x-2">
                <span className="icon-[feather--check-circle] text-mainGreen"></span>
                <span>Ahorra hasta un 50% de espacio en tu closet</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="icon-[feather--check-circle] text-mainGreen"></span>
                <span>Organiza tu ropa por categorías fácilmente</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="icon-[feather--check-circle] text-mainGreen"></span>
                <span>Material duradero que soporta hasta 10 kg de peso</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="icon-[feather--check-circle] text-mainGreen"></span>
                <span>
                  Diseño elegante que combina con cualquier decoración
                </span>
              </li>
            </ul>
            <div className="text-center mt-12">
              <a
                href="https://gohome.com.co/products/gancho-para-pantalones"
                rel="noopener noreferrer"
                target="__self"
              >
                <button className="bg-yellow-500 rounded-full  text-black text-2xl font-bold py-4 px-8 cursor-pointer">
                  Ordena ahora, paga contraentrega
                </button>
              </a>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Lo que dicen nuestros clientes
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
              {[
                {
                  user: user1,
                  stars: 5,
                  name: "María García",
                  src: "/assets/evidencia1.webp",
                  comment:
                    "uff! Me encantó la atención y lo rápido que llegó mi pedido. Ahora si podré ordenar mi closet. Muchas gracias GoHome",
                },
                {
                  user: user2,
                  stars: 4,
                  name: "Juan Pérez",
                  src: "/assets/evidencia3.webp",
                  comment:
                    "GoHome, qué nota de producto. Ahora si mi esposa no me regañará por tener los pantalones tirados.",
                },
                {
                  user: user3,
                  stars: 5,
                  name: "Ana Martínez",
                  src: "/assets/evidencia2.webp",
                  comment:
                    "No me considero buena armando nadaaaa, pero con este producto la rompieron. Lo logré súper fácil.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <div
                    key={index}
                    className="w-full h-40 sm:h-64 relative overflow-hidden"
                  >
                    <Image
                      src={testimonial.src}
                      alt={`Experiencia del cliente usando el Colgador Mágico ${
                        index + 1
                      }`}
                      className="rounded-lg object-cover"
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <p className="mb-2 mt-4">{testimonial.comment}</p>
                  <div className="flex items-center space-x-2">
                    <div className="rounded-full overflow-hidden">
                      <Image
                        src={testimonial.user}
                        alt="1"
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="font-semibold">{testimonial.name}</span>
                    <div className="flex">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <span key={i} className="icon-[noto--star]"></span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <EvidenceGrid />
          </section>
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Es elegido por:
          </h3>
          <section className="w-full mt-6 py-8 md:py-24 bg-green-600 rounded-xl">
            <ul className="pl-6 space-y-2 max-w-2xl mx-auto">
              <li className="flex items-center space-x-2">
                <span className="icon-[feather--check-circle] text-white"></span>
                <span className="text-lg font-medium">
                  Fabricado con plástico ABS de alta resistencia
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="icon-[feather--check-circle] text-white"></span>
                <span className="text-lg font-medium">
                  Capacidad para colgar hasta 5 prendas
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="icon-[feather--check-circle] text-white"></span>
                <span className="text-lg font-medium">
                  Sistema de rotación de 360 grados para fácil acceso
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="icon-[feather--check-circle] text-white"></span>
                <span className="text-lg font-medium">
                  Diseño plegable para ahorrar espacio cuando no está en uso
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="icon-[feather--check-circle] text-white"></span>
                <span className="text-lg font-medium">
                  Compatible con la mayoría de los closets estándar
                </span>
              </li>
            </ul>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="text-center">
              <p>
                Antes{" "}
                <span className="text-2xl text-gray-500 line-through font-semibold">
                  $34.900
                </span>
                COP
              </p>
              <p className="text-sm text-green-600 font-medium">
                Ahora{" "}
                <span className="text-5xl text-green-600 font-bold">
                  $19.900
                </span>
                COP
              </p>
              <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                ¿Listo para transformar
                <br /> tu closet?
              </h3>
              <p className="text-xl mb-12">
                Ordena ahora y recibe en las próximas 48 horas
              </p>
              <a
                href="https://gohome.com.co/products/gancho-para-pantalones"
                rel="noopener noreferrer"
                target="__self"
              >
                <button className="bg-yellow-500 rounded-full  text-black text-2xl font-bold py-4 px-8 cursor-pointer">
                  Ordena ahora, paga contraentrega
                </button>
              </a>
            </div>
          </section>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-700">
          © 2024 GoHome. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};
