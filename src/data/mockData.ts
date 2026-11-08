export interface ServiceItem {
  id: string;
  title: string;
  category: 'administrasi' | 'pengaduan' | 'informasi' | 'data' | 'monitoring' | 'analitik';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  sla: string;
  cost: string;
  requirements: string[];
  features: string[];
}

export interface TrackingTicket {
  ticketNumber: string;
  applicantName: string;
  nikMasked: string;
  serviceType: string;
  submissionDate: string;
  estimatedCompletion: string;
  status: 'Menunggu Verifikasi' | 'Diproses' | 'Siap Diambil / Terbit' | 'Selesai';
  currentStep: number;
  officerName: string;
  department: string;
  timeline: {
    title: string;
    description: string;
    timestamp: string;
    completed: boolean;
    active: boolean;
  }[];
  documentPreview?: {
    documentName: string;
    documentId: string;
    qrValid: boolean;
  };
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'layanan-administrasi',
    title: 'Layanan Administrasi',
    category: 'administrasi',
    shortDesc: 'Mempermudah proses pengajuan, pengelolaan, dan verifikasi dokumen administrasi kependudukan secara digital.',
    fullDesc: 'Layanan terpadu penerbitan surat pengantar (SKCK, Nikah), surat keterangan domisili, permohonan Kartu Keluarga, hingga legalisir dokumen resmi dengan tanda tangan elektronik (TTE) tersertifikasi.',
    iconName: 'FileText',
    sla: '15 - 30 Menit',
    cost: 'Gratis (Rp 0)',
    requirements: [
      'Foto KTP-el / Kartu Identitas Anak',
      'Nomor Kartu Keluarga (KK)',
      'Dokumen pendukung terkait jenis surat',
      'Nomor WhatsApp aktif untuk notifikasi status',
    ],
    features: [
      'Formulir formulasi cerdas bebas duplikasi data',
      'Tanda Tangan Elektronik (TTE) standar BSrE',
      'QR Code verifikasi keaslian dokumen 24/7',
      'Download format PDF siap cetak berstandar nasional',
    ],
  },
  {
    id: 'pengaduan-masyarakat',
    title: 'Pengaduan Masyarakat',
    category: 'pengaduan',
    shortDesc: 'Menyediakan fasilitas penyampaian aspirasi, kritik, saran, dan aduan infrastruktur secara digital dan transparan.',
    fullDesc: 'Kanal partisipasi publik terintegrasi untuk melaporkan kerusakan jalan, lampu penerangan jalan umum, sampah, ketertiban umum, dengan sistem penugasan dinas otomatis dan pelacakan SLA.',
    iconName: 'Megaphone',
    sla: 'Respon awal < 2 Jam',
    cost: 'Gratis',
    requirements: [
      'Foto / Bukti video lokasi kejadian',
      'Koordinat lokasi (GPS otomatis diaktifkan)',
      'Uraian singkat permasalahan',
    ],
    features: [
      'Geotagging lokasi aduan presisi tinggi',
      'Pemberian nomor tiket pelacakan instan',
      'Kamera langsung dari browser tanpa aplikasi rumit',
      'Pemberitahuan progres langsung ke WhatsApp pelapor',
    ],
  },
  {
    id: 'informasi-publik',
    title: 'Informasi Publik',
    category: 'informasi',
    shortDesc: 'Menyediakan akses informasi, transparansi anggaran, agenda komunitas, dan pengumuman resmi secara real-time.',
    fullDesc: 'Pusat publikasi dokumen APBDes/Kelurahan, info beasiswa, bantuan sosial (PKH, BPNT), jadwal posyandu, dan regulasi daerah dengan format terbuka yang mudah diunduh masyarakat.',
    iconName: 'Globe',
    sla: 'Real-time 24/7',
    cost: 'Terbuka untuk Umum',
    requirements: [
      'Dapat diakses langsung tanpa registrasi login wajib',
    ],
    features: [
      'Infografis transparansi anggaran dinamis',
      'Pengumuman darurat push alert',
      'Katalog peraturan & surat edaran resmi',
      'Pencarian cerdas arsip pengumuman',
    ],
  },
  {
    id: 'manajemen-data',
    title: 'Manajemen Data Masyarakat',
    category: 'data',
    shortDesc: 'Membantu pengelolaan data masyarakat secara terstruktur, aman, dan terintegrasi antar RT/RW hingga dinas.',
    fullDesc: 'Sistem basis data terpusat mencakup demografi penduduk, pemetaan kelompok rentan/lansia, data penerima bansos, serta integrasi satu data kependudukan dengan perlindungan privasi ketat.',
    iconName: 'Users',
    sla: 'Sistem Terintegrasi',
    cost: 'Khusus Pengelola',
    requirements: [
      'Hak akses operator / verifikator bertingkat',
      'Autentikasi dua faktor (2FA) petugas',
    ],
    features: [
      'Penyaringan demografi berdasarkan usia, pekerjaan, wilayah',
      'Audit log aktivitas akses data untuk keamanan',
      'Sinkronisasi berkala data kependudukan',
      'Ekspor format CSV/Excel terenkripsi untuk laporan dinas',
    ],
  },
  {
    id: 'monitoring-pelayanan',
    title: 'Monitoring Pelayanan',
    category: 'monitoring',
    shortDesc: 'Memungkinkan pemantauan status dan perkembangan proses pelayanan secara real-time dengan audit trail lengkap.',
    fullDesc: 'Dashboard pemantauan terpusat untuk pimpinan dan pengawas agar mengetahui beban kerja petugas, tingkat kepatuhan durasi penyelesaian (SLA), dan mendeteksi hambatan proses secara dini.',
    iconName: 'Activity',
    sla: 'Pelacakan Langsung',
    cost: 'Fitur Bawaan CMS',
    requirements: [
      'Nomor Tiket Permohonan atau NIK untuk warga',
      'Kredensial dinas untuk panel supervisor',
    ],
    features: [
      'Live ticker proses berkas masuk per menit',
      'Peringatan otomatis berkas mendekati batas waktu SLA',
      'Indeks kepuasan warga per loket & per jenis layanan',
      'Riwayat perbaikan dan catatan petugas transparan',
    ],
  },
  {
    id: 'laporan-statistik',
    title: 'Laporan dan Statistik',
    category: 'analitik',
    shortDesc: 'Menampilkan informasi analitik dan laporan pelayanan berkala untuk mendukung pengambilan kebijakan berbasis data.',
    fullDesc: 'Perangkat visualisasi analitik komprehensif yang menyajikan tren lonjakan permohonan, rasio penyelesaian aduan, peta sebaran kebutuhan warga, serta format laporan siap cetak untuk pimpinan instansi.',
    iconName: 'BarChart3',
    sla: 'Otomatis Mingguan / Bulanan',
    cost: 'Lengkap',
    requirements: [
      'Akses administrator dan eksekutif instansi',
    ],
    features: [
      'Grafik interaktif kinerja bulanan dan tahunan',
      'Analisis sentimen dan kepuasan masyarakat',
      'Generate laporan pertanggungjawaban dalam 1 klik',
      'Data open API untuk integrasi sistem Satu Data',
    ],
  },
];

