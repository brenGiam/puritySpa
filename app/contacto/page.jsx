import estiloContacto from "@/estilos/contacto.module.css";
import { kurale } from "@/estilos/fuentes";
import Link from "next/link";
import Opiniones from "@/componentes/Opiniones";

export const metadata = {
    title: 'Purity Spa - Contacto'
}

export default function ContactoPagina() {
    return (
        <div className={estiloContacto.main}>
            <div className={estiloContacto.banner}>
                <p className={`${estiloContacto.textoBanner1} ${kurale.className} antialiased`} >HOLA! somos Purity Spa</p>
                <p className={`${estiloContacto.textoBanner2} ${kurale.className} antialiased`} >Contactate con nosotros</p>
            </div>
            <div className={estiloContacto.contenedor}>
                <div className={estiloContacto.contenedorIzq}>
                    <h3 className={estiloContacto.titulos}>Nuestras vias de contacto:</h3>
                    <ul className={estiloContacto.listas}>
                        <li><img className={estiloContacto.iconos}
                            src="/contacto/wsp.webp" alt="Logo Whatsapp" />Tel/Wsp: 2915012240
                        </li>
                        <li><img className={estiloContacto.iconos}
                            src="/contacto/mail.webp" alt="Logo Mail" />Mail: purity-spa@gmail.com
                        </li>
                        <li><img className={estiloContacto.iconos}
                            src="/contacto/facebook.png" alt="Logo FB" />Facebook:
                            <Link href="https://www.facebook.com/" target="_blank" className={estiloContacto.links}> puritySpa</Link>
                        </li>
                        <li><img className={estiloContacto.iconos}
                            src="/contacto/insta.png" alt="Logo IG" />Instagram:
                            <Link href="https://www.instagram.com" target="_blank" className={estiloContacto.links}> puritySpaok</Link>
                        </li>
                    </ul>
                    <p className={estiloContacto.texto}>Tambien podés escribirnos mediante éste formulario y nos pondremos en contacto a la brevedad</p>

                    <form className={estiloContacto.formulario} name="contacto" action="mailto: bren_lp5@hotmail.com" method="post" encType="text"
                        acceptCharset="utf-8">

                        <label
                            htmlFor="nombre" className="form-label">Nombre y apellido: </label>
                        <input className={`${estiloContacto.inputs} form-control`}
                            type="text" id="nombre" placeholder="Nombre y Apellido" required />
                        <label
                            htmlFor="correo" className="form-label">Correo Electrónico:</label>
                        <input className={`${estiloContacto.inputs} form-control`}
                            type="email" id="correo" placeholder="Mail" required />
                        <label
                            htmlFor="telefono" className="form-label">Teléfono: </label>
                        <input className={`${estiloContacto.inputs} form-control`}
                            type="tel" id="telefono" placeholder="Telefono" required />
                        <label
                            htmlFor="comentario" className="form-label">Comentario: </label>
                        <textarea className={estiloContacto.area}
                            type="text" id="comentario" placeholder="Escribinos acá" cols="25" rows="4" required></textarea>
                        <div className={estiloContacto.contenedorBotones}>
                            <button className={`${estiloContacto.botones} btn btn-primary`}
                                type="submit" > Enviar</button>
                            <button className={`${estiloContacto.botones} btn btn-primary`}
                                type="reset" > Limpiar datos </button>
                        </div>
                    </form>
                </div>
                <div className={estiloContacto.contenedorDer}>
                    <h3 className={estiloContacto.titulos}>Dejanos tu opinión</h3>
                    <Opiniones />
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}