class Api::PostsController < ApplicationController
  before_action :set_user

  def index
    render json: @user.posts.all
  end

  def create 
    post = current_user.posts.new(post_params)

    if post.save
      render json: post
    else
      render json: department.errors, status: 422
    end
  end

  private
    def post_params
      params.require(:post).permit(:body)
    end

    def set_user
      @user = User.find(params[:user_id])
    end
end
