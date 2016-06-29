User.destroy_all

fred = User.create!(username: "fredsladkey", password: "password")
joey = User.create!(username: "joeyprimero", password: "password")
ulysses = User.create!(username: "ulysses", password: "password")
bailey = User.create!(username: "bailey", password: "password")
chester = User.create!(username: "chester", password: "password")
pepper = User.create!(username: "pepper", password: "password")

Photo.destroy_all

ulysses.photos.create!(
  image: open("https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12338477_998245480236888_518154446_n.jpg?ig_cache_key=MTE0ODI4NjYwMTcwNzk2NTgyNw%3D%3D.2"),
)

joey.photos.create!(
  image: open("https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s320x320/e35/13320244_1751108521831835_1236396872_n.jpg?ig_cache_key=MTI2NDAxNzE5NjkzODYxMjgwMw%3D%3D.2"),
)

bailey.photos.create!(
  image: open("https://scontent-lga3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/13259548_289634291370219_2101930375_n.jpg?ig_cache_key=MTI2MjIzODk1MzIzOTY2Mjk3Nw%3D%3D.2"),
)

chester.photos.create!(
  image: open("https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12976535_826825864090704_1034327565_n.jpg?ig_cache_key=MTIzMjIxODU1OTczMjY5OTMyNg%3D%3D.2"),
)

pepper.photos.create!(
  image: open("https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12826279_111679212561002_1102993857_n.jpg?ig_cache_key=MTIwNTE3NDE5MjE0OTAyNTA2Mw%3D%3D.2"),
)
