class Job < ActiveRecord::Base

  JOB_TYPES = ["art",
               "baby-sitting",
               "cleaning",
               "computer work",
               "gardening",
               "kitchen work",
               "lawn-mowing",
               "music",
               "tutoring",
               "yard-work"]

  validates :user_id,
            :description,
            :job_type,
            :wage,
            :start_time,
            :cost, presence: true
  validates :job_type, inclusion: { in: JOB_TYPES }
  validate :has_address_or_gps

  belongs_to :user

  def has_address_or_gps
    if address.blank? && (lat.blank? || lng.blank?)
      errors.add(:base, "Please provide either gps coords or an address for this job.")
    end
  end
end
