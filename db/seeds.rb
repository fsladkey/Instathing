User.destroy_all

fred = User.create!(username: "fredsladkey", password: "password", bio: "Just a guy, cloning instagram.")
joey = User.create!(username: "joeyprimero", password: "password", bio: "I'm not even on this site of my own free will. Also I'm a mermaid or something.")
ulysses = User.create!(username: "ulysses", password: "password", bio: "Fat single, and ready for a pringle.")
bailey = User.create!(username: "bailey", password: "password", bio: "DALE! Where my purebred bitches at?")
chester = User.create!(username: "chester", password: "password", bio: "Heaven knows I'm miserable now.")
pepper = User.create!(username: "pepper", password: "password", bio: "I'm spicing up this neighborhood.")

Photo.destroy_all

fred.photos.create!(
  caption: "Bonaroo!",
  image: open("http://scontent-ord1-1.cdninstagram.com/t51.2885-15/e15/1515403_253427001482810_542743599_n.jpg?ig_cache_key=NjE2NzcyMzIyNzY0MDUwMDY1.2")
)

fred.photos.create!(
  caption: "Sunglasses are great. #sunglasses",
  image: open("http://scontent-ord1-1.cdninstagram.com/t51.2885-15/e15/11235954_1084634704883270_2068790971_n.jpg?ig_cache_key=NDU0MzA3NjA5NDE4NDUxOTg5.2")
)

fred.photos.create!(
  caption: "Please pay attention, this is a serious discussion. #chester",
  image: open("http://scontent-ord1-1.cdninstagram.com/t51.2885-15/e15/11257816_386134238262741_446987459_n.jpg?ig_cache_key=NDU0NjQ3MTA1NDI3MTMxODg5.2")
)

fred.photos.create!(
  caption: "#mustache",
  image: open("http://scontent-ord1-1.cdninstagram.com/t51.2885-15/e15/11352409_868864856512130_1507297004_n.jpg?ig_cache_key=NDQ4ODI4MzI0MzEwMjA3OTcx.2")
)

fred.photos.create!(
caption: "#ratchet",
  image: open("http://scontent-ord1-1.cdninstagram.com/t51.2885-15/e15/11267256_446881912138948_504826147_n.jpg?ig_cache_key=NTQ4NzI2NTg2ODg1ODUyMjE2.2")
)

ulysses.photos.create!(
  image: open("http://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12338477_998245480236888_518154446_n.jpg?ig_cache_key=MTE0ODI4NjYwMTcwNzk2NTgyNw%3D%3D.2")
)

ulysses.photos.create!(
  image: open("http://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/11850215_377344749128936_441929535_n.jpg?ig_cache_key=MTA1MTExMzIyMTc1ODcwMTQyOA%3D%3D.2")
)

ulysses.photos.create!(
  image: open("http://scontent-iad3-1.cdninstagram.com/t51.2885-15/e15/11201682_816768535045754_1657836999_n.jpg?ig_cache_key=OTc1NzMyNDcwMTkyNTg5ODc1.2")
)

ulysses.photos.create!(
  image: open("http://scontent-iad3-1.cdninstagram.com/t51.2885-15/e15/10853043_1525841611007711_1130081286_n.jpg?ig_cache_key=ODgzNTM0MjM3NzY5NDUzNTQx.2")
)

ulysses.photos.create!(
  image: open("http://scontent-iad3-1.cdninstagram.com/t51.2885-15/e15/10748428_714577598633981_783541982_n.jpg?ig_cache_key=ODY1MjQ5NzQ1MjkyMjgzNzU1.2")
)

joey.photos.create!(
  image: open("http://scontent-lga3-1.cdninstagram.com/t51.2885-15/s320x320/e35/13320244_1751108521831835_1236396872_n.jpg?ig_cache_key=MTI2NDAxNzE5NjkzODYxMjgwMw%3D%3D.2")
)

joey.photos.create!(
  image: open("http://scontent-ord1-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/13561804_1096418623750958_1132310066_n.jpg?ig_cache_key=MTI4MTQyNzUwODY3NTM3MjM1OQ%3D%3D.2")
)

bailey.photos.create!(
  image: open("http://scontent-lga3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/13259548_289634291370219_2101930375_n.jpg?ig_cache_key=MTI2MjIzODk1MzIzOTY2Mjk3Nw%3D%3D.2")
)

bailey.photos.create!(
  image: open("http://scontent-iad3-1.cdninstagram.com/t51.2885-15/e15/11078940_349337641941244_1152420613_n.jpg?ig_cache_key=OTY0MDUwMzYyNjIxNTQ1Nzk2.2")
)

bailey.photos.create!(
image: open("http://scontent-iad3-1.cdninstagram.com/t51.2885-15/e15/10570118_753561924707813_1808601243_n.jpg?ig_cache_key=Nzc2MTI1NTI0NTI4NjQ3NzAx.2")
)

bailey.photos.create!(
  image: open("http://scontent-iad3-1.cdninstagram.com/t51.2885-15/e15/11005003_746932308761702_1755526329_n.jpg?ig_cache_key=OTM5NDc4NzUzNTYyOTA1NjUx.2")
)

bailey.photos.create!(
  image: open("http://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/11386446_1611555925783148_1122403549_n.jpg?ig_cache_key=MTAyMjA5MDAzODY3NDI0NzQzNw%3D%3D.2")
)

chester1 = chester.photos.create!(
  caption: "Playing some sad songs.",
  image: open("http://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12976535_826825864090704_1034327565_n.jpg?ig_cache_key=MTIzMjIxODU1OTczMjY5OTMyNg%3D%3D.2")
)

chester2 = chester.photos.create!(
  caption: "Taking care of some jerk.",
  image: open("http://scontent-ord1-1.cdninstagram.com/t51.2885-15/e35/12677360_1076168579115999_655778755_n.jpg?ig_cache_key=MTIyNjQyOTM1ODY2NzkxMTU1MA%3D%3D.2")
)

chester3 = chester.photos.create!(
  image: open("http://scontent-ord1-1.cdninstagram.com/t51.2885-15/e35/12424436_1283694711671349_603015231_n.jpg?ig_cache_key=MTIyMjc5NDE4MDk4NDc1NDkxMA%3D%3D.2")
)

chester4 = chester.photos.create!(
  caption: "I'm pretty into #tarot at the moment.",
  image: open("http://scontent-ord1-1.cdninstagram.com/t51.2885-15/e35/1168405_1031805170196187_1331406125_n.jpg?ig_cache_key=MTIwNjEwNzY3NTA5NjY5OTE0Mw%3D%3D.2")
)

pep1 = pepper.photos.create!(
  image: open("http://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12826279_111679212561002_1102993857_n.jpg?ig_cache_key=MTIwNTE3NDE5MjE0OTAyNTA2Mw%3D%3D.2")
)

Photo.all.each do |photo|
  photo.update(created_at: photo.created_at - rand(99).hours)
end

Comment.destroy_all

photo_ids = Photo.all.pluck(:id)
users = User.all
100.times do
  users.sample.comments.create!(
    photo_id: photo_ids.sample,
    body: [
      Faker::ChuckNorris.fact,
      Faker::StarWars.quote
    ].sample
  )
end
