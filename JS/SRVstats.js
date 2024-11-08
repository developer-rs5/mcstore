// Function to fetch the number of players online from the server API
function getPlayersOnline() {
    const serverIp = "play.zenuxs.xyz"; // The Minecraft server IP
    const apiUrl = `https://mcapi.us/server/status?ip=${serverIp}`; // mcapi.us API URL

    fetch(apiUrl)
        .then(response => {
            // Check if the response is successful (status 200)
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Get the number of players online if the server is online
            if (data.online) {
                document.querySelector(".srvonline").textContent = `Players online: ${data.players.now}`;
            } else {
                // If the server is offline or there's an issue with data
                document.querySelector(".srvonline").textContent = "Server is offline.";
            }
        })
        .catch(error => {
            // In case of an error (e.g., network issues)
            console.error("Error fetching player count:", error);
            document.querySelector(".srvonline").textContent = "Could not retrieve the player count.";
        });
}

// Call the function to get the player count
getPlayersOnline();
