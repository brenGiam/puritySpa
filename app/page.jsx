import "@/estilos/globals.css";
import { kurale } from "@/estilos/fuentes";
import Carrusel from "@/componentes/Carrusel";
import Image from "next/image";


export default function InicioPagina() {
  return (
    <div className="main" id="Inicio">
      <div className="contenedor1">
        <h1 className={`${kurale.className} antialiased`}>CENTRO DE ESTÉTICA INTEGRAL</h1>
        <p className="contenedor1-texto">+20 Años de experiencia brindando servicios <br /> para el cuidado de tu cuerpo y piel.</p>
      </div>
      <div className="contenedor2">
        <h2 className="contenedor2-subtitulo">TRAYECTORIA Y DEDICACION</h2>
        <div className="contenedor2-1">
          <div className="contenedor2-2">
            <img className="contenedor2-icono" src="/inicio/icono1.png" alt="Simbolo mujer" />
            <h4 className="contenedor2-2-subtitulo">Honestidad y compromiso</h4>
            <p>Asesorando con el tratamiento adecuado dependiendo cada caso y tipo de piel</p>
          </div>
          <div className="contenedor2-2">
            <img className="contenedor2-icono" src="/inicio/icono2.png" alt="Certificado" />
            <h4 className="contenedor2-2-subtitulo">Tratamientos Certificados</h4>
            <p>Nuestra metodología y maquinaria están avaladas por los principales entes de salud
            </p>
          </div>
          <div className="contenedor2-2">
            <img className="contenedor2-icono" src="/inicio/icono3.png" alt="Productos" />
            <h4 className="contenedor2-2-subtitulo">Variedad en productos</h4>
            <p>Te ofrecemos la más amplia gama de productos para cada uso y los mejores precios</p>
          </div>
        </div>
      </div>
      <div className="contenedor3">
        <div className="contenedor3-banner">
          <p className="banner-texto">REALMENTE ES UN ANTES & DESPUES</p>
        </div>
        <Carrusel />
      </div>
      <div className="contenedor4">
        <img className="contenedor4-check" src="/inicio/check.png" alt="Tilde" />
        <p className="contenedor4-texto-arriba">HASTA 1 TALLA EN 1 SOLA SESIÓN!</p>
        <div className="contenedor4-1">
          <Image
            src="/inicio/liposonix.jpg"
            width={1200}
            height={350}
            className="contenedor4-imagen"
            alt="Liposonix"
          />
          <p className="contenedor4-texto-imagen">Solicitá tu turno</p>
        </div>
      </div>
    </div >
  );
}
