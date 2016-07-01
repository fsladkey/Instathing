json.id photo.id
json.image_url asset_path(photo.image.url)
json.user do
  json.id photo.user_id
  json.username photo.user.username
  json.thumbnail asset_path(photo.user.avatar.url(:thumb))
end
