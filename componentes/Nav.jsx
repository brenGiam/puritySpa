'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import estiloNav from "@/estilos/nav.module.css";
import { kurale } from "@/estilos/fuentes";

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav>
            <ul className={estiloNav.nav}>
                <li className={`${estiloNav.li} ${kurale.className}`}>
                    <Link href="/" className={`${estiloNav.link} ${pathname === '/' && estiloNav.menuActivo}`}>Inicio</Link>
                </li>
                <li className={`${estiloNav.li} ${kurale.className}`}>
                    <Link href="/nosotros" className={`${estiloNav.link} ${pathname === '/nosotros' && estiloNav.menuActivo}`}>Nosotros</Link>
                </li>
                <li className={`${estiloNav.li} ${kurale.className}`}>
                    <Link href="/servicios" className={`${estiloNav.link} ${pathname === '/servicios' && estiloNav.menuActivo}`}>Servicios</Link>
                </li>
                <li className={`${estiloNav.li} ${kurale.className}`}>
                    <Link href="/contacto" className={`${estiloNav.link} ${pathname === '/contacto' && estiloNav.menuActivo}`}>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}