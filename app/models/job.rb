class Job < ActiveRecord::Base
  validates :user_id,
            :description,
            :job_type,
            :wage,
            :start_time,
            :cost, presence: true

  validate :has_address_or_gps

  belongs_to :user

  def has_address_or_gps
    if address.blank? && (lat.blank? || lng.blank?)
      errors.add(:base, "Please provide either gps coords or an address for this job.")
    end
  end
end
