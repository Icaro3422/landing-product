import Image from "next/image";

const images = [
  "/assets/evidencia1.webp",
  "/assets/evidencia2.webp",
  "/assets/evidencia3.webp",
];

export const EvidenceGrid = () => {
  return (
    <section className="w-full py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-40 sm:h-64 relative overflow-hidden"
          >
            <Image
              src={src}
              alt={`Experiencia del cliente usando el Colgador Mágico ${
                index + 1
              }`}
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="aspect-video relative rounded-xl mt-4">
        <video
          className="w-full h-full object-cover rounded-b-xl"
          controls
          muted
          preload="metadata"
        >
          <source src="/assets/evidencia4.mp4" type="video/mp4" />
          Tu navegador no soporta archivos mp4.
        </video>
      </div>
      <div className="bg-white p-4 mt-6">
        <blockquote>
          <p className="mb-2">
            En GoHome encontré la posibilidad de ordenar mi closet con
            eficiencia, este gancho para pantalones es una nota. Aquí les dejo
            el unboxing que hice de este gran producto.
          </p>
          <footer className="flex items-center space-x-2">
            <div className="rounded-full overflow-hidden">
              <Image
                src="/assets/user4.png"
                alt="Foto de perfil de Esteban Muñoz"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-2xl">Esteban Muñoz</span>
              <div className="flex" aria-label="Calificación de 5 estrellas">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="icon-[noto--star]"
                    aria-hidden="true"
                  ></span>
                ))}
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
