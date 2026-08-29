// Function to render map
function renderMap(coords, title, locationText) {
  const map = L.map('map').setView(coords, 9);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  L.marker(coords)
    .addTo(map)
    .bindPopup(`<h4>${title}</h4><p>${locationText || "Exact Location will be provided after booking"}</p>`)
    .openPopup();
}

// Check coordinates or fetch dynamically from location name
if (typeof listing !== "undefined") {
  const title = listing.title || "Listing Location";
  const locName = `${listing.location}, ${listing.country}`;

  if (listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length === 2) {
    // MongoDB stores GeoJSON as [longitude, latitude], Leaflet needs [latitude, longitude]
    const lat = listing.geometry.coordinates[1];
    const lng = listing.geometry.coordinates[0];
    
    // Check if coordinates are valid non-zero numbers
    if (lat && lng && (lat !== 0 || lng !== 0)) {
      renderMap([lat, lng], title, locName);
    } else {
      fetchLocation(locName, title);
    }
  } else {
    fetchLocation(locName, title);
  }
}

function fetchLocation(locName, title) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locName)}`)
    .then((res) => res.json())
    .then((data) => {
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        renderMap([lat, lon], title, locName);
      } else {
        // Fallback to Jaipur if location search is Jaipur, otherwise Default
        renderMap([26.9124, 75.7873], title, locName);
      }
    })
    .catch(() => {
      renderMap([26.9124, 75.7873], title, locName);
    });
}