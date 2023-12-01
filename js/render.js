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
        playback.innerHTML = "&#9658;"
        playback.value = i
        div.appendChild(playback)

        var name = document.createElement('div')
        name.classList.add('name')
        name.innerHTML = '<b>' + Songs[i].artist + '</b><br>' + Songs[i].name + '<br>'
        name.value = Songs[i].artist + ' - ' + Songs[i].name
        name.onclick = () => {
            select_song(event.target)
        }
        div.appendChild(name)

        var lastpos = document.createElement('div')
        var trendpos = document.createElement('div')
        lastpos.classList.add('lastpos')
        trendpos.classList.add('trendpos')
        if (Songs[i].lastpos != 'NOWOŚĆ') {
            lastpos.innerHTML = 'Ostatnia pozycja: ' + Songs[i].lastpos
            lastpos.classList.add('lastpos-regular')
            if (Songs[i].trendpos > 0) {
                trendpos.innerHTML = '(+' + Songs[i].trendpos + ')'
                trendpos.classList.add('trendpos-good')
            }
            if (Songs[i].trendpos < 0) {
                trendpos.innerHTML = '(' + Songs[i].trendpos + ')'
                trendpos.classList.add('trendpos-bad')
            }
            if (Songs[i].trendpos == 0) {
                trendpos.innerHTML = '(BZ)'
            }
        } else {
            lastpos.innerHTML = Songs[i].lastpos
            lastpos.classList.add('lastpos-new')
        }
        name.appendChild(lastpos)

        name.appendChild(trendpos)
        
        var checkbox = document.createElement('input')
        checkbox.classList.add('checkbox')
        checkbox.type = 'checkbox'
        //div.appendChild(checkbox)
    }
}

function select_song (x) {
    var base = x
    if (base.value == undefined) {
        base = base.parentElement
    }
    var parent = base.parentElement
    if (parent.classList[1] == 'song-checked') {
        parent.classList.remove('song-checked')
        parent.classList.add('song-unchecked')
        remove_from_list (base)
    } else {
        //if (Song_List.length >= voteLimit) {
        //    return
        //}
        parent.classList.remove('song-unchecked')
        parent.classList.add('song-checked')
        add_to_list (base)
    }
}

function render_song_list_items() {
    right = document.getElementById('right-list')
    right.innerHTML = ''
    for (let i = 0; i < Song_List.length; i++) {
        var div = document.createElement('div')
        div.classList.add('song-list-box')
        div.style.width = '100%'
        render_up_down_button(div,(i + 1))
        right.appendChild(div)
        var lp = document.createElement('div')
        lp.innerHTML = (i+1) + ". "
        //div.appendChild(lp)
        var song = document.createElement('div')
        song.classList.add('song-name')
        if (i >= 20) {
            song.classList.add('song-name-after20')
        }
        song.draggable = 'true'
        song.value = i
        song.ondragstart = () => {Din = event.target.value}
        song.ondragleave = () => {
            Dout = event.target.value
            event.target.parentElement.classList.remove('song-list-box-drag')
        }
        song.ondrop = () => {
            Dout = event.target.value
            event.target.parentElement.classList.remove('song-list-box-drag')
            arraymove(Song_List,Din,Dout)
            render_song_list_items()
        }
        song.ondragenter = (e) => {
            e.preventDefault()
            event.target.parentElement.classList.add('song-list-box-drag')

        }
        song.ondragover = (e) => {e.preventDefault()}
        song.innerHTML = Song_List[i]
        div.appendChild(song)
    }
    var submit = document.getElementById('submit')
    var disclaimer = document.getElementById('disclaimer')
    var nickinput = document.getElementById('nick-input')
    if ((Song_List.length >= voteMinimum) && (Song_List.length <= voteLimit)) {
        submit.style.display = 'block'
        disclaimer.style.display = 'block'
        nickinput.style.display = 'block'
    } else {
        submit.style.display = 'none'
        disclaimer.style.display = 'none'
        nickinput.style.display = 'none'
    }
    save_state()
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
}

