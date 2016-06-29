class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 3, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :photos

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
