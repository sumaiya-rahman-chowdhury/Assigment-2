
  // Create the map and set view (latitude, longitude) and zoom level
  var map = L.map('map').setView([23.8103, 90.4125], 13); // Coordinates for Dhaka, Bangladesh

  // Add a tile layer to the map (OpenStreetMap tiles)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Optional: Add a marker at the center
  var marker = L.marker([23.8103, 90.4125]).addTo(map);

