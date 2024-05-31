import estiloStaff from "@/estilos/staff.module.css";
import { kurale } from "@/estilos/fuentes";

export default function Staff(props) {
    return (
        <div className={estiloStaff.contenedor1}>
            <img
                className={estiloStaff.imagen}
                src={`/nosotros/staff-${props.imagen}.jpg`}
                alt={`Foto de ${props.nombre}`} />
            <div>
                <p className={`${estiloStaff.nombre} ${kurale.className}`}><strong>{props.nombre}</strong></p>
                <p className={estiloStaff.cargo}>{props.cargo}</p>
                <p className={estiloStaff.comentario}>{props.comentario}</p>
            </div>
        </div>
    )
}