function render_list_preheader() {
    var right = document.getElementById('right')
    var div = document.createElement('div')
    div.id = 'preheader'
    div.innerHTML = ListHeader
    var link = document.createElement('a')
    link.classList.add('rules-link')
    link.href = RulesLink
    link.target = '_blank'
    link.innerHTML = 'Regulamin'
    div.appendChild(link)
    right.appendChild(div)
}
render_list_preheader ()

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

function render_up_down_button (x, y) {
    var div = document.createElement('div')
    div.classList.add('nav-container')
    var lp = document.createElement('div')
    lp.innerHTML = y + '.'
    lp.onclick = () => {render_lp_selector(event.target)}
    lp.classList.add('nav-button')
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
    div.appendChild(lp)
    div.appendChild(up)
    div.appendChild(down)
    div.appendChild(exit)
    x.appendChild(div)
}

function render_player (x) {
    var left = document.getElementById('left')
    var player = document.getElementById('player')
    var ytplayer = document.getElementById('ytplayer')
    id = x.value
    var parr = x.parentElement
    //Debug = parent
    var one = Songs[id].link.split('?')[0]
    var split = one.split('track/')
    if (split[1] == undefined) {
        var ytid = Songs[id].link.split('?v=')[1]
        var newSRC = YouTubeSRC[0] + ytid 
        ytplayer.src = newSRC
        left.insertBefore(ytplayer,parr)
        player.style.display = 'none'
        player.src = '0'
        ytplayer.style.display = 'block'
    } else {
        one = SpotifySRC[0] + split[1]
        var newSrc = one + SpotifySRC[1]
        player.src = newSrc
        left.insertBefore(player,parr)
        ytplayer.style.display = 'none'
        ytplayer.src = '0'
        player.style.display = 'block'
    }
}

function render_submit () {
    var right = document.getElementById('right')
    var div = document.createElement('p')
    div.id = 'disclaimer'
    div.innerHTML = Disclaimer
    right.appendChild(div)
    var input = document.createElement('input')
    input.type = 'text'
    input.id = 'nick-input'
    input.placeholder = 'Wpisz swój nick'
    right.appendChild(input)
    var submit = document.createElement('button')
    submit.innerHTML = 'Wyślij'
    submit.id = 'submit'
    submit.onclick = () => {submit_songs()}
    submit.classList.add('submit-button')
    right.appendChild(submit)
}

render_submit ()

function render_switcher () {
    var button = document.createElement('button')
    button.classList.add('switcher')
    button.classList.add('switcher-1')
    button.id = 'switcher'
    SwitcherState = 1
    button.onclick = () => {switcher()}
    mainframe.appendChild(button)
}
render_switcher ()

function render_lp_selector(x) {
    var listLP = document.getElementsByClassName('nav-container')
    var oldLP
    for (let i = 0; i < listLP.length; i++) {
        if (listLP[i].children[0] == x) {
            oldLP = i
        } 
    }
    var oldfield = document.getElementsByClassName('lp-change-input')[0]
    if (oldfield != undefined) {
        oldfield.remove()
    }
    var input = document.createElement('input')
    input.type = 'text'
    input.classList.add('lp-change-input')
    mainframe.appendChild(input)
    input.focus()
    input.onkeydown = x => {
        if (x.key == 'Enter') {
            if (input.value == '') {
                input.remove()
            }
            if ((input.value < 1) || (input.value != Number(input.value) ) ) {
                input.value = ''
                return
            }
            arraymove(Song_List, oldLP, (input.value - 1))
            render_song_list_items()
            input.remove()
        }
        if (x.key == 'Escape') {
            input.remove()
        }
    }
}

function formatter(x,y) {
    V = {}
    if (y == 1) {
        V.old = x
        var val = x.innerHTML.split('<br>')
        var newval = val[0].split('<b>')[1].split('</b>')[0] + ' - ' + val[1]
        V.new = newval
    }
    if (y == 2) {
        V.old = x
        var val = x.split('<br>')
        var newval = val[0] + ' ' + val[1]
        V.new = newval
        V.html = val[0] + '\n' + val[1]
    }
    console.log(V)
}