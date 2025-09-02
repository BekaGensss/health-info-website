// src/data/articlesData.js

export const articles = [
  // 12 ARTIKEL YANG SUDAH ADA
  {
    id: '1',
    title: 'Memahami HIV/AIDS',
    description: 'Pahami perbedaan HIV dan AIDS, cara penularan, serta pentingnya melawan stigma.',
    imageUrl: 'images/hiv-aids-awareness.png', 
    category: 'Kesehatan Umum',
    author: 'Farah Qulbi Amelia',
    date: '02 September 2025',
    tags: ['hiv', 'aids', 'kesehatan', 'edukasi'],
    pdfUrl: 'documents/p407.pdf', 
    content: `
      <p>HIV/AIDS sering kali diselimuti oleh kesalahpahaman dan stigma. Padahal, pemahaman yang benar adalah kunci untuk melawan penyebarannya dan memberikan dukungan bagi para pengidap. Mari kita luruskan fakta dan pahami isu ini secara lebih mendalam.</p>
      <h3>Mengenal HIV dan AIDS: Apa Perbedaannya?</h3>
      <p>HIV (Human Immunodeficiency Virus) adalah virus yang menyerang sistem kekebalan tubuh. Jika tidak diobati, virus ini dapat berkembang menjadi AIDS (Acquired Immune Deficiency Syndrome), di mana tubuh kehilangan kemampuannya untuk melawan infeksi. Penting untuk diingat, tidak semua orang dengan HIV akan mengalami AIDS, terutama jika mereka menjalani pengobatan yang tepat.</p>
      <p>Virus ini umumnya menular melalui:</p>
      <ul>
        <li>Kontak seksual tanpa pelindung.</li>
        <li>Penggunaan jarum suntik secara bergantian.</li>
        <li>Transfusi darah yang terkontaminasi.</li>
        <li>Dari ibu ke anak selama kehamilan, persalinan, atau menyusui.</li>
      </ul>
      <h3>Mengapa HIV/AIDS Sulit Disembuhkan?</h3>
      <p>Virus HIV disebut "virus yang super cerdik" karena bisa bersembunyi di dalam sel-sel tubuh dan "tidur" selama bertahun-tahun. Ini membuat obat yang ada saat ini tidak bisa memusnahkannya sepenuhnya, melainkan hanya bisa menekan perkembangbiakannya.</p>
      <p>Namun, kabar baiknya adalah ada obat ARV (Antiretroviral) yang sangat efektif. Dengan mengonsumsi ARV secara rutin, jumlah virus di dalam tubuh bisa ditekan hingga tidak terdeteksi. Hal ini tidak hanya membuat pengidap HIV bisa hidup sehat dan normal, tetapi juga menghilangkan risiko penularan ke orang lain.</p>
      <h3>Melawan Stigma dan Mitos</h3>
      <p>Salah satu pesan terkuat dari konten ini adalah ajakan untuk melawan stigma. HIV/AIDS bukanlah lagi isu yang tabu atau hanya terkait dengan kelompok minoritas tertentu. Banyak orang terinfeksi karena berbagai alasan. Alih-alih menghakimi, kita harus belajar untuk berempati dan memberikan dukungan.</p>
      <p>Mencegah stigma dimulai dengan edukasi. Jika kita memahami fakta-faktanya, kita tidak akan mudah percaya pada mitos yang tidak benar. Berhentilah menganggap HIV sebagai hukuman dan mulailah melihatnya sebagai kondisi kesehatan yang bisa dikelola.</p>
      <h3>Pentingnya Perlindungan Diri dan Tes HIV</h3>
      <p>Sebagai kesimpulan, HIV/AIDS bisa dicegah dan dikendalikan. Melindungi diri adalah langkah awal yang paling penting. Selain itu, tes HIV sangatlah mudah dan tersedia. Melalui tes, kita bisa mengetahui status kesehatan kita dan, jika hasilnya positif, bisa segera memulai pengobatan untuk hidup lebih baik.</p>
      <p>Mari kita sebarkan kesadaran dan hapus stigma, karena pemahaman dan empati adalah kunci untuk masa depan yang lebih sehat.</p>
    `,
  },
  // ... pastikan Anda melakukan hal yang sama pada artikel lain
  {
    id: '2',
    title: 'Manfaat Tidur Cukup untuk Otak dan Tubuh',
    description: 'Pelajari mengapa istirahat yang berkualitas sangat penting.',
    imageUrl: 'images/sleep-benefits.jpg',
    category: 'Kesehatan Mental',
    author: 'Siti Nur Aini',
    date: '5 Agustus 2025',
    tags: ['tidur', 'otak', 'kesehatan-mental'],
    pdfUrl: 'documents/manfaat-tidur-cukup.pdf',
    content: `...`,
  },
  {
    id: '3',
    title: 'Resep Smoothie Hijau Penambah Energi',
    description: 'Mulai hari Anda dengan minuman yang penuh nutrisi.',
    imageUrl: 'images/green-smoothie.jpg',
    category: 'Nutrisi',
    author: 'Budi Santoso',
    date: '10 Agustus 2025',
    tags: ['resep', 'nutrisi', 'smoothie'],
    pdfUrl: 'documents/resep-smoothie-hijau.pdf',
    content: `...`,
  },
  {
    id: '4',
    title: 'Panduan Sederhana Meditasi untuk Pemula',
    description: 'Tenangkan pikiran Anda dalam 10 menit setiap hari.',
    imageUrl: 'images/meditation-guide.jpg',
    category: 'Kesehatan Mental',
    author: 'Ahmad Subardjo',
    date: '15 Agustus 2025',
    tags: ['meditasi', 'stres', 'pemula'],
    pdfUrl: 'documents/panduan-meditasi-pemula.pdf',
    content: `...`,
  },
  {
    id: '5',
    title: 'Pentingnya Peregangan Sebelum Olahraga',
    description: 'Cegah cedera dan tingkatkan performa olahraga Anda.',
    imageUrl: 'images/stretching.jpg',
    category: 'Olahraga',
    author: 'Dewi Rahmawati',
    date: '20 Agustus 2025',
    tags: ['olahraga', 'peregangan', 'cedera'],
    pdfUrl: 'documents/peregangan-sebelum-olahraga.pdf',
    content: `...`,
  },
  {
    id: '6',
    title: 'Kenali Tanda-tanda Dehidrasi dan Cara Mengatasinya',
    description: 'Memahami pentingnya hidrasi untuk tubuh.',
    imageUrl: 'images/dehydration.jpg',
    category: 'Kesehatan Umum',
    author: 'Ahmad Subardjo',
    date: '25 Agustus 2025',
    tags: ['dehidrasi', 'hidrasi', 'kesehatan'],
    pdfUrl: 'documents/tanda-tanda-dehidrasi.pdf',
    content: `...`,
  },
  {
    id: '7',
    title: 'Manfaat Yoga untuk Kesehatan Fisik dan Mental',
    description: 'Pelajari bagaimana yoga dapat meningkatkan kelenturan, kekuatan, dan ketenangan batin Anda.',
    imageUrl: 'images/yoga-benefits.jpg',
    category: 'Olahraga',
    author: 'Siti Nur Aini',
    date: '30 Agustus 2025',
    tags: ['yoga', 'kebugaran', 'kesehatan-mental'],
    pdfUrl: 'documents/manfaat-yoga.pdf',
    content: `...`,
  },
  {
    id: '8',
    title: 'Tips Membangun Imunitas Tubuh yang Kuat',
    description: 'Tingkatkan sistem pertahanan alami tubuh Anda dengan kebiasaan sehat.',
    imageUrl: 'images/immunity.jpg',
    category: 'Kesehatan Umum',
    author: 'Ahmad Subardjo',
    date: '5 September 2025',
    tags: ['imunitas', 'kesehatan', 'gaya-hidup'],
    pdfUrl: 'documents/membangun-imunitas-tubuh.pdf',
    content: `...`,
  },
  {
    id: '9',
    title: 'Manfaat Lari Pagi untuk Kesehatan Jantung',
    description: 'Mulai kebiasaan lari pagi untuk jantung yang lebih sehat dan kuat.',
    imageUrl: 'images/running.jpg',
    category: 'Olahraga',
    author: 'Budi Santoso',
    date: '10 September 2025',
    tags: ['lari', 'jantung', 'olahraga'],
    pdfUrl: 'documents/lari-pagi-untuk-jantung.pdf',
    content: `...`,
  },
  {
    id: '10',
    title: 'Mengenal Makanan Probiotik untuk Kesehatan Pencernaan',
    description: 'Pahami mengapa bakteri baik penting untuk usus Anda.',
    imageUrl: 'images/probiotics.jpg',
    category: 'Nutrisi',
    author: 'Dewi Rahmawati',
    date: '15 September 2025',
    tags: ['probiotik', 'pencernaan', 'nutrisi'],
    pdfUrl: 'documents/makanan-probiotik.pdf',
    content: `...`,
  },
  {
    id: '11',
    title: 'Cara Mengatasi Insomnia Secara Alami',
    description: 'Temukan cara-cara alami untuk mendapatkan tidur malam yang nyenyak.',
    imageUrl: 'images/insomnia.jpg',
    category: 'Kesehatan Mental',
    author: 'Siti Nur Aini',
    date: '20 September 2025',
    tags: ['insomnia', 'tidur', 'relaksasi'],
    pdfUrl: 'documents/mengatasi-insomnia.pdf',
    content: `...`,
  },
  {
    id: '12',
    title: 'Mengenal Manfaat Latihan Kekuatan untuk Usia Lanjut',
    description: 'Latihan kekuatan dapat menjaga massa otot dan kepadatan tulang seiring bertambahnya usia.',
    imageUrl: 'images/aging-exercise.jpg',
    category: 'Gaya Hidup',
    author: 'Ahmad Subardjo',
    date: '25 September 2025',
    tags: ['usia-lanjut', 'kekuatan', 'latihan'],
    pdfUrl: 'documents/latihan-kekuatan-usia-lanjut.pdf',
    content: `...`,
  },
];