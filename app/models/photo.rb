class Photo < ActiveRecord::Base
  validates :user, presence: true

  has_attached_file :image, default_url: "corgi.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user
end
