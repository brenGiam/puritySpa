import estiloServicios from "@/estilos/servicios.module.css";
import Image from "next/image";
import { kurale } from "@/estilos/fuentes";

export const metadata = {
    title: 'Purity Spa - Servicios'
}


export default function ServiciosPagina() {

    return (
        <div className={estiloServicios.main}>
            <div className={estiloServicios.contenedorBanner}>
                <Image
                    src="/servicios/banner.jpg"
                    width={1200}
                    height={350}
                    className={estiloServicios.banner}
                    alt="Banner Servicios"
                    priority
                />
                <p className={`${estiloServicios.textoBanner1} ${kurale.className} antialiased`} >Encontrá tu belleza</p>
                <p className={`${estiloServicios.textoBanner2} ${kurale.className} antialiased`} >natural</p>
            </div>

            <div className={estiloServicios.contenedor}>
                <Image
                    src="/servicios/depilacionDef.png"
                    width={500}
                    height={700}
                    className={estiloServicios.imagenes}
                    alt="Depilacion definitiva"
                />
                <div className={estiloServicios.contenedorDer}>
                    <h2 className={estiloServicios.titulos} >DEPILACION DEFINITIVA</h2>
                    <h4 className={estiloServicios.subtitulos}>SISTEMA SOPRANO XL</h4>
                    <h2 className={estiloServicios.titulos} >ULTIMA TECNOLOGIA PARA TUS TRATAMIENTOS</h2>
                    <p className={estiloServicios.textos}>Soprano brinda óptimos resultados a través del calentamiento de la dermis,
                        hasta una temperatura que elimina el folículo de forma permanente y previene su reaparición, sin necesidad de analgésicos
                        o sistemas adicionales de enfriamiento.
                    </p>
                    <ul className={estiloServicios.listas}>
                        <li>Excelentes resultados clínicos</li>
                        <li>Confortable para el paciente y el profesional</li>
                        <li>Para todo tipo de piel y vello</li>
                        <li>No genera efectos colaterales como irritación y enrojecimiento</li>
                    </ul>
                </div>
            </div>
            <div className={estiloServicios.contenedor}>
                <div className={estiloServicios.contenedorIzq}>
                    <h2 className={estiloServicios.titulos}>TRATAMIENTOS CORPORALES</h2>
                    <p className={estiloServicios.textos}>Adiposidad localizada, flacidez, celulitis, tonificación, masajes reductores,
                        modeladores, anticelulíticos combinados con la aparotología y complementos que necesites:
                    </p>
                    <ul className={estiloServicios.listas}>
                        <li>Ultracavitación</li>
                        <li>Radiofrecuencia multipolar</li>
                        <li>Electrodos</li>
                        <li>Botas de presoterapia</li>
                        <li>Vacumterapia</li>
                        <li>Vendas</li>
                        <li>Fango</li>
                        <li>Algas y máscaras</li>
                        <li>Mesoterapia corporal</li>
                    </ul>
                </div>
                <Image
                    src="/servicios/tratCorporales.jpg"
                    width={500}
                    height={700}
                    className={estiloServicios.imagenes}
                    alt="Tratamientos corporales"
                />
            </div>
            <div className={estiloServicios.contenedor}>
                <Image
                    src="/servicios/tratFaciales.jpg"
                    width={600}
                    height={800}
                    className={estiloServicios.imagenes}
                    alt="Tratamientos faciales"
                />
                <div className={estiloServicios.contenedorDer}>
                    <h2 className={estiloServicios.titulos}>TRATAMIENTOS FACIALES</h2>
                    <ul className={estiloServicios.listas}>
                        <li>Acné, rosácea y manchas</li>
                        <li>Peeling químico y con punta de diamante</li>
                        <li>Mesoterapia facial</li>
                        <li>Rejuvenecimiento facial con radiofrecuencia multipolar</li>
                        <li>Maquillaje social</li>
                    </ul>
                </div>
            </div>
            <div className={estiloServicios.contenedor}>
                <div className={estiloServicios.contenedorIzq}>
                    <h2 className={estiloServicios.titulos}>TRATAMIENTOS CAPILARES</h2>
                    <ul className={estiloServicios.listas}>
                        <li>Alisados</li>
                        <li>Shock de ketatina</li>
                        <li>Botox capilar</li>
                        <li>Pérdida de cabello</li>
                    </ul>
                </div>
                <Image
                    src="/servicios/tratCapilares.png"
                    width={400}
                    height={500}
                    className={estiloServicios.imagenes}
                    alt="Tratamientos capilares"
                />
            </div>
            <br />
            <br />
        </div>
    )
}