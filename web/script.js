function getVideos() {
    var keyword = document.getElementById("search").value;
    let nextPageToken = ""
    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRzEWM9xIDTHSktRsdQxbylKQzsGfKTG8&part=snippet,id&q=" + keyword + "&order=date&maxResults=5&nextPageToken=" + nextPageToken).then((result) => {
        return result.json()
    }).then((data) => {
        console.log(data)
        let videos = data.items
        nextPageToken = data.nextPageToken
        let videoContainer = document.querySelector(".youtube-container")
        for (video of videos) {
            console.log(video.id.videoId)
            //document.write(video.snippet.tittle)
            var idVideo = video.id.videoId
            videoContainer.innerHTML += `
            <h2 class= "lead">${video.snippet.title}</h2>
            <img src="${video.snippet.thumbnails.medium.url}">
            <a type="button" class="btn btn-dark" href="http://127.0.0.1:5500/reproductor.html?id=${idVideo}">Play</a>
            `
        }
    })
}


