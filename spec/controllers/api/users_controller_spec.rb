require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

  describe 'POST #create' do
    context 'with valid params' do
      before(:each) do
        post :create, user: {
          username: 'superman',
          password: 'louis_lane',
          email: 'super@man.com',
        },
        format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'creates the user' do
        expect(User.exists?).to be true
      end
    end
  end

  describe 'PATCH #update' do
    let! (:user) { create(:user) }
    before(:each) do
      patch :update, { email: 'different@email.com', format: :json }
    end

    it { should render_template(:show) }
    it { should respond_with(200) }
    it 'should update the email address' do
      expect user.email.to_not eq('test@email.com')
    end
  end
  #
  #   context 'with invalid params' do
  #     before(:each) do
  #       post :create, bench: { description: 'ugly' }, format: :json
  #     end
  #
  #     it { should respond_with(422) }
  #     it 'does not create the bench' do
  #       expect(Bench.exists?).to be false
  #     end
  #   end
  # end
  #
  # describe 'GET #index' do
  #   render_views
  #   # Without the above directive, response.body would only be an empty string.
  #
  #   let!(:bench_1) { create(:bench)}
  #   let!(:bench_2) { create(:bench, lat: 50, lng: 250) }
  #   context 'when there are no bounds or seating ranges' do
  #     before(:each) do
  #       get :index, { format: :json }
  #     end
  #
  #     it { should respond_with(200) }
  #     it { should render_template(:index) }
  #     it 'renders all existing benches' do
  #       rendered_response = JSON.parse(response.body)
  #       expect(rendered_response.length).to eq(2)
  #     end
  #   end
  # end
end
