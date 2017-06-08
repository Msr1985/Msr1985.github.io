var music = ''
var app = document.getElementById('app')
songs.forEach(function(album){
    //循环专辑中的每一首歌曲
    music += '<h3>'+album.title+'</h3>'
    album.songs.forEach(function(song){
        music += '<a class="btn btn-danger m-btn" target="_blank" href="'+song.url+'"><p>'+song.name+'</p></a>'
    })
    music += '<br>  <hr>'
})
app.innerHTML = music