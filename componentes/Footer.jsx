import estiloFooter from "@/estilos/footer.module.css"
import Link from "next/link"


export default function Footer() {
    return (
        <div className={estiloFooter.contenedor}>
            <p className={estiloFooter.titulo}>Formas de pago</p>
            <img className={estiloFooter.imagenPagos} src="/footer/formasdePago.png" alt="Formas de pago" />
            <Link href="#Inicio"><img className={estiloFooter.imagenFlecha} src="/footer/flecha.png" alt="Volver arriba" /></Link>
            <p className={estiloFooter.texto}>© 2024 Purity. Spa & Estética. <br />Todos los Derechos Reservados. Desarrollado por Brenda
                Giambelluca</p>
        </div>
    )
}