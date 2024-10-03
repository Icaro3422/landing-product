import Image from "next/image";
export const EvidenceGrid = () => {
  return (
    <section className="w-full py-12">
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
