require 'rails_helper'

RSpec.describe User, type: :model do
  #   Validations
  #   Associations
  #   Class Methods
  #   Error Messages

  subject(:user) { User.new(username: 'testo', password: 'yellow', email: 'yel@low.com') }
  subject(:user) { build(:user) }

  subject(:user_number_two) { User.new(username: 'testo', password: '222222', email: 'user@two.com')}
  subject(:user_number_two) { build(:user) }
    describe 'validations' do
      User.create(username: 'testy', password: 'password', email: 'three@test.com')

      it { is_expected.to validate_presence_of(:username) }
      it { should validate_presence_of(:email) }
      # it { should validate_presence_of(:session_token) }
      it { should validate_uniqueness_of(:username) }
      it { should validate_uniqueness_of(:email) }
      it { should validate_length_of(:password).is_at_least(6) }

      let(:bad_email) { build(:user, email: 'dog') }
      context "with invalid email" do
        it "does not create new user" do
          expect(bad_email).to_not be_valid
        end
      end
    end
end
