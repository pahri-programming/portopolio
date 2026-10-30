export default function About() {
    return (
        <section id="tentang" className="section">
            <p className="about-label">Tentang saya</p>
            <div className="about">
                <figure className="about-photo">
                    <img
                        src="/dist/img/profil.jpeg"
                        alt="Foto Pahri Abdurrohim"
                        width="480"
                        height="600"
                    />
                </figure>
                <div className="about-text">
                    <h2 className="about-lead">
                        Merancang, membangun, dan mewujudkan ide digital menjadi aplikasi web yang fungsional.
                    </h2>
                    <p>
                        Portofolio ini adalah ruang saya untuk belajar, bereksperimen, dan mendokumentasikan setiap
                        karya. Saya ingin setiap proyek yang saya buat memiliki tujuan yang jelas dan dapat digunakan
                        secara nyata, bukan sekadar latihan.
                    </p>
                    <p>
                        Sebagai lulusan baru SMK, saat ini saya tengah mengikuti pelatihan pengembangan web di BBPVP
                        Bandung, mendalami React untuk antarmuka serta Node.js untuk sisi server. Saya menikmati setiap
                        proses dari awal hingga akhir: mulai dari merancang tata letak di Figma, menyiapkan strukturnya,
                        hingga memastikan aplikasi berjalan mulus di browser.
                    </p>
                    <p>
                        Perjalanan saya berlanjut dalam mengeksplorasi pembuatan aplikasi fullstack menggunakan Laravel,
                        React, dan Flutter. Saya berfokus pada logika, alur, dan detail, serta adaptif dengan workflow
                        modern seperti prompt engineering untuk mempercepat proses pengembangan.
                    </p>
                </div>
            </div>
        </section>
    )
}