export const ADVANTAGES_LIST = [
  {
    title: 'Pelayanan Lebih Cepat',
    desc: 'Pemangkasan birokrasi manual. Dari rata-rata 2-3 hari kerja menjadi hanya 15 menit selesai secara digital.',
    icon: 'Zap',
    metric: '15 Menit',
    metricLabel: 'Rata-rata Waktu Proses',
  },
  {
    title: 'Akses Informasi 24/7',
    desc: 'Warga dapat mengajukan permohonan kapan saja dan di mana saja tanpa perlu mengantre fisik di kantor.',
    icon: 'Clock',
    metric: '24/7',
    metricLabel: 'Ketersediaan Sistem',
  },
  {
    title: 'Sistem Terintegrasi',
    desc: 'Menghubungkan data warga, RT/RW, kelurahan, kecamatan, hingga dinas teknis dalam satu ekosistem tunggal.',
    icon: 'Cpu',
    metric: '1 Ekosistem',
    metricLabel: 'Tanpa Silo Data',
  },
  {
    title: 'Data Terkelola dengan Baik',
    desc: 'Penyimpanan terpusat dengan enkripsi tingkat tinggi dan backup otomatis, mencegah kehilangan berkas fisik.',
    icon: 'Database',
    metric: '99.9%',
    metricLabel: 'Keamanan & Integritas',
  },
  {
    title: 'Transparansi Pelayanan',
    desc: 'Warga dapat memantau setiap tahapan verifikasi, nama petugas pemroses, dan estimasi waktu penyelesaian.',
    icon: 'Eye',
    metric: '100%',
    metricLabel: 'Jejak Audit Terbuka',
  },
  {
    title: 'Tampilan Mudah Digunakan',
    desc: 'Antarmuka intuitif berbahasa Indonesia dengan tipografi jelas, ramah untuk semua kalangan usia.',
    icon: 'Smile',
    metric: '4.9 / 5',
    metricLabel: 'Skor Kemudahan (SUS)',
  },
  {
    title: 'Responsive di Semua Perangkat',
    desc: 'Dapat diakses sempurna melalui smartphone, tablet, laptop, maupun anjungan komputer pelayanan mandiri.',
    icon: 'Smartphone',
    metric: '100%',
    metricLabel: 'Responsif & Ringan',
  },
  {
    title: 'Mendukung Efisiensi Operasional',
    desc: 'Menghemat biaya kertas (paperless), tinta cetak, dan ruang penyimpanan arsip fisik hingga 80%.',
    icon: 'TrendingUp',
    metric: '-80%',
    metricLabel: 'Konsumsi Kertas Kantor',
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Akses Platform',
    desc: 'Pengguna membuka portal CMS dari smartphone atau komputer tanpa perlu instalasi aplikasi rumit.',
    detail: 'Cukup gunakan peramban (browser) web, login dengan NIK atau akun komunitas yang telah terdaftar.',
    badge: 'Langkah Pertama',
  },
  {
    step: '02',
    title: 'Pilih Layanan',
    desc: 'Pilih jenis administrasi, pengaduan, atau informasi publik yang dibutuhkan dari katalog layanan.',
    detail: 'Sistem menyajikan panduan syarat dan contoh dokumen agar pemohon tidak keliru mengisi.',
    badge: 'Katalog Cerdas',
  },
  {
    step: '03',
    title: 'Kirim Permohonan',
    desc: 'Isi formulir digital yang ringkas dan unggah foto dokumen persyaratan dari galeri ponsel.',
    detail: 'Validasi otomatis mendeteksi kelengkapan berkas sebelum dikirim ke meja verifikator.',
    badge: 'Unggah Mudah',
  },
  {
    step: '04',
    title: 'Pantau Status & Unduh',
    desc: 'Pantau posisi berkas secara real-time dengan nomor tiket unik dan unduh dokumen sah ber-TTE.',
    detail: 'Notifikasi otomatis terkirim saat berkas selesai dan dokumen digital resmi dapat dicetak mandiri.',
    badge: 'Selesai Seketika',
  },
];

