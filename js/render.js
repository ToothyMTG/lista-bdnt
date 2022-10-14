function render_songs() {
    var left = document.getElementById('left')
    for (let i = 0; i < Songs.length; i++) {
        var div = document.createElement('div')
        div.classList.add('song')
        div.classList.add('song-unchecked')
        left.appendChild(div)

        var playback = document.createElement('button')
        playback.classList.add('playback')
        playback.onclick = () => {render_player(event.target)}
        playback.innerHTML = ">"
        playback.value = i
        div.appendChild(playback)

        var name = document.createElement('div')
        name.classList.add('name')
        name.innerHTML = Songs[i].artist + ' - ' + Songs[i].name
        name.onclick = () => {
            select_song(event.target)
        }
        div.appendChild(name)

        var checkbox = document.createElement('input')
        checkbox.classList.add('checkbox')
        checkbox.type = 'checkbox'
        //div.appendChild(checkbox)
    }
}

function select_song (x) {
    var base = x
    var parent = base.parentElement
    if (parent.classList[1] == 'song-checked') {
        parent.classList.remove('song-checked')
        parent.classList.add('song-unchecked')
        remove_from_list (base)
    } else {
        if (Song_List.length >= 10) {
            return
        }
        parent.classList.remove('song-unchecked')
        parent.classList.add('song-checked')
        add_to_list (base)
    }
}


function render_headers () {
    var header = document.getElementById('header')
    var h1 = document.createElement('h1')
    h1.innerHTML = Header
    header.appendChild(h1)
    var h2 = document.createElement('h2')
    h2.innerHTML = Subheader
    header.appendChild(h2)
}

render_headers()

function render_list () {
    if (localStorage.list == undefined) {
        Song_List = []
    } else {
        Song_List = JSON.parse(localStorage.list)
    }
    console.log(Song_List)
}

function render_song_list () {
    var right = document.getElementById('right')
    var div = document.createElement('div')
    div.classList.add('right-list')
    div.id = 'right-list'
    right.appendChild(div)  
}

render_list ()
render_song_list ()

function render_search () {
    var left = document.getElementById('left')
    var input = document.createElement('input')
    input.type = 'text'
    input.id = 'search-box'
    input.placeholder = 'Wyszukaj'
    input.onkeydown = () => {
        setTimeout(() => {
            do_search(input.value)
        }, 5);
    }
    left.appendChild(input)
}

render_search()
render_songs()

function render_up_down_button (x) {
    var div = document.createElement('div')
    div.classList.add('nav-container')
    var up = document.createElement('div')
    up.innerHTML = '&#9650'
    up.onclick = () => {move_song_up(event.target)}
    up.classList.add('nav-button')
    var down = document.createElement('div')
    down.innerHTML = '&#9660'
    down.onclick = () => {move_song_down(event.target)}
    down.classList.add('nav-button')
    var exit = document.createElement('div')
    exit.innerHTML = 'X'
    exit.onclick = () => {remove_song(event.target)}
    exit.classList.add('nav-button')
    div.appendChild(up)
    div.appendChild(down)
    div.appendChild(exit)
    x.appendChild(div)
}

function render_player (x) {
    var left = document.getElementById('left')
    var player = document.getElementById('player')
    id = x.value
    var parr = x.parentElement
    //Debug = parent
    var one = Songs[id].link.split('?')[0]
    var split = one.split('track/')
    one = SpotifySRC[0] + split[1]
    var two = player.src.split('?')[1]
    var newSrc = one + SpotifySRC[1]
    player.src = newSrc
    left.insertBefore(player,parr)
    player.style.display = 'block'
    if (split[1] == undefined) {
        player.style.display = 'none'
        x.style.backgroundColor = 'red'
    }
}
