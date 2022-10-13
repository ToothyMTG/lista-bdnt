function add_to_list (x) {
    right = document.getElementById('right-list')
    var div = document.createElement('div')
    div.classList.add('song-list-box')
    div.style.width = '100%'
    render_up_down_button(div)
    right.appendChild(div)
    var song = document.createElement('div')
    song.classList.add('song-name')
    song.innerHTML = x.innerHTML
    div.appendChild(song)
    //console.log(x.innerHTML)
    Song_List.push(x.innerHTML)
    //console.log(Song_List)  
}

function remove_from_list (x) {
    right = document.getElementById('right-list')
    //console.log(x.innerHTML)
    index = Song_List.indexOf(x.innerHTML)
    //console.log(index)
    Song_List.splice(index,1)
    //console.log(Song_List)
    right.children[index].remove()
}

function do_search(x) {
    var songs = document.getElementsByClassName('song')
    for (let i = 0; i < songs.length; i++) {
        var phrase_check = songs[i].children[1].innerHTML
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
    var rightlist = document.getElementById('right-list')
    rightlist.insertBefore(rightlist.children[S.index],rightlist.children[newindex])
}

function move_song_down(x) {
    get_song_data(x)
    var newindex = S.index + 1
    if (newindex >= Song_List.length ) {
        newindex = Song_List.length - 1
    }
    arraymove(Song_List,S.index,newindex)
    var rightlist = document.getElementById('right-list')
    rightlist.insertBefore(rightlist.children[newindex],rightlist.children[S.index])
}

function remove_song(x) {
    get_song_data(x)
    var rightlist = document.getElementById('right-list')
    Song_List.splice(S.index,1)
    rightlist.children[S.index].remove()
    var songs = document.getElementsByClassName('song')
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].innerHTML.includes(S.songname)) {
            songs[i].classList.remove('song-checked')
            songs[i].classList.add('song-unchecked')
            //console.log('ha!')
        } 
    }

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