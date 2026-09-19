import React from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

const rooms = [
	{ id: 1, name: 'Kamar Aster', location: 'Lantai 1', price: 1250000, facilities: ['Kasur', 'Wi-Fi', 'Kamar mandi dalam'], available: true, tone: 'from-[#e4f0e8] to-[#b9d4c3]' },
	{ id: 2, name: 'Kamar Cendana', location: 'Lantai 2', price: 1500000, facilities: ['Kasur', 'Wi-Fi', 'Meja kerja'], available: true, tone: 'from-[#f5e5d0] to-[#e5bf96]' },
	{ id: 3, name: 'Kamar Kenari', location: 'Lantai 2', price: 1100000, facilities: ['Kasur', 'Wi-Fi'], available: false, tone: 'from-[#e1e5e9] to-[#b8c2cc]' },
];

function formatPrice(price) {
	return new Intl.NumberFormat('id-ID').format(price);
}

function App() {
	const [selectedRoom, setSelectedRoom] = React.useState(null);

	return (
		<div className="min-h-screen bg-[#f7f5ef] text-[#21332b]">
			<header className="border-b border-[#dce5dc] bg-[#f7f5ef]/95">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
					<a className="text-xl font-semibold tracking-tight" href="#top">kosmate<span className="text-[#e07a43]">.</span></a>
					<nav className="hidden items-center gap-8 text-sm text-[#607066] md:flex"><a className="font-medium text-[#21332b]" href="#kamar">Cari kamar</a><a href="#cara-kerja">Cara kerja</a><a href="#bantuan">Bantuan</a></nav>
					<button className="rounded-full border border-[#b9cbbd] px-5 py-2 text-sm font-medium transition hover:bg-[#e8f0e7]">Masuk</button>
				</div>
			</header>

			<main id="top">
				<section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-24">
					<div className="flex flex-col justify-center"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#e07a43]">Tempat tinggal yang terasa pulang</p><h1 className="max-w-xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#21332b] md:text-7xl">Temukan kamar yang cocok dengan ritmemu.</h1><p className="mt-7 max-w-lg text-lg leading-8 text-[#607066]">Katalog kamar kos yang rapi, booking yang jelas, dan semua kebutuhan tinggal dalam satu tempat.</p><a className="mt-9 w-fit rounded-full bg-[#e07a43] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(224,122,67,0.2)] transition hover:bg-[#c96532]" href="#kamar">Lihat kamar tersedia <span aria-hidden="true">&#8594;</span></a></div>
					<div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#d8e6d8] p-8 shadow-sm md:min-h-[460px]"><div className="absolute -right-10 -top-12 h-56 w-56 rounded-full border-[28px] border-[#f4c38f]/70" /><div className="absolute bottom-0 left-0 h-3/5 w-full bg-gradient-to-t from-[#a8c6ad] to-transparent" /><div className="relative flex h-full flex-col justify-end"><div className="max-w-xs rounded-2xl border border-white/60 bg-white/65 p-5 backdrop-blur-sm"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e07a43]">Pilihan minggu ini</p><p className="mt-2 text-2xl font-semibold">Ruang yang tenang untuk mulai lagi.</p></div></div></div>
				</section>

				<section id="kamar" className="border-t border-[#dce5dc] bg-white px-6 py-16 lg:px-10"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e07a43]">Katalog kamar</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">Pilih ruangmu.</h2></div><p className="max-w-sm text-sm leading-6 text-[#607066]">Harga transparan, fasilitas tertera, dan status kamar selalu diperbarui.</p></div><div className="mt-10 grid gap-6 md:grid-cols-3">{rooms.map((room) => <article className="overflow-hidden rounded-2xl border border-[#dce5dc] bg-[#fbfcf9]" key={room.id}><div className={`flex h-44 items-end bg-gradient-to-br ${room.tone} p-5`}><span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-[#385343]">{room.available ? 'Tersedia' : 'Terisi'}</span></div><div className="p-5"><div className="flex items-start justify-between gap-3"><div><h3 className="text-xl font-semibold">{room.name}</h3><p className="mt-1 text-sm text-[#607066]">{room.location}</p></div><p className="text-right text-sm font-semibold text-[#e07a43]">Rp {formatPrice(room.price)}<span className="block text-xs font-normal text-[#829087]">/bulan</span></p></div><div className="mt-5 flex flex-wrap gap-2">{room.facilities.map((facility) => <span className="rounded-full bg-[#e8f0e7] px-3 py-1 text-xs text-[#385343]" key={facility}>{facility}</span>)}</div><button className="mt-6 w-full rounded-full border border-[#b9cbbd] px-4 py-2.5 text-sm font-semibold transition hover:border-[#21332b] hover:bg-[#e8f0e7] disabled:cursor-not-allowed disabled:opacity-50" disabled={!room.available} onClick={() => setSelectedRoom(room)}>{room.available ? 'Ajukan booking' : 'Kamar terisi'}</button></div></article>)}</div></div></section>
			</main>

			{selectedRoom && <div className="fixed inset-0 z-10 flex items-center justify-center bg-[#21332b]/35 p-6" role="presentation" onClick={() => setSelectedRoom(null)}><div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="booking-title" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between gap-4"><div><p className="text-sm text-[#e07a43]">Booking kamar</p><h2 id="booking-title" className="mt-1 text-2xl font-semibold">{selectedRoom.name}</h2></div><button className="text-2xl leading-none text-[#607066]" aria-label="Tutup" onClick={() => setSelectedRoom(null)}>&times;</button></div><p className="mt-4 text-sm leading-6 text-[#607066]">Form booking akan terhubung ke akun penyewa dan API Laravel pada tahap berikutnya.</p><button className="mt-7 w-full rounded-full bg-[#e07a43] px-5 py-3 text-sm font-semibold text-white" onClick={() => setSelectedRoom(null)}>Lanjutkan nanti</button></div></div>}
		</div>
	);
}

const root = document.getElementById('app');

if (root) {
	createRoot(root).render(<App />);
}