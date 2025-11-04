

import { Injectable, signal } from '@angular/core';
import { User, Project, MasterWorkItem, RABItem, DailyReport, MasterMaterial, Issue } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users = signal<User[]>([
    { id: 1, fullName: 'Super Administrator', username: 'superadmin', role: 'Superadmin', isActive: true },
    { id: 2, fullName: 'Budi Santoso', username: 'admin_kantor', role: 'Admin Kantor', isActive: true },
    { id: 3, fullName: 'Andi Wijaya', username: 'admin_lapangan', role: 'Admin Lapangan', isActive: true },
    { id: 4, fullName: 'Citra Kirana', username: 'client', role: 'User Biasa', isActive: true },
  ]);

  masterItems = signal<MasterWorkItem[]>([
    // U.1 PERSIAPAN
    { id: 1, code: 'U.1.1', division: 'Persiapan', name: 'Pembuatan 1 m\' pagar sementara dari kayu tinggi 2 meter', unit: 'm\'' },
    { id: 2, code: 'U.1.1', division: 'Persiapan', name: 'Pembuatan 1 m\' pagar sementara dari seng gelombang rangka kayu tinggi 2 meter', unit: 'm\'' },
    { id: 3, code: 'U.1.1', division: 'Persiapan', name: 'Pembuatan 1 m\' pagar sementara dari kawat duri tinggi 2 meter', unit: 'm\'' },
    { id: 4, code: 'U.1.1', division: 'Persiapan', name: 'Pembuatan 1 m\' pagar sementara seng gelombang Rangka baja L.40.40.4, Tinggi pagar 1,8 m\'', unit: 'm\'' },
    { id: 5, code: 'U.1.1', division: 'Persiapan', name: 'Pembuatan 1 m\' pagar sementara seng gelombang Rangka kayu, tinggi pagar 1,8 m\'', unit: 'm\'' },
    { id: 6, code: 'U.1.1', division: 'Persiapan', name: 'Pembuatan 1 m2 Pagar BRC Galvanis', unit: 'm2' },
    { id: 7, code: 'U.1.1', division: 'Persiapan', name: 'Pemasangan 1 m2 Panel Beton Pracetak 50x50x240 untuk Pagar', unit: 'm2' },
    { id: 8, code: 'U.1.2', division: 'Persiapan', name: 'Stake out trase saluran/infrastruktur (baru) di lapangan', unit: 'm2' },
    { id: 9, code: 'U.1.2', division: 'Persiapan', name: 'Pasangan 1 m\' profil melintang galian', unit: 'm\'' },
    { id: 10, code: 'U.1.2', division: 'Persiapan', name: 'Pasangan 1 m\' profil melintang galian tanah saluran atau sungai yang direhabilitasi atau normalisasi', unit: 'm\'' },
    { id: 11, code: 'U.1.2', division: 'Persiapan', name: 'Pasangan 1 m\' bouwplank', unit: 'm\'' },
    { id: 12, code: 'U.1.2', division: 'Persiapan', name: 'Patok kayu (kaso 5/7) panjang 0,5 m\'', unit: 'buah' },
    { id: 13, code: 'U.1.2', division: 'Persiapan', name: '1 Buah patok kayu (kaso 5/7) panjang 1 m\'', unit: 'buah' },
    { id: 14, code: 'U.1.2', division: 'Persiapan', name: 'Patok Tetap Bantu (PTB)', unit: 'buah' },
    { id: 15, code: 'U.1.2', division: 'Persiapan', name: 'Patok Tetap Utama (PTU)', unit: 'buah' },
    { id: 16, code: 'U.1.3', division: 'Persiapan', name: 'Sewa lahan', unit: 'ha-bulan' },
    { id: 17, code: 'U.1.3', division: 'Persiapan', name: 'Fasilitas (direksikeet, bengkel, laboratorium, dan papan nama)', unit: 'm2 atau LS' },
    { id: 18, code: 'U.1.3', division: 'Persiapan', name: 'Pembuatan 1 m2 kantor sementara/rumah jaga/gudang...', unit: 'm2' },
    { id: 19, code: 'U.1.3', division: 'Persiapan', name: 'Kebutuhan Lainnya', unit: 'LS' },
    { id: 20, code: 'U.1.3', division: 'Persiapan', name: 'Perkuatan jembatan eksisting', unit: 'LS' },
    { id: 21, code: 'U.1.3', division: 'Persiapan', name: 'Pembuatan 1 Buah papan nama pekerjaan... (berbagai ukuran)', unit: 'buah' },
    { id: 22, code: 'U.1.3', division: 'Persiapan', name: 'Pembuatan 1 m2 Jalan Tanah', unit: 'm2' },
    { id: 23, code: 'U.1.3', division: 'Persiapan', name: 'Pembuatan 1 m2 Jalan Kerikil', unit: 'm2' },
    { id: 24, code: 'U.1.3', division: 'Persiapan', name: 'Pembuatan 1 m2 Jalan Lapis Macadam', unit: 'm2' },
    { id: 25, code: 'U.1.3', division: 'Persiapan', name: 'Jembatan sementara', unit: 'm2 atau LS' },

    // U.2 PEKERJAAN DEWATERING
    { id: 26, code: 'U.2.1', division: 'Dewatering', name: '1 buah kistdam pasir/tanah dibungkus karung... 43 x 65 cm', unit: 'buah' },
    { id: 27, code: 'U.2.1', division: 'Dewatering', name: '1 buah kistdam pasir/tanah dibungkus karung... 45 x 120 cm', unit: 'buah' },
    { id: 28, code: 'U.2.1', division: 'Dewatering', name: '1 Buah geobag pasir/tanah ukuran 145 x 240 cm', unit: 'buah' },
    { id: 29, code: 'U.2.1', division: 'Dewatering', name: 'Kerangka kayu untuk 1 m3 kistdam...', unit: 'm3' },
    { id: 30, code: 'U.2.1', division: 'Dewatering', name: 'Kerangka baja profil... untuk 1 m3 kistdam...', unit: 'm3' },
    { id: 31, code: 'U.2.2', division: 'Dewatering', name: 'Pengoperasian per-jam pompa air diesel daya 2 KW...', unit: 'jam' },
    { id: 32, code: 'U.2.2', division: 'Dewatering', name: 'Pengoperasian per-jam pompa air diesel daya 5 KW...', unit: 'jam' },
    { id: 33, code: 'U.2.2', division: 'Dewatering', name: 'Pengoperasian per-jam pompa air diesel daya 10 KW...', unit: 'jam' },
    { id: 34, code: 'U.2.2', division: 'Dewatering', name: 'Pengoperasian per-jam pompa air diesel daya 20 KW...', unit: 'jam' },
    { id: 35, code: 'U.2.2', division: 'Dewatering', name: 'Pengoperasian per-jam pompa air diesel daya 30 KW...', unit: 'jam' },
    
    // U.3 PEKERJAAN TANAH
    { id: 36, code: 'U.3.1', division: 'Pekerjaan Tanah', name: '1 m2 pembersihan dan pengupasan permukaan tanah (striping)...', unit: 'm2' },
    { id: 37, code: 'U.3.1', division: 'Pekerjaan Tanah', name: 'Tebas tebang 1 m2 tanaman/tumbuhan Ø < 5 cm', unit: 'm2' },
    { id: 38, code: 'U.3.1', division: 'Pekerjaan Tanah', name: 'Tebas tebang 1 m2 tanaman/tumbuhan Ø >5 s.d. 15 cm', unit: 'm2' },
    { id: 39, code: 'U.3.1', division: 'Pekerjaan Tanah', name: 'Tebas tebang 1 batang pohon/tumbuhan Ø >15 s.d. 30 cm...', unit: 'batang' },
    { id: 40, code: 'U.3.1', division: 'Pekerjaan Tanah', name: 'Tebas tebang 1 batang pohon/tumbuhan Ø > 30 s.d 50 cm', unit: 'batang' },
    { id: 41, code: 'U.3.1', division: 'Pekerjaan Tanah', name: 'Pemotongan pohon pilihan diameter > 30-50 cm...', unit: 'batang' },
    { id: 42, code: 'U.3.1', division: 'Pekerjaan Tanah', name: 'Tebas tebang 1 batang pohon/tumbuhan Ø > 50 s.d 75 cm...', unit: 'batang' },
    { id: 43, code: 'U.3.1', division: 'Pekerjaan Tanah', name: 'Tebas tebang 1 batang pohon/tumbuhan Ø > 75 cm...', unit: 'batang' },
    { id: 44, code: 'U.3.2 & U.3.3', division: 'Pekerjaan Tanah', name: 'Gali dan cabut 1 tunggul pohon... Ø > 5 s.d. 15 cm', unit: 'tunggul' },
    { id: 45, code: 'U.3.2 & U.3.3', division: 'Pekerjaan Tanah', name: 'Gali dan cabut 1 tunggul pohon... Ø > 15 cm s.d. 30 cm', unit: 'tunggul' },
    { id: 46, code: 'U.3.2 & U.3.3', division: 'Pekerjaan Tanah', name: 'Gali dan cabut 1 tunggul pohon... Ø > 30 cm s.d. 50 cm', unit: 'tunggul' },
    { id: 47, code: 'U.3.2 & U.3.3', division: 'Pekerjaan Tanah', name: 'Gali dan cabut 1 tunggul pohon... Ø > 50 cm s.d. 75 cm', unit: 'tunggul' },
    { id: 48, code: 'U.3.2 & U.3.3', division: 'Pekerjaan Tanah', name: 'Gali dan cabut 1 tunggul pohon... Ø > 75 cm', unit: 'tunggul' },
    { id: 49, code: 'U.3.4', division: 'Pekerjaan Tanah', name: 'Penggalian 1 m3 tanah biasa (berbagai kedalaman, manual & semi-mekanis)', unit: 'm3' },
    { id: 50, code: 'U.3.4', division: 'Pekerjaan Tanah', name: 'Penggalian 1 m3 tanah berbatu (berbagai kedalaman, manual & semi-mekanis)', unit: 'm3' },
    { id: 51, code: 'U.3.4', division: 'Pekerjaan Tanah', name: 'Penggalian 1 m3 cadas atau tanah keras (berbagai kedalaman, manual & semi-mekanis)', unit: 'm3' },
    { id: 52, code: 'U.3.4', division: 'Pekerjaan Tanah', name: 'Penggalian 1 m3 galian lumpur (berbagai kedalaman, manual & semi-mekanis)', unit: 'm3' },
    { id: 53, code: 'U.3.4', division: 'Pekerjaan Tanah', name: 'Penggalian 1 m3 pasir (berbagai kedalaman, manual & semi-mekanis)', unit: 'm3' },
    { id: 54, code: 'U.3.4', division: 'Pekerjaan Tanah', name: 'Pasangan... gribig bambu...', unit: 'm2' },
    { id: 55, code: 'U.3.4', division: 'Pekerjaan Tanah', name: 'Pasangan... Bilik kulit (hinis/kulit bambu)...', unit: 'm2' },
    { id: 56, code: 'U.3.4', division: 'Pekerjaan Tanah', name: 'pasangan... Gedeg Bambu...', unit: 'm2' },
    { id: 57, code: 'U.3.4', division: 'Pekerjaan Tanah', name: 'Pasangan Papan 3/20...', unit: 'm2' },
    { id: 58, code: 'U.3.4', division: 'Pekerjaan Tanah', name: 'Pasangan balok kayu 8/12...', unit: 'm2' },
    { id: 59, code: 'U.3.5', division: 'Pekerjaan Tanah', name: '1 m3 Urukan Kembali Galian Tanah... (Manual)', unit: 'm3' },
    { id: 60, code: 'U.3.5', division: 'Pekerjaan Tanah', name: '1 m3 Timbunan dengan Pasir Uruk... (Manual)', unit: 'm3' },
    { id: 61, code: 'U.3.5', division: 'Pekerjaan Tanah', name: '1 m3 Urukan tanah biasa atau tanah liat berpasir... (Manual)', unit: 'm3' },
    { id: 62, code: 'U.3.5', division: 'Pekerjaan Tanah', name: '1 m3 Urukan tanah liat (lempung)... (Manual)', unit: 'm3' },
    { id: 63, code: 'U.3.5', division: 'Pekerjaan Tanah', name: '1 m3 Pemadatan Tanah per 20 cm (timbris manual)', unit: 'm3' },
    { id: 64, code: 'U.3.5', division: 'Pekerjaan Tanah', name: '1 m3 Timbunan dan Pemadatan Sirtu', unit: 'm3' },
    { id: 65, code: 'U.3.5', division: 'Pekerjaan Tanah', name: '1 m3 Pemadatan tanah... (Stamper Kuda)', unit: 'm3' },
    { id: 66, code: 'U.3.5', division: 'Pekerjaan Tanah', name: '1 m3 Pemadatan pasir... (Stamper Kodok)', unit: 'm3' },
    { id: 67, code: 'U.3.5', division: 'Pekerjaan Tanah', name: '1 m3 Pemadatan pasir... (VRR-550 kg)', unit: 'm3' },
    { id: 68, code: 'U.3.5', division: 'Pekerjaan Tanah', name: '1 m3 Pemadatan pasir... (VRR-1,5 Ton)', unit: 'm3' },
    { id: 69, code: 'U.3.6', division: 'Pekerjaan Tanah', name: 'Mengangkut 1 m3 tanah lepas, jarak angkut... (berbagai jarak)', unit: 'm3' },
    { id: 70, code: 'U.3.6', division: 'Pekerjaan Tanah', name: 'Menurunkan 1 m3 material, sampai beda tinggi... (berbagai ketinggian)', unit: 'm3' },
    { id: 71, code: 'U.3.6', division: 'Pekerjaan Tanah', name: 'Menaikkan 1 m3 material, sampai beda tinggi... (berbagai ketinggian)', unit: 'm3' },
    { id: 72, code: 'U.3.7', division: 'Pekerjaan Tanah', name: '1 m2 Penanaman Gebalan Rumput', unit: 'm2' },
    { id: 73, code: 'U.3.7', division: 'Pekerjaan Tanah', name: 'Pembabadan rumput 1 m2, secara semi Mekanis (berbagai kemiringan)', unit: 'm2' },

    // U.4 PEKERJAAN BETON
    { id: 74, code: 'U.4.1 & U.4.2', division: 'Pekerjaan Beton', name: 'Membuat 1 m3 Beton Mutu fc\' 10/15/17/20/21 MPa (Manual)', unit: 'm3' },
    { id: 75, code: 'U.4.1 & U.4.2', division: 'Pekerjaan Beton', name: 'Pembuatan s.d Pengecoran 1 m³ beton mutu rendah fc\' 10/15/17 MPa (Semi-Mekanis)', unit: 'm3' },
    { id: 76, code: 'U.4.1 & U.4.2', division: 'Pekerjaan Beton', name: 'Pembuatan s.d Pengecoran 1 m³ beton mutu sedang fc\' 20/21/25/28/30/31/35 MPa (Semi-Mekanis)', unit: 'm3' },
    { id: 77, code: 'U.4.3 & U.4.4', division: 'Pekerjaan Beton', name: '1 m³ Pengecoran Beton menggunakan Ready Mixed', unit: 'm3' },
    { id: 78, code: 'U.4.3 & U.4.4', division: 'Pekerjaan Beton', name: '1m3 beton dicorkan... setiap tambah jarak 25 m\' (Manual)', unit: 'm3' },
    { id: 79, code: 'U.4.3 & U.4.4', division: 'Pekerjaan Beton', name: '1m3 beton dicorkan... setiap kenaikan 4 m\' (Manual)', unit: 'm3' },
    { id: 80, code: 'U.4.3 & U.4.4', division: 'Pekerjaan Beton', name: 'Pengecoran pakai pompa beton (berbagai spesifikasi)', unit: 'm3' },
    { id: 81, code: 'U.4.5', division: 'Pekerjaan Beton', name: 'Pemadatan beton... secara Manual', unit: 'm3' },
    { id: 82, code: 'U.4.5', division: 'Pekerjaan Beton', name: 'Pemadatan beton... dengan Vibrator', unit: 'm3' },
    { id: 83, code: 'U.4.6', division: 'Pekerjaan Beton', name: 'Penulangan 1 kg baja tulangan polos (BjTP) atau baja tulangan sirip/ulir (BjTS)...', unit: 'kg' },
    { id: 84, code: 'U.4.6', division: 'Pekerjaan Beton', name: 'Penulangan 1 kg jaring kawat (Wiremesh M6-M10)...', unit: 'kg' },
    { id: 85, code: 'U.4.6', division: 'Pekerjaan Beton', name: 'Mengangkut/menaikkan 1 kg tulangan... (Manual & Mekanis)', unit: 'kg' },
    { id: 86, code: 'U.4.7', division: 'Pekerjaan Beton', name: 'Menggenangi 1 m² permukaan beton...', unit: 'm2' },
    { id: 87, code: 'U.4.7', division: 'Pekerjaan Beton', name: 'Menyirami 1 m² permukaan beton... (media kain terpal)', unit: 'm2' },
    { id: 88, code: 'U.4.7', division: 'Pekerjaan Beton', name: 'Menyirami 1 m² permukaan beton... (media karung goni)', unit: 'm2' },
    { id: 89, code: 'U.4.8', division: 'Pekerjaan Beton', name: 'Pemasangan 1 m\' PVC Waterstop lebar 150 mm', unit: 'm\'' },
    { id: 90, code: 'U.4.8', division: 'Pekerjaan Beton', name: 'Pemasangan 1 m\' PVC Waterstop lebar 200 mm', unit: 'm\'' },
    { id: 91, code: 'U.4.8', division: 'Pekerjaan Beton', name: '1 m\' pasangan water stop PVC lebar 230 mm - 320 mm', unit: 'm\'' },
    { id: 92, code: 'U.4.8', division: 'Pekerjaan Beton', name: '1 m\' pasangan water stop rubber lebar 150 mm - 200 mm', unit: 'm\'' },
    { id: 93, code: 'U.4.9', division: 'Pekerjaan Beton', name: 'Pemasangan 1 m3 Pondasi Sumuran Beton Siklop, 60% Beton fc\' 15 MPa dan 40% Batu Belah...', unit: 'm3' },
    { id: 94, code: 'U.4.9', division: 'Pekerjaan Beton', name: '1 m3 Beton Sikloop 60% Beton fc\' 15 MPa : 40% Batu Belah... (Manual & Semi-Mekanis)', unit: 'm3' },
    { id: 95, code: 'U.4.9', division: 'Pekerjaan Beton', name: '1 m3 Beton Sikloop 70% Beton fc\' 15 MPa : 30% Batu Belah... (Manual & Semi-Mekanis)', unit: 'm3' },
    { id: 96, code: 'U.4.10', division: 'Pekerjaan Beton', name: 'Bongkar 1 m3 beton mutu rendah... (Manual)', unit: 'm3' },
    { id: 97, code: 'U.4.10', division: 'Pekerjaan Beton', name: 'Bongkar 1 m3 beton mutu sedang... (Manual)', unit: 'm3' },
    { id: 98, code: 'U.4.10', division: 'Pekerjaan Beton', name: 'Bongkar 1 m3 Beton beton mutu rendah... (Jack hammer)', unit: 'm3' },
    { id: 99, code: 'U.4.10', division: 'Pekerjaan Beton', name: 'Bongkar 1 m3 Beton beton mutu sedang... (Jack hammer)', unit: 'm3' },
    { id: 100, code: 'U.4.11', division: 'Pekerjaan Beton', name: '1 m3 Pekerjaan Grouting secara Manual', unit: 'm3' },
    { id: 101, code: 'U.4.11', division: 'Pekerjaan Beton', name: '1 kg Pekerjaan Grouting secara injeksi', unit: 'kg' },

    // U.5 PEKERJAAN PEMANCANGAN
    { id: 102, code: 'U.5', division: 'Pemancangan', name: 'Per-m\' Penetrasi Tiang Pancang Kayu atau Dolken ø 6-8 cm', unit: 'm\'' },
    { id: 103, code: 'U.5', division: 'Pemancangan', name: 'Per-m\' Penetrasi Tiang Kayu Gelondongan ø 18 - 20 cm', unit: 'm\'' },
    { id: 104, code: 'U.5', division: 'Pemancangan', name: 'Per-m\' penetrasi tiang pancang beton 15 x 15 cm', unit: 'm\'' },
    { id: 105, code: 'U.5', division: 'Pemancangan', name: 'Per-m\' penetrasi tiang pancang beton 20 x 20 cm', unit: 'm\'' },

    // U.6 PEKERJAAN AIR TANAH
    { id: 106, code: 'U.6.1', division: 'Air Tanah', name: 'Pembuatan 1 unit Sumur Gali Ø 1m kedalaman 6 m', unit: 'unit' },
    { id: 107, code: 'U.6.1', division: 'Air Tanah', name: '1 m\' Pengeboran Sumur Bor Ø 1"- 1,25" (berbagai jenis tanah)', unit: 'm\'' },
    { id: 108, code: 'U.6.1', division: 'Air Tanah', name: 'Pengadaan dan Pemasangan 1 m\' Sumur Bor Air Tanah Dangkal Ø 1"- 1,25"', unit: 'm\'' },
    { id: 109, code: 'U.6.1', division: 'Air Tanah', name: '1 m\' Pengeboran Sumur Bor Dangkal Ø 2" (berbagai jenis tanah)', unit: 'm\'' },
    { id: 110, code: 'U.6.1', division: 'Air Tanah', name: 'Pengadaan dan Pemasangan 1 m\' Sumur Bor Air Tanah Dangkal GIP Ø 2"', unit: 'm\'' },
    { id: 111, code: 'U.6.1', division: 'Air Tanah', name: '1 m\' Pengeboran Sumur Bor Ø 4" (berbagai jenis tanah)', unit: 'm\'' },
    { id: 112, code: 'U.6.1', division: 'Air Tanah', name: 'Pengadaan dan Pemasangan 1 m\' Pipa Casing GIP Ø 4"', unit: 'm\'' },
    { id: 113, code: 'U.6.1', division: 'Air Tanah', name: '1 m\' Pengeboran Sumur Bor Ø 6" (berbagai jenis tanah)', unit: 'm\'' },
    { id: 114, code: 'U.6.1', division: 'Air Tanah', name: 'Pengadaan dan Pemasangan 1 m\' Casing Sumur Bor Air Tanah Dangkal Ø 6"', unit: 'm\'' },
    { id: 115, code: 'U.6.2', division: 'Air Tanah', name: 'Pengadaan dan Pemasangan 1-set Pompa Tangan (Manual)', unit: 'set' },
    { id: 116, code: 'U.6.2', division: 'Air Tanah', name: 'Pengadaan dan Pemasangan 1 set Socket dan Ploksok', unit: 'set' },
    { id: 117, code: 'U.6.2', division: 'Air Tanah', name: 'Pengadaan dan Pemasangan 1-set Pompa Jet Pump dan Perpipaan untuk kedalaman 40 m\'', unit: 'set' },
  ]);

  masterMaterials = signal<MasterMaterial[]>([
    { id: 1, name: 'Semen', unit: 'Sak' },
    { id: 2, name: 'Pasir', unit: 'm3' },
    { id: 3, name: 'Besi Beton 10mm', unit: 'Batang' },
  ]);

  projects = signal<Project[]>([
    {
      id: 1,
      name: 'Pembangunan Gedung Kantor Pusat',
      code: 'PROJ-001',
      location: 'Jakarta Pusat',
      contractValue: 5000000000,
      startDate: '2024-01-15',
      targetEndDate: '2024-12-15',
      status: 'Ongoing',
      assignedUsers: [3], // Andi Wijaya
    },
    {
      id: 2,
      name: 'Renovasi Jembatan Merah',
      code: 'PROJ-002',
      location: 'Surabaya',
      contractValue: 1200000000,
      startDate: '2024-03-01',
      targetEndDate: '2024-09-30',
      status: 'Ongoing',
      assignedUsers: [3],
    },
  ]);

  rabItems = signal<RABItem[]>([
    { id: 1, projectId: 1, masterItemId: 49, targetVolume: 1500, unitPrice: 75000, totalPrice: 112500000, scheduleStartDate: '2024-01-15', scheduleEndDate: '2024-05-30' },
    { id: 2, projectId: 1, masterItemId: 75, targetVolume: 800, unitPrice: 950000, totalPrice: 760000000, scheduleStartDate: '2024-04-01', scheduleEndDate: '2024-08-31' },
    { id: 3, projectId: 1, masterItemId: 4, targetVolume: 2500, unitPrice: 150000, totalPrice: 375000000, scheduleStartDate: '2024-06-01', scheduleEndDate: '2024-11-30' },
    { id: 4, projectId: 2, masterItemId: 49, targetVolume: 500, unitPrice: 80000, totalPrice: 40000000, scheduleStartDate: '2024-03-01', scheduleEndDate: '2024-04-30' },
    { id: 5, projectId: 2, masterItemId: 76, targetVolume: 300, unitPrice: 1100000, totalPrice: 330000000, scheduleStartDate: '2024-05-01', scheduleEndDate: '2024-08-31' },
  ]);

  dailyReports = signal<DailyReport[]>([
    {
      id: 1, projectId: 1, reporterId: 3, reportDate: '2024-05-01', weather: 'Sunny', 
      notes: 'Pekerjaan galian berjalan lancar.', status: 'Approved', validatorId: 2, validationDate: '2024-05-02',
      progressItems: [{ rabItemId: 1, volumeCompleted: 50 }],
      photos: ['https://picsum.photos/seed/report1/400/300'],
      materialUsage: [{ masterMaterialId: 2, volumeUsed: 10 }],
      issues: []
    },
    {
      id: 2, projectId: 1, reporterId: 3, reportDate: '2024-05-02', weather: 'Cloudy', 
      notes: 'Memulai persiapan pengecoran. Terjadi keterlambatan pengiriman semen.', status: 'Approved', validatorId: 2, validationDate: '2024-05-03',
      progressItems: [{ rabItemId: 1, volumeCompleted: 45 }],
      photos: ['https://picsum.photos/seed/report2/400/300'],
      materialUsage: [],
      issues: [{id: 1, description: 'Semen terlambat datang dari supplier', category: 'Material', status: 'Open' }]
    },
    {
      id: 3, projectId: 1, reporterId: 3, reportDate: '2024-05-03', weather: 'Rainy', 
      notes: 'Pekerjaan terhambat hujan di sore hari.', status: 'Pending',
      progressItems: [{ rabItemId: 1, volumeCompleted: 20 }],
      photos: ['https://picsum.photos/seed/report3/400/300'],
      materialUsage: [],
      issues: [{id: 2, description: 'Hujan deras menghentikan pekerjaan galian', category: 'Weather', status: 'Resolved' }]
    },
    {
      id: 4, projectId: 2, reporterId: 3, reportDate: '2024-05-03', weather: 'Sunny', 
      notes: 'Galian pondasi jembatan sisi utara.', status: 'Pending',
      progressItems: [{ rabItemId: 4, volumeCompleted: 30 }],
      photos: ['https://picsum.photos/seed/report4/400/300'],
      materialUsage: [
        { masterMaterialId: 1, volumeUsed: 20 },
        { masterMaterialId: 2, volumeUsed: 5 },
      ],
      issues: []
    },
  ]);

  getProjectById(id: number): Project | undefined {
    return this.projects().find(p => p.id === id);
  }

  getRabForProject(projectId: number): (RABItem & { masterItem: MasterWorkItem | undefined })[] {
    return this.rabItems()
      .filter(rab => rab.projectId === projectId)
      .map(rab => ({
        ...rab,
        masterItem: this.masterItems().find(m => m.id === rab.masterItemId)
      }));
  }
  
  getReportsForProject(projectId: number): DailyReport[] {
      return this.dailyReports().filter(r => r.projectId === projectId).sort((a,b) => new Date(b.reportDate).getTime() - new Date(a.reportDate).getTime());
  }
  
  approveReport(reportId: number, validatorId: number) {
      this.dailyReports.update(reports => 
          reports.map(r => r.id === reportId ? {...r, status: 'Approved', validatorId: validatorId, validationDate: new Date().toISOString().split('T')[0]} : r)
      );
  }

  rejectReport(reportId: number, validatorId: number, reason: string) {
      this.dailyReports.update(reports => 
          reports.map(r => r.id === reportId ? {...r, status: 'Rejected', validatorId: validatorId, validationDate: new Date().toISOString().split('T')[0], rejectionReason: reason} : r)
      );
  }

  updateUser(updatedUser: User) {
      this.users.update(users => users.map(u => u.id === updatedUser.id ? updatedUser : u));
  }
}
