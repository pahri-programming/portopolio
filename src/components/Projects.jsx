const proyek = [
    {
        judul: "kasKita",
        jenis: "Aplikasi web",
        isi: "Aplikasi web pencatatan kas kelas yang saya buat pada PKL internal di SMK Assalaam Bandung, dibangun dengan Laravel dan MySQL.",        stack: ["Laravel", "MySQL"],
        demo: "",
        kode: "",
    },
    {
        judul: "Portofolio ini",
        jenis: "Website",
        isi: "Portofolio pribadi yang dibangun bertahap selama pelatihan di BBPVP Bandung, dengan React untuk tampilan dan Node.js untuk sisi server.",
        stack: ["React", "Node.js"],
        demo: "",
        kode: "",
    },
    {
        judul: "Fundwise",
        jenis: "Aplikasi web",
        isi: "Aplikasi pengelolaan keuangan pribadi dengan anggaran harian otomatis dan target tabungan. Dibuat sebagai proyek pelatihan di BBPVP Bandung.",
        gambar: "/dist/img/fundwise.png",
        stack: ["JavaScript","React","Node.js"],
        demo: "https://fundwise.tech",
        kode: "https://github.com/pahri-programming/fundwise_PBL",
    },
]

export default function Projects() {
    return (
        <section id="karya" className="section">
            <p className="about-label">Karya</p>
            <h2 className="exp-title">Proyek</h2>
            <p className="projects-note">
                Sebagian proyek belum dipublikasikan online. Tangkapan layar dan kodenya tersedia di GitHub.
            </p>
            <div className="project-grid">
                {proyek.map((p) => (
                    <article key={p.judul} className="card">
                        {p.gambar && (
                            <img className="card-img" src={p.gambar} alt={`Tampilan ${p.judul}`} loading="lazy" />
                        )}
                        <span className="card-kind">{p.jenis}</span>
                        <h3>{p.judul}</h3>
                        <p>{p.isi}</p>
                        <ul className="chips">
                            {p.stack.map((s) => <li key={s}>{s}</li>)}
                        </ul>
                        {(p.demo || p.kode) && (
                            <div className="card-links">
                                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Lihat demo</a>}
                                {p.kode && <a href={p.kode} target="_blank" rel="noreferrer">Lihat kode</a>}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    )
}