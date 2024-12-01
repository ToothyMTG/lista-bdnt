Header = '3. Światowy Top Discorda'
Subheader = 'Make Top Great Again'
voteMinimum = 5
voteLimit = 20
ListHeader = 'Poniżej znajdują się piosenki, które wybrałeś. <big>Poukładaj je w kolejności od najlepszej do najgorszej</big>.'
Disclaimer = 'Po naciśnięciu przycisku "Wyślij" zostaniesz przeniesiony do ankiety Google Form z wypełnionymi wartościami. Zatwierdź tam swój wybór!'
RulesLink = 'http://tiny.cc/3swiatowytop_zasady'
Source = []

SpotifySRC = ['https://open.spotify.com/embed/track/','?utm_source=generator']
YouTubeSRC = ['https://www.youtube.com/embed/']
FormLink = 'https://docs.google.com/forms/d/e/1FAIpQLScDlGITh29rGgawEFz0lTM3-xZQHJqCyLfg8wXiILmJu5YWhQ/viewform?usp=pp_url&entry.854065643=x&entry.1750333552=x&entry.87041947=x&entry.42329286=x&entry.772739498=x&entry.692112867=x&entry.77851150=x&entry.1766658655=x&entry.462649729=x&entry.2069382705=x&entry.1036102601=x&entry.2041859461=x&entry.1098390096=x&entry.621786291=x&entry.1816600782=x&entry.1766236398=x&entry.212828226=x&entry.956730367=x&entry.70382464=x&entry.1533858805=x&entry.363288178=x'

Songs = []
for (let i = 0; i < SongsSRC.length; i++) {
    Songs[i] = {}
    var base = SongsSRC[i].split('|')
    Songs[i].artist = base[0] 
    Songs[i].name = base[1] 
    Songs[i].link = base[2]
    Songs[i].lastpos = base[3]
    Songs[i].trendpos = base[4]
}