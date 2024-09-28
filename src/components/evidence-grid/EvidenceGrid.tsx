import Image from "next/image";

import picture1 from "../../../public/assets/evidencia1.webp";
import picture2 from "../../../public/assets/evidencia2.webp";
import picture3 from "../../../public/assets/evidencia3.webp";
import user4 from "../../../public/assets/user4.png";

const images = [picture1, picture2, picture3];

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
              alt={`Image ${index + 1}`}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
      <div className="aspect-video relative rounded-xl mt-4">
        <video
          className="w-full h-full object-cover rounded-b-xl"
          autoPlay
          muted
        >
          <source src="/assets/evidencia4.mp4" type="video/mp4" />
          Tu navegador no soporta archivos mp4.
        </video>
      </div>
      <div className="bg-white p-4 mt-6">
        <p className="mb-2">
          En GoHome encontré la posibilidad de ordenar mi closet con eficiencia,
          este gancho para pantalones es una nota. Aquí les dejo el unboxing que
          hice de este gran producto.
        </p>
        <div className="flex items-center space-x-2">
          <div className="rounded-full overflow-hidden">
            <Image
              src={user4}
              alt="1"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-2xl">Esteban Muñoz</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="icon-[noto--star]"></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
