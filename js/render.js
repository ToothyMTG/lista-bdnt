function render_songs() {
    var left = document.getElementById('left')
    for (let i = 0; i < Songs.length; i++) {
        var div = document.createElement('div')
        div.classList.add('song')
        left.appendChild(div)

        var playback = document.createElement('button')
        playback.classList.add('playback')
        playback.innerHTML = ">"
        div.appendChild(playback)

        var name = document.createElement('div')
        name.classList.add('name')
        name.innerHTML = Songs[i].artist + ' - ' + Songs[i].name
        div.appendChild(name)

        var checkbox = document.createElement('input')
        checkbox.classList.add('checkbox')
        checkbox.type = 'checkbox'
        div.appendChild(checkbox)
    }

}

render_songs()