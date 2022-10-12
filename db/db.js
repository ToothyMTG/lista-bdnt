Source = [
    'De Staat,Witch Doctor,https://open.spotify.com/track/3rSYcaSCxkKU4SpEVXQgFe?si=333c5bb91bae4d18',
    'De Staat,Danger,https://open.spotify.com/track/4ndEVf5VBLF6R50eitmnNz?si=331a1089d32d45ab',
    'De Staat,Dąnger,https://open.spotify.com/track/4ndEVf5VBLF6R50eitmnNz?si=331a1089d32d45ab'
]

Header = 'Top Discorda 2137'
Subheader = 'Make Top, not Kek'


Songs = []
for (let i = 0; i < Source.length; i++) {
    Songs[i] = {}
    var base = Source[i].split(',')
    Songs[i].artist = base[0] 
    Songs[i].name = base[1] 
    Songs[i].link = base[2] 
}