export const SAMPLE_TICKETS: TrackingTicket[] = [
  {
    ticketNumber: 'CMS-2026-0812',
    applicantName: 'Rian Pratama',
    nikMasked: '3201************0004',
    serviceType: 'Surat Keterangan Domisili Usaha (SKDU)',
    submissionDate: '08 Nov 2026, 08:30 WIB',
    estimatedCompletion: '08 Nov 2026, 11:00 WIB',
    status: 'Siap Diambil / Terbit',
    currentStep: 4,
    officerName: 'Hendra Setiawan, S.AP',
    department: 'Seksi Pelayanan Umum & Kependudukan',
    timeline: [
      {
        title: 'Permohonan Diterima',
        description: 'Pemohon mengirim formulir online beserta lampiran KTP dan Surat Pengantar RT/RW.',
        timestamp: '08 Nov 2026, 08:30 WIB',
        completed: true,
        active: false,
      },
      {
        title: 'Verifikasi Berkas & Data',
        description: 'Petugas memeriksa keaslian data NIK dan kesesuaian alamat domisili usaha.',
        timestamp: '08 Nov 2026, 08:45 WIB',
        completed: true,
        active: false,
      },
      {
        title: 'Penerbitan Tanda Tangan Elektronik',
        description: 'Dokumen ditandatangani secara digital oleh Lurah / Kepala Layanan (Sertifikat BSrE).',
        timestamp: '08 Nov 2026, 09:10 WIB',
        completed: true,
        active: false,
      },
      {
        title: 'Dokumen Digital Terbit',
        description: 'Dokumen resmi ber-QR Code valid telah selesai dan siap diunduh oleh pemohon.',
        timestamp: '08 Nov 2026, 09:15 WIB',
        completed: true,
        active: true,
      },
    ],
    documentPreview: {
      documentName: 'Surat_Keterangan_Domisili_CMS-2026-0812.pdf',
      documentId: 'REG-DS-88492019-2026',
      qrValid: true,
    },
  },
  {
    ticketNumber: 'CMS-2026-0491',
    applicantName: 'Siti Nurhaliza',
    nikMasked: '3273************0012',
    serviceType: 'Pengaduan: Lampu Penerangan Jalan Rusak',
    submissionDate: '07 Nov 2026, 19:40 WIB',
    estimatedCompletion: '08 Nov 2026, 16:00 WIB',
    status: 'Diproses',
    currentStep: 2,
    officerName: 'Bambang Trianto (Teknisi PJU)',
    department: 'Dinas Perhubungan & Sarana Lingkungan',
    timeline: [
      {
        title: 'Laporan Masuk',
        description: 'Warga melaporkan 2 titik lampu mati di Jl. Melati RT 03/RW 05 disertai foto lokasi.',
        timestamp: '07 Nov 2026, 19:40 WIB',
        completed: true,
        active: false,
      },
      {
        title: 'Disposisi Petugas Lapangan',
        description: 'Koordinator lapangan telah menugaskan regu teknisi 02 untuk inspeksi tiang.',
        timestamp: '08 Nov 2026, 08:15 WIB',
        completed: true,
        active: true,
      },
      {
        title: 'Perbaikan Komponen Lampu',
        description: 'Penggantian modul LED dan ballast kabel oleh teknisi lapangan.',
        timestamp: 'Menunggu Eksekusi (Dijadwalkan 14:00 WIB)',
        completed: false,
        active: false,
      },
      {
        title: 'Penutupan Tiket & Verifikasi Warga',
        description: 'Pengambilan foto hasil perbaikan dan konfirmasi kepuasan pelapor.',
        timestamp: 'Estimasi: 08 Nov 2026, 16:00 WIB',
        completed: false,
        active: false,
      },
    ],
  },
  {
    ticketNumber: 'CMS-2026-0335',
    applicantName: 'Dedi Kurniawan',
    nikMasked: '3201************0089',
    serviceType: 'Surat Pengantar Pembuatan SKCK',
    submissionDate: '08 Nov 2026, 09:05 WIB',
    estimatedCompletion: '08 Nov 2026, 10:30 WIB',
    status: 'Menunggu Verifikasi',
    currentStep: 1,
    officerName: 'Maya Anggraini, S.Kom',
    department: 'Loket 01 Administrasi Kependudukan',
    timeline: [
      {
        title: 'Berkas Masuk ke Antrean Loket',
        description: 'Pemohon mengirim formulir permohonan pengantar SKCK.',
        timestamp: '08 Nov 2026, 09:05 WIB',
        completed: true,
        active: true,
      },
      {
        title: 'Pemeriksaan Dokumen',
        description: 'Menunggu pencocokan arsip kependudukan wilayah RT/RW.',
        timestamp: 'Dalam Antrean',
        completed: false,
        active: false,
      },
      {
        title: 'Penerbitan Surat Pengantar',
        description: 'Pembuatan surat ber-barcode dan pengesahan digital.',
        timestamp: 'Menunggu Antrean',
        completed: false,
        active: false,
      },
      {
        title: 'Dokumen Siap Diambil / Diunduh',
        description: 'Dokumen dikirim langsung ke dashboard dan email warga.',
        timestamp: 'Menunggu Selesai',
        completed: false,
        active: false,
      },
    ],
  },
];

