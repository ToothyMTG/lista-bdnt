Header = 'Byle do Nowego PL21'
Subheader = 'Make Top, not Kek'
voteLimit = 20
ListHeader = 'Poniżej znajdują się piosenki, które wybrałeś. Poukładaj je w kolejności od najlepszej do najgorszej.'
Disclaimer = 'Po naciśnięciu przycisku "Wyślij" zostaniesz przeniesiony do ankiety Google Form z wypełnionymi wartościami. Zatwierdź tam swój wybór!'
RulesLink = 'https://ggle.io/BdnPL21_zasady'
Source = [
    'De Staat,Witch Doctor,https://open.spotify.com/track/3rSYcaSCxkKU4SpEVXQgFe?si=333c5bb91bae4d18',
    'De Staat,Danger,https://open.spotify.com/track/4ndEVf5VBLF6R50eitmnNz?si=331a1089d32d45ab',
    'De Staat,Dąnger,'
]

SpotifySRC = ['https://open.spotify.com/embed/track/','?utm_source=generator']
//FormLink = 'https://docs.google.com/forms/d/e/1FAIpQLScNlHd0If-hMJce5DRDqvCAnKm5PyQ4-otEPMJjgAcagXPQQA/viewform?usp=pp_url&entry.1106434568=x&entry.1860024688=x&entry.948511729=x&entry.1138715441=x&entry.413752448=x&entry.1675197954=x&entry.2036348292=x&entry.113315277=x&entry.1191400367=x&entry.1773724668=x&entry.1975955176=x'
FormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdPKWly9sgZzD0_MKypaMu0zeKEnCbWslDgrbWsqxHkVpfH0g/viewform?usp=pp_url&entry.1803573435=x&entry.1457098524=x&entry.564433624=x&entry.1771242493=x&entry.557893853=x&entry.100034855=x&entry.1640127441=x&entry.1490614041=x&entry.2058265623=x&entry.55983597=x&entry.37449334=x&entry.158783345=x&entry.889583144=x&entry.800164321=x&entry.2122526343=x&entry.673354362=x&entry.215783906=x&entry.1473507198=x&entry.2000052853=x&entry.1702868651=x&entry.1479569680=x'


Songs = []
for (let i = 0; i < SongsSRC.length; i++) {
    Songs[i] = {}
    var base = SongsSRC[i].split('|')
    Songs[i].artist = base[0] 
    Songs[i].name = base[1] 
    Songs[i].link = base[2] 
}