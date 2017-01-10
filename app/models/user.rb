class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, null: false
  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_token

  attr_reader :password

  def self.check_cred(username, password)
    u = User.find_by(username: username)
    u.is_password?(password) ? u : nil
  end

  def password=(word)
    @password = word
    self.password_digest = BCrypt::Password.create(word)
    self.save
  end

  def is_password?(word)
    BCrypt::Password.new(self.pass_hash).is_password?(word)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(128)
    self.save
    self.session_token
  end

  private
    def ensure_token
      self.session_token ||= SecureRandom.urlsafe_base64(128)
    end
end
