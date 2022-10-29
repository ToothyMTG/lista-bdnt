Header = 'Byle do Nowego PL21'
Subheader = 'Make Top, not Kek'
voteLimit = 20
ListHeader = 'Poniżej znajdują się piosenki, które wybrałeś. Poukładaj je w kolejności od najlepszej do najgorszej. Będzie to miało znaczenie. Ale nie musi.'
Disclaimer = 'Po naciśnięciu przycisku "Wyślij" zostaniesz przeniesiony do ankiety Google Form z wypełnionymi wartościami. Zatwierdź tam swój wybór!'
RulesLink = 'https://ggle.io/BdnPL21_zasady'
Source = [
    'De Staat,Witch Doctor,https://open.spotify.com/track/3rSYcaSCxkKU4SpEVXQgFe?si=333c5bb91bae4d18',
    'De Staat,Danger,https://open.spotify.com/track/4ndEVf5VBLF6R50eitmnNz?si=331a1089d32d45ab',
    'De Staat,Dąnger,'
]

SpotifySRC = ['https://open.spotify.com/embed/track/','?utm_source=generator']
FormLink = 'https://docs.google.com/forms/d/e/1FAIpQLScNlHd0If-hMJce5DRDqvCAnKm5PyQ4-otEPMJjgAcagXPQQA/viewform?usp=pp_url&entry.1106434568=x&entry.1860024688=x&entry.948511729=x&entry.1138715441=x&entry.413752448=x&entry.1675197954=x&entry.2036348292=x&entry.113315277=x&entry.1191400367=x&entry.1773724668=x&entry.1975955176=x'



Songs = []
for (let i = 0; i < SongsSRC.length; i++) {
    Songs[i] = {}
    var base = SongsSRC[i].split('|')
    Songs[i].artist = base[0] 
    Songs[i].name = base[1] 
    Songs[i].link = base[2] 
}