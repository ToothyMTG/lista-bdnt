function render_songs() {
    var left = document.getElementById('left')
    for (let i = 0; i < Songs.length; i++) {
        var div = document.createElement('div')
        div.classList.add('song')
        div.classList.add('song-unchecked')
        left.appendChild(div)

        var playback = document.createElement('button')
        playback.classList.add('playback')
        playback.innerHTML = ">"
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
        parent.classList.remove('song-unchecked')
        parent.classList.add('song-checked')
        add_to_list (base)
    }
}

render_songs()

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

function render_up_down_button (x) {
    var div = document.createElement('div')
    div.classList.add('nav-container')
    var up = document.createElement('div')
    up.innerHTML = ' up '
    up.classList.add('nav-button')
    var down = document.createElement('div')
    down.innerHTML = ' down '
    down.classList.add('nav-button')
    div.appendChild(up)
    div.appendChild(down)
    x.appendChild(div)
}