class Api::JobsController < ApplicationController

  def index
    if current_user
      @jobs = Job.all.where(user_id: current_user.id)
    elsif current_worker
      @jobs = Job.all.where(status: 'pending')
    else
      render json: ["Log in to view jobs."]
    end
    render :index
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      render :show
    else
      render json: @job.errors.full_messages, status: 401
    end
  end

  def show
    @job = Job.find_by(id: params[:id])
    if @job
      render :show
    else
      render json: ["The job you seek has not been found."], status: 404
    end
  end

  def update
    # if job_params[:type] == 'ACCEPT'
    #   @job = Job.find_by(job_params[:id])
    #   if @job
    #     @job.update_attributes(status: 'DESIGNATED',
    #                             worker_id: current_worker.id)
    #     render :show
    #   else
    #     render json @job.errors.full_messages, status: 422
    #   end
    # els
    if current_user.nil? || current_user.id != job_params[:user_id].to_i
      render json: ["Permission denied"], status: 404
    else
      @job = Job.find_by(id: params[:id]);
      if @job
        if @job.status != 'PENDING'
          render json: ["A worker has already accepted this job!"], status: 404
        elsif @job.update_attributes(job_params)
          render :show
        else
          render json: @job.errors.full_messages, status: 401
        end
      else
        render json: ["No job record to modify"], status: 422
      end
    end
  end

  def job_params
    params.require(:job).permit(:id,
                                :user_id,
                                :description,
                                :job_type,
                                :address,
                                :duration,
                                :wage,
                                :start_time,
                                :lat,
                                :lng,
                                :cost,
                                :status,
                                :worker_id,
                                :type)
  end
end
