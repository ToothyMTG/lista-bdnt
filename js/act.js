function add_to_list (x) {
    right = document.getElementById('right-list')
    var div = document.createElement('div')
    div.style.width = '100%'
    div.innerHTML = x.innerHTML
    render_up_down_button(div)
    right.appendChild(div)
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