class Api::ReviewsController < ApplicationController

  def index
    worker = Worker.find_by(id: params[:worker_id])
    @reviews = worker.reviews
    render :index
  end

  def create
    if current_user.id != review_params[:user_id].to_i
      render json: ["Unauthorized!"]
    else
      @review = Review.new(review_params)
      if @review.save
        render :show
      else
        render json: @review.errors.full_messages, status: 401
      end
    end
  end

  def update
    job = Job.find_by(id: params[:job_id])
    if job
      job.status = review_params[:job_status];
      @review = job.review
      if @review.update_attributes(body: review_params[:body],
                                    rating: review_params[:rating])
        render :show
      else
        render json: @review.errors.full_messages, status: 401
      end
    else
      render json: ["Job not found"], status: 404
    end
  end

  def destroy
  end

  private
    def review_params
      params.require(:review).permit(:user_id,
                                     :job_id,
                                     :rating,
                                     :body,
                                     :id,
                                     :job_status)
    end

end