export const FAQ_LIST = [
  {
    question: 'Apakah CMS aman dan sesuai dengan regulasi perlindungan data pribadi (UU PDP)?',
    answer: 'Ya, sistem CMS dibangun dengan standar enkripsi end-to-end AES-256 pada database kependudukan, audit trail menyeluruh, dan pembatasan hak akses berbasis peran (RBAC). Data warga dilindungi secara ketat sesuai amanat UU Perlindungan Data Pribadi No. 27 Tahun 2022.',
  },
  {
    question: 'Apakah CMS dapat diintegrasikan dengan sistem SIAK / Dukcapil atau aplikasi eksisting daerah?',
    answer: 'Sangat bisa. CMS dilengkapi dengan Open RESTful API dan webhook standar nasional yang memungkinkannya tersambung mulus dengan Sistem Informasi Administrasi Kependudukan (SIAK), sistem Satu Data Indonesia, maupun aplikasi Smart City daerah yang sudah berjalan.',
  },
  {
    question: 'Bagaimana cara warga yang kurang memahami teknologi (gagap teknologi) menggunakan CMS?',
    answer: 'CMS menyediakan mode "Pelayanan Berbantuan" di mana petugas loket atau ketua RT/RW dapat menginputkan berkas atas nama warga. Tersedia juga Anjungan Layanan Mandiri (KiosK) dengan layar sentuh besar dan panduan suara di kantor kelurahan/desa.',
  },
  {
    question: 'Berapa lama waktu implementasi dan pelatihan bagi aparatur instansi?',
    answer: 'Proses setup awal CMS hanya memakan waktu 3–7 hari kerja. Kami menyediakan modul pelatihan komprehensif, video panduan, serta pendampingan langsung selama 30 hari untuk memastikan seluruh staf siap mengoperasikan sistem dengan lancar.',
  },
  {
    question: 'Apakah dokumen yang dihasilkan sah secara hukum tanpa tanda tangan basah?',
    answer: 'Sepenuhnya sah. Dokumen yang diterbitkan oleh CMS dilengkapi Tanda Tangan Elektronik (TTE) tersertifikasi yang diakui oleh Balai Sertifikasi Elektronik (BSrE) BSSN sesuai UU ITE Pasal 11, dilengkapi QR Code validasi keaslian dokumen.',
  },
  {
    question: 'Bagaimana model pemeliharaan server dan keandalan sistem CMS?',
    answer: 'CMS dapat dipasang baik di Cloud Pemerintah (Pusat Data Nasional / PDN) maupun infrastruktur server on-premise daerah. Kami menjamin SLA uptime 99.9%, pencadangan data otomatis setiap hari, dan dukungan teknis 24/7.',
  },
];

export const STATS_SUMMARY = {
  totalUsers: 24850,
  totalRequests: 4920,
  inProgress: 48,
  completed: 4872,
  satisfactionRate: 98.6,
  avgResponseTime: '12 Menit',
  activeCommunities: 142,
  paperlessSavedKg: 1250,
};
