@extends('layouts.app')

@section('title', 'Daftar Kamar Kos')

@section('content')
    <h2>Daftar Kamar Kos</h2>
    
    <a href="{{ route('kos.create') }}">+ Tambah Kamar</a>

    <br><br>

    <table border="1" cellpadding="8" cellspacing="0">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nama Kamar</th>
                <th>Harga</th>
                <th>Fasilitas</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td><strong>Kamar 101 - Standard</strong></td>
                <td>Rp 1.500.000 / bulan</td>
                <td>AC, WiFi, Kamar Mandi Dalam</td>
                <td>Tersedia</td>
            </tr>
            <tr>
                <td>2</td>
                <td><strong>Kamar 102 - VIP</strong></td>
                <td>Rp 2.000.000 / bulan</td>
                <td>AC, WiFi, Water Heater, TV</td>
                <td>Terisi</td>
            </tr>
        </tbody>
    </table>
@endsection