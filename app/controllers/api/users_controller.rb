class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
  end

  def destroy
  end

  def user_params
    params.require(:user).permit(:username,
                                  :password,
                                  :email,
                                  :picture_url,
                                  :phone_number,)
  end
end
