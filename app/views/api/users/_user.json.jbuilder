json.extract! user, :id, :username, :bio
json.avatar_url asset_path(user.avatar.url)
json.photos user.photos.order(created_at: :desc) do |photo|
  json.partial! "api/photos/photo.json.jbuilder", photo: photo
end
