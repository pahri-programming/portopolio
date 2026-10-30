const pengalaman = [
    {
        judul: "Peserta Pelatihan Pengembangan Web",
        tempat: "BBPVP Bandung",
        waktu: "September sampai November 2026",
        isi: "Belajar membangun aplikasi web dengan React untuk tampilan dan Node.js untuk sisi server.",
    },
    {
        judul: "Magang",
        tempat: "Universitas Bhakti Kencana",
        waktu: "September sampai November 2025",
        isi: "Melakukan instalasi dan perapihan kabel jaringan secara rapi dan terstruktur, membuat Website inventaris Booking Ruangan dan Peminjaman Barang",
    },
    {
        judul: "Siswa Rekayasa Perangkat Lunak",
        tempat: "SMK Assalaam Bandung",
        waktu: "2023 sampai 2026",
        isi: "Dalam PKL internal, merancang dan mengembangkan aplikasi web kas kelas bernama kasKita menggunakan Laravel.",
    },
]

const keahlian = [
    { grup: "Frontend", daftar: ["React", "JavaScript", "HTML", "CSS"] },
    { grup: "Backend", daftar: ["Node.js", "Express", "PHP", "Laravel","Mysql"] },
    { grup: "Tools", daftar: ["Git", "GitHub", "MySQL Workbench"] },
]

export default function Experience() {
    return (
        <section id="pengalaman" className="section">
            <p className="about-label">Pengalaman dan keahlian</p>
            <div className="exp">
                <div>
                    <h2 className="exp-title">Pengalaman</h2>
                    <ol className="timeline">
                        {pengalaman.map((p) => (
                            <li key={p.judul}>
                                <h3>{p.judul}</h3>
                                <span>{p.tempat}, {p.waktu}</span>
                                <p>{p.isi}</p>
                            </li>
                        ))}
                    </ol>
                </div>
                <div>
                    <h2 className="exp-title">Keahlian</h2>
                    {keahlian.map((k) => (
                        <div key={k.grup} className="skill-group">
                            <h3>{k.grup}</h3>
                            <ul className="chips">
                                {k.daftar.map((s) => <li key={s}>{s}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}