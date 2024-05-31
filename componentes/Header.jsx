import Nav from "./Nav";
import estiloHeader from "@/estilos/header.module.css";

export default function Header() {
    return (
        <div className={estiloHeader.contenedor}>
            <img
                src="/logo.jpg"
                alt="Logo Purity Spa"
                className={estiloHeader.logo}
            />
            <Nav />
        </div>
    )
}