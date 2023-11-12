function add_to_list (x) {
    /*right = document.getElementById('right-list')
    var div = document.createElement('div')
    div.classList.add('song-list-box')
    div.style.width = '100%'
    render_up_down_button(div)
    right.appendChild(div)
    var song = document.createElement('div')
    song.classList.add('song-name')
    song.innerHTML = x.innerHTML
    div.appendChild(song)*/
    //console.log(x.innerHTML)
    //formatter(x,1)
    Song_List.push(x.value)
    render_song_list_items()
    //console.log(Song_List)  
}

function remove_from_list (x) {
    //right = document.getElementById('right-list')
    //console.log(x.innerHTML)
    index = Song_List.indexOf(x.value)
    //console.log(index)
    Song_List.splice(index,1)
    //console.log(Song_List)
    //right.children[index].remove()
    render_song_list_items()
}

function do_search(x) {
    document.getElementById('player').style.display = 'none'
    document.getElementById('ytplayer').style.display = 'none'
    var songs = document.getElementsByClassName('song')
    for (let i = 0; i < songs.length; i++) {
        var phrase_check = songs[i].children[1].value
        var phrase_lower = phrase_check.toLowerCase()
        var phrase_upper = phrase_check.toUpperCase()
        //console.log(phrase_lower)
        if (phrase_lower.includes(x) == 1) {songs[i].style.display = 'block'} 
        else if (phrase_upper.includes(x) == 1) {songs[i].style.display = 'block'} 
        else if (phrase_check.includes(x) == 1) {songs[i].style.display = 'block'} 
        else {songs[i].style.display = 'none'}

    }
    //console.log(songs)
}

function move_song_up(x) {
    get_song_data(x)
    var newindex = S.index - 1
    if (newindex < 0) {
        newindex = 0
    }
    //console.log(Song_List)
    arraymove(Song_List,S.index,newindex)
    //console.log(Song_List)
    //console.log(S)
    //var rightlist = document.getElementById('right-list')
    //rightlist.insertBefore(rightlist.children[S.index],rightlist.children[newindex])
    render_song_list_items()
}

function move_song_down(x) {
    get_song_data(x)
    var newindex = S.index + 1
    if (newindex >= Song_List.length ) {
        newindex = Song_List.length - 1
    }
    arraymove(Song_List,S.index,newindex)
    //var rightlist = document.getElementById('right-list')
    //rightlist.insertBefore(rightlist.children[newindex],rightlist.children[S.index])
    render_song_list_items ()
}

function remove_song(x) {
    get_song_data(x)
    //var rightlist = document.getElementById('right-list')
    Song_List.splice(S.index,1)
    //rightlist.children[S.index].remove()
    var songs = document.getElementsByClassName('song')
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].children[1].value == S.songname) {
            songs[i].classList.remove('song-checked')
            songs[i].classList.add('song-unchecked')
            //console.log('ha!')
        } 
    }
    render_song_list_items()
}

function get_song_data(y) {
    var rightlist = document.getElementById('right-list')
    S = {}
    S.parent = y.parentElement.parentElement
    S.songname = S.parent.children[1].innerHTML
    S.index = Song_List.indexOf(S.songname)

}

function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

function submit_songs () {
    var nick = document.getElementById('nick-input').value 
    //console.log(nick)
    var fe = FormLink.split('&')
    var nicksplit = fe[1].split('=')
    nicksplit[1] = nick
    fe[1] = nicksplit[0] + "=" + nicksplit[1]
    //console.log(fe[1])
    for (let i = 2; i < 22; i++) {
        var en = fe[i].split('=')
        var index = i - 2
        en[1] = Song_List[index]        
        if (en[1] == undefined) {
            en[1] = ''
        }
        fe[i] = en[0] + '=' + en[1]
    }
    //console.log(fe)
    var link = '' 
    for (let i = 0; i < fe.length; i++) {
        link = link + fe[i] + '&'
    }
    link += 'submit=Submit'
    //console.log(link)
    //window.location.replace(link)
    window.open(link, '_blank').focus();
}

function switcher () {
    var switcherr = document.getElementById('switcher')
    var left = document.getElementById('left')
    var right = document.getElementById('right')
    if (SwitcherState == 1) {
        switcherr.classList.remove('switcher-1')
        switcherr.classList.add('switcher-2')
        window.scrollTo(document.body.scrollWidth, 0)
        // left.style.display = 'none'
        // right.style.display = 'block'
        SwitcherState = 2
        localStorage.SwitcherState = SwitcherState
        return
    }
    if (SwitcherState == 2) {
        switcherr.classList.remove('switcher-2')
        switcherr.classList.add('switcher-1')
        window.scrollTo(0,0)
        // left.style.display = 'block'
        // right.style.display = 'none'
        SwitcherState = 1
        localStorage.SwitcherState = SwitcherState
        return
    }
}

function save_state () {
    localStorage.listabdnt = JSON.stringify(Song_List)
}

function load_state() {
    var vals = JSON.parse(localStorage.listabdnt)
    var songs = document.getElementsByClassName('name')
    for (let i = 0; i < vals.length; i++) {
        for (let x = 0; x < songs.length; x++) {
            if (songs[x].value == vals[i]) {
                songs[x].click()
            } 
        }
    }
}