class Follow < ActiveRecord::Base
  validates :follower, :followed_user, presence: :true
  validates :follower_id, uniqueness: { scope: :followed_user_id }

  belongs_to(
    :follower,
    class_name: "User",
    inverse_of: :out_follows
  )

  belongs_to(
    :followed_user,
    class_name: "User",
    inverse_of: :in_follows
  )
end
