require 'rails_helper'

describe User, type: :model do
#   Validations
#   Associations
#   Class Methods
#   Error Messages

subject(:test_user) { Capy.new(name: 'testo', color: 'yellow') }
subject(:test_user) { FactoryGirl.build(:capy) }

describe 'validations' do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:color) }
  it { should validate_uniqueness_of(:name) }

  it 'should validate color is not green' do
    # green_capy = Capy.new(name: 'barbara', color: 'green')
    # green_capy = FactoryGirl.build(:capy, color: 'green')
    green_capy = FactoryGirl.build(:green_capy)
    green_capy.valid?
    expect(green_capy.errors[:color]).to eq(['cannot be green!!'])
  end
end
end
