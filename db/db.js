Header = '4. Światowy Top Discorda'
Subheader = 'Na stół i robimy hałas!'
voteMinimum = 5
voteLimit = 20
ListHeader = 'Poniżej znajdują się piosenki, które wybrałeś. <big>Poukładaj je w kolejności od najlepszej do najgorszej</big>.'
Disclaimer = 'Po naciśnięciu przycisku "Wyślij" zostaniesz przeniesiony do ankiety Google Form z wypełnionymi wartościami. Zatwierdź tam swój wybór!'
RulesLink = 'http://tiny.cc/4swiatowytop_zasady'
Source = []

SpotifySRC = ['https://open.spotify.com/embed/track/','?utm_source=generator']
YouTubeSRC = ['https://www.youtube.com/embed/']
FormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeZJ9D3UBYZzvtIa_zoljwKGd2cesPaJ7b2SOJ90mMnbqR-kg/viewform?usp=pp_url&entry.597952825=x&entry.2134193403=x&entry.1798813014=x&entry.778481209=x&entry.2081814324=x&entry.1899426729=x&entry.950001668=x&entry.1164974973=x&entry.25150898=x&entry.1742525142=x&entry.105739541=x&entry.1424125338=x&entry.1073900890=x&entry.1087321442=x&entry.458071784=x&entry.1198005480=x&entry.255734346=x&entry.1435537469=x&entry.1355948934=x&entry.576158523=x&entry.1326309573=x'

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