import { useEffect, useState } from "react"

const menu = [
    { id: "tentang", label: "Tentang" },
    { id: "pengalaman", label: "Pengalaman" },
    { id: "karya", label: "Karya" },
    { id: "kontak", label: "Kontak" },
]

const warna = [
    { nama: "Teal", nilai: "#0a7f75" },
    { nama: "Biru", nilai: "#1d5fd1" },
    { nama: "Ungu", nilai: "#7a3fd1" },
    { nama: "Jingga", nilai: "#b84a00" },
    { nama: "Magenta", nilai: "#c2185b" },
]

export default function Navbar() {
    const [aktif, setAktif] = useState("")
    const [aksen, setAksen] = useState(() => {
        try {
            return localStorage.getItem("aksen") || warna[0].nilai
        } catch {
            return warna[0].nilai
        }
    })

    useEffect(() => {
        document.documentElement.style.setProperty("--accent", aksen)
        try {
            localStorage.setItem("aksen", aksen)
        } catch {
            /* abaikan kalau penyimpanan diblokir */
        }
    }, [aksen])

    useEffect(() => {
        const pengamat = new IntersectionObserver(
            (daftar) => {
                daftar.forEach((d) => {
                    if (d.isIntersecting) setAktif(d.target.id)
                })
            },
            { rootMargin: "-40% 0px -55% 0px" }
        )
        menu.forEach((m) => {
            const el = document.getElementById(m.id)
            if (el) pengamat.observe(el)
        })
        return () => pengamat.disconnect()
    }, [])
    useEffect(() => {
        const atas = () => { if (window.scrollY < 200) setAktif("") }
        window.addEventListener("scroll", atas, { passive: true })
        return () => window.removeEventListener("scroll", atas)
    }, [])

    return (
        <header className="navbar">
            <a href="#top" className="navbar-logo">Pahri Abdurrohim</a>
            <nav aria-label="Navigasi utama">
                {menu.map((m) => (
                    <a key={m.id} href={`#${m.id}`} className={aktif === m.id ? "on" : ""}>
                        {m.label}
                    </a>
                ))}
            </nav>
            <div className="swatches" role="group" aria-label="Pilih warna aksen">
                {warna.map((w) => (
                    <button
                        key={w.nilai}
                        type="button"
                        title={w.nama}
                        aria-label={`Warna ${w.nama}`}
                        aria-pressed={aksen === w.nilai}
                        style={{ background: w.nilai }}
                        onClick={() => setAksen(w.nilai)}
                    />
                ))}
            </div>
        </header>
    )
}