require 'rails_helper'

RSpec.describe User, type: :model do
  #   Validations
  #   Associations
  #   Class Methods
  #   Error Messages

  subject(:user) { build(:user) }

    describe 'validations' do
      User.create(username: 'testy', password: 'password', email: 'three@test.com')

      it { is_expected.to validate_presence_of(:username) }
      it { should validate_presence_of(:email) }
      it { should validate_uniqueness_of(:username) }
      it { should validate_uniqueness_of(:email) }
      it { should validate_length_of(:password).is_at_least(6) }

      # it { should validate_presence_of(:session_token) }

      let(:bad_email) { build(:user, email: 'dog') }
      context "with invalid email" do
        it "does not create new user" do
          expect(bad_email).to_not be_valid
        end
      end
    end

    describe 'assocations' do
      it { should have_many(:jobs) }
    end
end
