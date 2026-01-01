ResultsHeader = 'Lista BDNT - Wyniki'
YearAvail = ["0.Edycja","1. Edycja","2. Edycja","3. Edycja","4. Edycja"]
var mainDiv = document.getElementById('maindiv')

window.onload = function() {
    render_res_header()
    render_year_div()
    render_result_list()
    load_results_year(4)
}

function render_res_header() {
    var header = document.getElementById('header')
    header.innerHTML = ''
    var h1 = document.createElement('h1')
    h1.innerHTML = ResultsHeader
    header.appendChild(h1)
}

function render_year_div () {
    var yearDiv = document.createElement('div')
    yearDiv.id = 'year-div'
    for (let i = 0; i < YearAvail.length; i++) {
        var yearBtn = document.createElement('button')
        yearBtn.classList.add('year-btn')
        yearBtn.innerHTML = YearAvail[i]
        yearBtn.onclick = function() {
            load_results_year(i+1)
        }
        yearDiv.appendChild(yearBtn)
    }
    mainDiv.appendChild(yearDiv)
}

function render_result_list() {
    var listbox = document.createElement('div')
    listbox.id = 'result-listbox'
    mainDiv.appendChild(listbox)
}

function load_results_year(year) {
    var listbox = document.getElementById('result-listbox')
    listbox.innerHTML = ''
    var res = Results[year - 1]
    for (let i = 0; i < res.length; i++) {
        var songdiv = document.createElement('div')
        songdiv.classList.add('result-songdiv')
        var pos = document.createElement('div')
        pos.classList.add('result-pos')
        pos.innerHTML = (i + 1) + '.'
        var name = document.createElement('div')
        name.classList.add('result-song-name')
        name.innerHTML = res[i][0]
        var lastposdiv = document.createElement('div')
        lastposdiv.classList.add('result-lastpos')
        var lastpos
        if (res[i][1] == 'N') {
            lastpos = "NOWOŚĆ"
            lastposdiv.classList.add('result-trend-new')
        } else {
            lastpos = "Ostatnia pozycja: " + res[i][1]
        }
        lastposdiv.innerHTML = lastpos 
        var trendposdiv = document.createElement('div')
        trendposdiv.classList.add('result-trendpos')
        var trendpos
        if (res[i][2] == '0') {trendpos = 'BZ'}
        if (parseInt(res[i][2]) > 0) {trendpos = '+' + res[i][2]}
        if (parseInt(res[i][2]) < 0) {trendpos = res[i][2]}
        trendposdiv.innerHTML = ' (' + trendpos + ')'
        if (res[i][2] == 'N') {trendposdiv.innerHTML = ''}
        songdiv.appendChild(pos)
        songdiv.appendChild(name)
        songdiv.appendChild(lastposdiv)
        songdiv.appendChild(trendposdiv)
        listbox.appendChild(songdiv)
    }
}