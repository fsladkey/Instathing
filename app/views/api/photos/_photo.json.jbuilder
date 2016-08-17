json.id photo.id
json.created_at photo.created_at
json.image_url asset_path(photo.image.url)
json.liked !!current_user.likes.find {| l| l.photo_id = photo.id }

json.user do
  json.id photo.user_id
  json.username photo.user.username
  json.thumbnail asset_path(photo.user.avatar.url(:thumb))
end

json.comments photo.comments do |comment|
  json.partial! "api/comments/comment.json.jbuilder", comment: comment
end
