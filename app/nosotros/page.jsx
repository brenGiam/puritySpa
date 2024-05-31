import estiloNosotros from "@/estilos/nosotros.module.css";
import Staff from "@/componentes/Staff";
import datosStaff from "@/app/datosStaff";
import Image from "next/image";

export const metadata = {
    title: 'Purity Spa - Nosotros'
}


export default function NosotrosPagina() {

    const datosDelStaff = datosStaff.map(item => {
        return (
            <Staff
                key={item.id}
                nombre={item.nombre}
                imagen={item.imagen}
                cargo={item.cargo}
                comentario={item.comentario}
            />
        )
    })

    return (
        <div className={estiloNosotros.main}>
            <Image
                src="/nosotros/banner.jpg"
                width={1200}
                height={350}
                className={estiloNosotros.banner}
                alt="Banner Nosotros"
            />
            <div className={estiloNosotros.contenedor1}>
                <h2 className={estiloNosotros.titulos} >ACERCA <br /> DE <br /> NOSOTROS</h2>
                <p className={estiloNosotros.textos}>¡Bienvenidos a PURITY! Nos dedicamos a realzar la belleza natural de cada cliente, brindando
                    servicios de alta calidad y personalizados
                    que resaltan lo mejor de cada persona.
                    Tenemos mas de 20 años en el rubro, hemos evolucionado y crecido junto a nuestros clientes,
                    construyendo relaciones sólidas basadas en
                    la confianza y la satisfacción. Nuestra pasión por la estética y la atención al cliente nos ha
                    llevado a perfeccionar nuestras técnicas y
                    a estar a la vanguardia de las últimas tendencias en el mundo de la belleza.
                    En nuestro Centro, nos enorgullece contar con un equipo de profesionales altamente calificados y
                    comprometidos, cuya misión es ofrecer un
                    servicio excepcional que vaya más allá de las expectativas. Nos esforzamos por crear un ambiente
                    acogedor y relajante, donde cada visita sea
                    una experiencia única y rejuvenecedora.
                    Además de nuestros tratamientos estéticos, también nos preocupamos por el bienestar integral de
                    nuestros clientes.
                    Creemos que la belleza va de la mano con la salud y el equilibrio emocional, por lo que
                    ofrecemos servicios que buscan armonizar el cuerpo y
                    la mente.

                    ¡Estamos emocionados de poder brindarte nuestros servicios! Gracias por confiar en nosotros y
                    ser parte de la familia de nuestro Centro de
                    Estética.
                </p>
            </div>
            <div className={estiloNosotros.contenedor2}>
                <h2 className={estiloNosotros.titulos}>Nuestro espacio</h2>
                <p className={estiloNosotros.textos}>Sumergite en un ambiente tranquilo y disfruta de la innovación y la excelencia en cada uno de
                    nuestros gabinetes. En nuestro Centro de Estética, no solo te ofrecemos tratamientos de calidad,
                    sino también un espacio que refleja nuestro compromiso con tu bienestar y satisfacción. ¡Te
                    invitamos a descubrir un oasis de belleza y cuidado en cada rincón de nuestro centro!
                </p>
                <div className={estiloNosotros.contenedor2b}>
                    <div className={estiloNosotros.vista}>
                        <img src="/nosotros/recepcion.jpg" alt="Recepcion" />
                        <div className={estiloNosotros.mask}>
                            <h3>Nuestra Recepción</h3>
                        </div>
                    </div>
                    <div className={estiloNosotros.vista}>
                        <img src="/nosotros/gabinete1.webp" alt="Gabinete 1" />
                        <div className={estiloNosotros.mask}>
                            <h3>Espacio relax</h3>
                        </div>
                    </div>
                    <div className={estiloNosotros.vista}>
                        <img src="/nosotros/gabinete2.jpg" alt="Gabinete 2" />
                        <div className={estiloNosotros.mask}>
                            <h3>Aparatología avanzada</h3>
                        </div>
                    </div>
                    <div className={estiloNosotros.vista}>
                        <img src="/nosotros/gabinete3.jpg" alt="Gabinete 3" />
                        <div className={estiloNosotros.mask}>
                            <h3>Los mejores productos</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={estiloNosotros.contenedor3}>
                <h2 className={estiloNosotros.titulos}>Nuestro STAFF</h2>
                <div className={estiloNosotros.contenedor3b}>
                    {datosDelStaff}
                </div>
            </div>
        </div>
    )
}