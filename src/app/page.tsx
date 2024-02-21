import Button from "@/components/atoms/button/button";
import Pricing from "@/components/atoms/card/pricing";
import Template from "@/components/atoms/card/template";
import Tagline from "@/components/atoms/tag-line";
import Title from "@/components/atoms/title";
import HeaderHome from "@/components/organisms/home/header";
import { fakerID_ID as faker } from "@faker-js/faker";
import Image from "next/image";
import { BiSolidParty } from "react-icons/bi";

export default function Page() {
  return (
    <main className="space-y-20 md:space-y-28 lg:space-y-36">
      {/* header */}
      <HeaderHome />

      {/* keunggulan cerita cetak */}
      {/* 
      section ini berisikan informasi keunggulan apa saja yang dimiliki.
      1. kehadiran menggunakan barcode
      2. RSVP
      3. cetak undagan dalam berbagai format document. [gambar,pdf,gif]
      4. mudah mengelola tamu
      5. responsive for all device
      6. one click all done, sekali klik semua undangan terkirim ke whatsapp
       */}

      {/* Event list */}
      <section className="container space-y-8">
        <div>
          <Title title="Events" />
          <Tagline tagline="Rayakan acara yang seru bersama teman dan keluarga anda" />
        </div>
        <div className="flex justify-between">
          <ul className="w-3/12 shrink-0">
            <li>Pernikahan</li>
            <li>Ulang tahun</li>
            <li>Acara sukuran</li>
            <li>Kelulusan</li>
            <li>Reoni</li>
          </ul>

          <div className="flex-1">
            <div>
              <p>ilustrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* product list */}
      <section className="container space-y-10" id="templates">
        <div className="flex flex-col items-center gap-4 text-center">
          <Title title="Favorit templates" />
          <Tagline tagline="Undang teman sebanyak mungkin" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Template
            event="wedding"
            id=""
            image="https://picsum.photos/200"
            name="name of template"
          />
          <Template
            event="wedding"
            id=""
            image="https://picsum.photos/200"
            name="name of template"
          />
          <Template
            event="wedding"
            id=""
            image="https://picsum.photos/200"
            name="name of template"
          />
          <Template
            event="wedding"
            id=""
            image="https://picsum.photos/200"
            name="name of template"
          />
          <Template
            event="wedding"
            id=""
            image="https://picsum.photos/200"
            name="name of template"
          />
          <Template
            event="wedding"
            id=""
            image="https://picsum.photos/200"
            name="name of template"
          />
        </div>
        <div className="flex justify-center">
          <Button>View all</Button>
        </div>
      </section>

      {/* pricing */}
      <section className="container space-y-10" id="pricing">
        <div className="flex flex-col items-center gap-4">
          <Title title="Pricing package" />
          <Tagline tagline="Choose the plan that suits your needs" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Pricing
            label="Basic"
            slogan="Perfect for small events and gatherings"
            features={[
              { feature: "RSVP Online" },
              { feature: "Desain Custom" },
              { feature: "Kirim undangan via whatsapp" },
              { feature: "pengingat otomatis" },
              { feature: "detail acara" },
              { feature: "Daftar tamu" },
              { feature: "kartu ucapan online" },
              { feature: "tampilan responsive" },
              { feature: "integrasi dengan kalender" },
              { feature: "perhitungan balasan" },
              { feature: "galeri foto" },
              { feature: "statistik dan analisa" },
              { feature: "keamanan dan privasi" },
              { feature: "integrasi media sosial" },
              { feature: "live streaming acara" },
              { feature: "peta lokasi interaktif" },
              { feature: "pertanyaan atau survei" },
              { feature: "fitur berbagi" },
              { feature: "video dan musik background" },
              { feature: "QR code" },
              { feature: "hadiah atau kupon" },
              { feature: "pengingat ulang tahun" },
              { feature: "pilihan bahasa" },
              { feature: "papan pesan public" },
            ]}
            id=""
            price={123}
          />
          <Pricing
            label="Normal"
            slogan="Perfect for small events and gatherings"
            features={[
              { feature: "RSVP Online" },
              { feature: "Desain Custom" },
              { feature: "Kirim undangan via whatsapp" },
              { feature: "pengingat otomatis" },
              { feature: "detail acara" },
              { feature: "Daftar tamu" },
              { feature: "kartu ucapan online" },
              { feature: "tampilan responsive" },
              { feature: "integrasi dengan kalender" },
              { feature: "perhitungan balasan" },
              { feature: "galeri foto" },
              { feature: "statistik dan analisa" },
              { feature: "keamanan dan privasi" },
              { feature: "integrasi media sosial" },
              { feature: "live streaming acara" },
              { feature: "peta lokasi interaktif" },
              { feature: "pertanyaan atau survei" },
              { feature: "fitur berbagi" },
              { feature: "video dan musik background" },
              { feature: "QR code" },
              { feature: "hadiah atau kupon" },
              { feature: "pengingat ulang tahun" },
              { feature: "pilihan bahasa" },
              { feature: "papan pesan public" },
            ]}
            id=""
            price={123}
          />
          <Pricing
            label="Premium"
            slogan="Perfect for small events and gatherings"
            features={[
              { feature: "RSVP Online" },
              { feature: "Desain Custom" },
              { feature: "Kirim undangan via whatsapp" },
              { feature: "pengingat otomatis" },
              { feature: "detail acara" },
              { feature: "Daftar tamu" },
              { feature: "kartu ucapan online" },
              { feature: "tampilan responsive" },
              { feature: "integrasi dengan kalender" },
              { feature: "perhitungan balasan" },
              { feature: "galeri foto" },
              { feature: "statistik dan analisa" },
              { feature: "keamanan dan privasi" },
              { feature: "integrasi media sosial" },
              { feature: "live streaming acara" },
              { feature: "peta lokasi interaktif" },
              { feature: "pertanyaan atau survei" },
              { feature: "fitur berbagi" },
              { feature: "video dan musik background" },
              { feature: "QR code" },
              { feature: "hadiah atau kupon" },
              { feature: "pengingat ulang tahun" },
              { feature: "pilihan bahasa" },
              { feature: "papan pesan public" },
            ]}
            id=""
            price={123}
          />
        </div>
      </section>

      <section className="container">
        <Title title="Happy customers" className="mb-3 text-end" />
        <Tagline
          tagline="Choose the plan that suits your needs"
          className="mb-8 text-end"
        />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quia
        quas perferendis. Esse eum deserunt assumenda distinctio! Deserunt
        deleniti perspiciatis incidunt magni, animi officiis libero repudiandae
        cupiditate culpa numquam nihil!
      </section>

      <section className="container">
        <Title title="Blog" className="text-center" />
        <Tagline
          tagline="Choose the plan that suits your needs"
          className="text-center"
        />
      </section>
    </main>
  );
}
