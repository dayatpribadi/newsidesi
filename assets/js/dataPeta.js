document.addEventListener("DOMContentLoaded", function () {
    // Initialize Leaflet map
    const map = L.map('leaflet-map').setView([-3.317, 104.763], 7); // Coordinates for Sumatera Selatan

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Random coordinates in Sumatera Selatan
    const randomCoordinates = [
        [-3.317, 104.763], // Initial point (center of Sumatera Selatan)
        [-3.283, 104.719],
        [-3.275, 104.742],
        [-3.289, 104.755],
        [-3.326, 104.777]
    ];

    // Add random markers on the map with the new data
    randomCoordinates.forEach(function (coords, index) {
        // Information for each marker
        const keluargaData = {
            namaKepalaKeluarga: 'NURHAYATI',
            alamat: 'DUSUN III DESA PAYAKABUNG',
            rt: '001',
            rw: '-',
            kecamatan: 'Indralaya Utara',
            desa: 'PAYAKABUNG',
            fotoRumah: 'Foto Rumah',
            videoRumah: 'Lihat Video 360',
            gambarRumah: 'https://images.unsplash.com/photo-1730801915125-43f6f575a731?q=80&w=3731&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Example image for the house photo
        };

        // Create popup content with a table for better layout
        const popupContent = `
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Nama Kepala Keluarga</th>
                <td style="padding: 8px;">${keluargaData.namaKepalaKeluarga}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Alamat</th>
                <td style="padding: 8px;">${keluargaData.alamat}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">RT</th>
                <td style="padding: 8px;">${keluargaData.rt}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">RW</th>
                <td style="padding: 8px;">${keluargaData.rw}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Kecamatan</th>
                <td style="padding: 8px;">${keluargaData.kecamatan}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Desa</th>
                <td style="padding: 8px;">${keluargaData.desa}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Foto Rumah</th>
                <td style="padding: 8px;">
                    <img src="${keluargaData.gambarRumah}" alt="Foto Rumah" style="max-width: 150px; height: 75px; border-radius: 8px;">
                </td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Video Rumah</th>
                <td style="padding: 8px;"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">${keluargaData.videoRumah}</a></td>
            </tr>
        </table>
    `;

        // Create the marker
        const marker = L.marker(coords).addTo(map);

        // Show popup on mouseover, hide on mouseout
        marker.on('mouseover', function () {
            marker.bindPopup(popupContent).openPopup();
        });

        marker.on('mouseout', function () {
            marker.closePopup();
        });
    });
});


// map fasilitas
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Leaflet map
    const map = L.map('leaflet-map-fasilitas').setView([-3.317, 104.763], 7); // Coordinates for Sumatera Selatan

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Random coordinates in Sumatera Selatan
    const randomCoordinates = [
        [-3.317, 104.763], // Initial point (center of Sumatera Selatan)
        [-3.283, 104.719],
        [-3.275, 104.742],
        [-3.289, 104.755],
        [-3.326, 104.777]
    ];

    // Add random markers on the map with the new data
    randomCoordinates.forEach(function (coords, index) {
        // Information for each marker
        const keluargaData = {
            namaKepalaKeluarga: 'NURHAYATI',
            alamat: 'DUSUN III DESA PAYAKABUNG',
            rt: '001',
            rw: '-',
            kecamatan: 'Indralaya Utara',
            desa: 'PAYAKABUNG',
            fotoRumah: 'Foto Rumah',
            videoRumah: 'Lihat Video 360',
            gambarRumah: 'https://images.unsplash.com/photo-1730801915125-43f6f575a731?q=80&w=3731&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Example image for the house photo
        };

        // Create popup content with a table for better layout
        const popupContent = `
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Nama Kepala Keluarga</th>
                <td style="padding: 8px;">${keluargaData.namaKepalaKeluarga}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Alamat</th>
                <td style="padding: 8px;">${keluargaData.alamat}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">RT</th>
                <td style="padding: 8px;">${keluargaData.rt}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">RW</th>
                <td style="padding: 8px;">${keluargaData.rw}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Kecamatan</th>
                <td style="padding: 8px;">${keluargaData.kecamatan}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Desa</th>
                <td style="padding: 8px;">${keluargaData.desa}</td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Foto Rumah</th>
                <td style="padding: 8px;">
                    <img src="${keluargaData.gambarRumah}" alt="Foto Rumah" style="max-width: 150px; height: 75px; border-radius: 8px;">
                </td>
            </tr>
            <tr>
                <th style="text-align: left; padding: 8px; background-color: #f4f4f4;">Video Rumah</th>
                <td style="padding: 8px;"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">${keluargaData.videoRumah}</a></td>
            </tr>
        </table>
    `;

        // Create the marker
        const marker = L.marker(coords).addTo(map);

        // Show popup on mouseover, hide on mouseout
        marker.on('mouseover', function () {
            marker.bindPopup(popupContent).openPopup();
        });

        marker.on('mouseout', function () {
            marker.closePopup();
        });
    });
});