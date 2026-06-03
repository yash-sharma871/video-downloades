function downloadVideo() {
    let url = document.getElementById("videoUrl").value;

    if(url === "") {
        alert("Please enter video URL");
        return;
    }

    alert("Download request received:\n" + url);

    // Backend API call yahan kar sakte ho
}
function getDownload() {
  const url = document.getElementById("url").value;

  document.getElementById("result").innerHTML = `
    <a href="${url}" download>
      Download Video
    </a>
  `;
}
