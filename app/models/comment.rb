class Comment < ActiveRecord::Base
  validates :photo_id, :author_id, :body, presence: true

  belongs_to :photo
  belongs_to :author, class_name: "User", foreign_key: :author_id
end
