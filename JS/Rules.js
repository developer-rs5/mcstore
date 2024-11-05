// ==================
//      COPY IP
// ==================

const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var ip = "play.zenuxs.xyz"; // Add your server's IP here
    navigator.clipboard.writeText(ip).then(() => {
        var popup = document.getElementById("play-copy-alert");

        setTimeout(function() {
            popup.classList.add("show");

        }, 50);

        setTimeout(function() {
            popup.classList.remove("show");
        }, 5000);
    });
});
