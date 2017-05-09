require 'rails_helper'

RSpec.describe User, type: :model do
  #   Validations
  #   Associations
  #   Class Methods
  #   Error Messages

  subject(:user) { User.new(username: 'testo', password: 'yellow', email: 'yel@low.com') }
  subject(:user) { build(:user) }

    describe 'validations' do
      it { should validate_presence_of(:username) }
      it { should validate_presence_of(:email) }
      it { should validate_presence_of(:session_token) }
      it { should validate_uniqueness_of(:username) }
      it { should validate_uniqueness_of(:email) }
      it { should validate_length_of(:username).is_at_least(1) }
      it { should validate_length_of(:password).is_at_least(6) }

      # it 'should validate email is valid' do
      #   # green_capy = Capy.new(name: 'barbara', color: 'green')
      #   # green_capy = FactoryGirl.build(:capy, color: 'green')
      #   bad_email = User.new(username: 'bad_email', password: 'bellll', email: 'dog')
      #   bad_email = FactoryGirl.build(:bad_email)
      #   bad_email.valid?
      #   expect(bad_email.errors[:email]).to eq(['invalid email!'])
      # end
    end
end
