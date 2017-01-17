class Job < ActiveRecord::Base
  validates :user_id,
            :description,
            :job_type,
            :session_token,
            presence: true

  validate :has_address_or_gps

  belongs_to :user

  def has_zip_or_gps
    if address.blank? && (lat.blank? || lng.blank?)
      errors.add(:base, "Please provide either gps coords or zipcode")
    end
  end
end
