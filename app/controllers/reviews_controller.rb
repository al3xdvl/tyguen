class ReviewsController < ApplicationController

  def index
    @reviews = Review.page(params[:page]).per(10).order("created_at DESC")
    @review = Review.new

  end
  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      redirect_to reviews_path
    else
      render :new
    end
  end


  private

  def review_params
    params.require(:review).permit(:content, :name, :date, :location)
  end
end
