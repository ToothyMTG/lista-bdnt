Header = '2. Światowy Top Discorda'
Subheader = 'Make Top, not Kek'
voteMinimum = 5
voteLimit = 20
ListHeader = 'Poniżej znajdują się piosenki, które wybrałeś. <big>Poukładaj je w kolejności od najlepszej do najgorszej</big>.'
Disclaimer = 'Po naciśnięciu przycisku "Wyślij" zostaniesz przeniesiony do ankiety Google Form z wypełnionymi wartościami. Zatwierdź tam swój wybór!'
RulesLink = 'https://ggle.io/2swiatowy_zasady'
Source = []

SpotifySRC = ['https://open.spotify.com/embed/track/','?utm_source=generator']
YouTubeSRC = ['https://www.youtube.com/embed/']
FormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdV6t2t4JEQ_kgQONhzjbDmt8ibCZrGshN7I0HG22eiw9Pp5A/viewform?usp=pp_url&entry.1803573435=x&entry.1457098524=x&entry.564433624=x&entry.1771242493=x&entry.557893853=x&entry.100034855=x&entry.1640127441=x&entry.1490614041=x&entry.2058265623=x&entry.55983597=x&entry.37449334=x&entry.158783345=x&entry.889583144=x&entry.800164321=x&entry.2122526343=x&entry.673354362=x&entry.215783906=x&entry.1473507198=x&entry.2000052853=x&entry.1702868651=x&entry.1479569680=x'

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