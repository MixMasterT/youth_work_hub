class Api::WorkersController < ApplicationController
  def create
    @worker = Worker.new(worker_params)
    if @worker.save
      login!(@worker)
      render :show
    else
      render json: @worker.errors.full_messages, status: 401
    end
  end

  def index
    @workers = Worker.all
    render :index
  end

  def update
    if (current_user.nil? || current_user.id != user_params[:id].to_i)
      render json: ["Permission denied"], status: 404
    else
      @worker = current_user;
      if @worker.update_attributes(worker_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 401
      end
    end
  end

  def destroy
  end

  def worker_params
    params.require(:worker).permit(:id,
                                    :zip_code,
                                    :lat,
                                    :lng,
                                    :phone_number,
                                    :bio,
                                    :birth_date,
                                    :lat,
                                    :lng,
                                    :min_wage,
                                    :username,
                                    :password,
                                    :email,
                                    :picture_url)
  end
end
