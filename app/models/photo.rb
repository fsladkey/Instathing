class Photo < ActiveRecord::Base
  validates :user, presence: true
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :image, default_url: "corgi.jpg"

  belongs_to :user
end
