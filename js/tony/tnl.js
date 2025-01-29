// Import necessary modules
import * as devalue from 'devalue';
import { decompress } from 'compress-json';

// Function to fetch and display servers
async function fetchAndDisplayServers() {
    try {
        // Fetch price data from the API
        const apiResp = await fetch('https://tldb.info/auction-house/__data.json').then(r => r.json());
        const apiData = devalue.unflatten(apiResp.nodes.find((e) => e?.type === 'data').data);

        const items = decompress(apiData.items);
        const traits = apiData.traits;
        // Extract the regions (this contains the server data)
        const { regions } = apiData;

        // Get the dropdown element from your HTML to display the regions
        const regionListElement = document.getElementById('region-list');

        // If no regions are found, inform the user
        if (!regions || Object.keys(regions).length === 0) {
            regionListElement.innerHTML = '<option>No servers available</option>';
            return;
        }

        // Iterate over the regions and create options dynamically
        Object.keys(regions).forEach(region => {
            const regionElement = document.createElement('option');
            regionElement.value = region;  // The value of the option will be the server name
            regionElement.textContent = region;  // The text shown to the user
            regionListElement.appendChild(regionElement);  // Add the option to the dropdown list
        });

    } catch (error) {
        console.error('Error fetching or displaying server data:', error);
    }
}

// Call the function to fetch and display the servers
fetchAndDisplayServers();

// Listen for changes to the dropdown selection (server selection)
document.getElementById('region-list').addEventListener('change', (event) => {
    const selectedServer = event.target.value;
    console.log('Selected server:', selectedServer);

    // Now you can use the selected server to fetch or display auction data for that server
    // For example, you can fetch auction data specific to the selected server
    // fetchAuctionDataForServer(selectedServer); // You would define this function to handle that
});