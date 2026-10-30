import { useState } from "react"

const EMAIL = "pahriabdurrohim03@gmail.com"
const GITHUB = "https://github.com/pahri-programming"

export default function Contact() {
    const [form, setForm] = useState({ nama: "", email: "", pesan: "" })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState({ type: "idle", text: "" })

    const ubah = (kolom) => (e) => setForm({ ...form, [kolom]: e.target.value })

    function validasi() {
        const hasil = {}
        if (!form.nama.trim()) hasil.nama = "Nama wajib diisi."
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) hasil.email = "Masukkan alamat email yang valid."
        if (form.pesan.trim().length < 10) hasil.pesan = "Pesan minimal 10 karakter."
        return hasil
    }

    async function kirim(e) {
        e.preventDefault()
        const hasil = validasi()
        setErrors(hasil)
        if (Object.keys(hasil).length > 0) return

        setStatus({ type: "loading", text: "Mengirim pesan..." })
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            if (!res.ok) throw new Error("gagal")
            await res.json()
            setForm({ nama: "", email: "", pesan: "" })
            setStatus({ type: "ok", text: "Pesan terkirim. Saya akan membalas lewat email." })
        } catch {
            setStatus({ type: "error", text: `Pesan belum terkirim. Silakan kirim langsung ke ${EMAIL}.` })
        }
    }

    return (
        <section id="kontak" className="section">
            <p className="about-label">Kontak</p>
            <div className="contact">
                <div>
                    <h2 className="exp-title">Hubungi saya</h2>
                    <p className="contact-intro">
                        Punya pertanyaan, tawaran kerja sama, atau lowongan magang? Kirim pesan lewat form,
                        atau hubungi saya langsung.
                    </p>
                    <ul className="contact-links">
                        <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                        <li><a href={GITHUB} target="_blank" rel="noreferrer">github.com/pahri-programming</a></li>
                    </ul>
                </div>

                <form className="form" onSubmit={kirim} noValidate>
                    <label>
                        Nama
                        <input value={form.nama} onChange={ubah("nama")} autoComplete="name"
                               aria-invalid={!!errors.nama} />
                        {errors.nama && <span className="field-error">{errors.nama}</span>}
                    </label>
                    <label>
                        Email
                        <input type="email" value={form.email} onChange={ubah("email")} autoComplete="email"
                               aria-invalid={!!errors.email} />
                        {errors.email && <span className="field-error">{errors.email}</span>}
                    </label>
                    <label>
                        Pesan
                        <textarea rows="5" value={form.pesan} onChange={ubah("pesan")}
                                  aria-invalid={!!errors.pesan} />
                        {errors.pesan && <span className="field-error">{errors.pesan}</span>}
                    </label>
                    <button className="btn" disabled={status.type === "loading"}>Kirim pesan</button>
                    <p className={`status ${status.type}`} role="status">{status.text}</p>
                </form>
            </div>
        </section>
    )
}