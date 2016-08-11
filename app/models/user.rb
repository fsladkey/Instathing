class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 3, allow_nil: true }

  has_attached_file :avatar, default_url: "corgi_:style.jpg", :styles => {
      :thumb => "40x40#"
  }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :photos, -> { order(created_at: :desc) }
  has_many :comments, foreign_key: :author_id

  has_many :out_follows, foreign_key: :follower_id, class_name: "Follow"
  has_many :in_follows, foreign_key: :followed_user_id, class_name: "Follow"

  has_many :followed_users, through: :out_follows, source: :followed_user
  has_many :in_follows, through: :in_follows, source: :follower_id

  def self.find_by_credentials(user_params)
    user = User.find_by(username: user_params[:username])
    user && user.valid_password?(user_params[:password]) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_digest
    BCrypt::Password.new(super)
  end

  def valid_password?(password)
    password_digest.is_password?(password)
  end

  def reset_session_token!
    update!(session_token: SecureRandom::urlsafe_base64)
    session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
