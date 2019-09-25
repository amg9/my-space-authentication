class Api::PostsController < ApplicationController
  before_action :set_user
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: @user.posts.all
  end

  def show
    render json: @post
  end

  def create 
    post = current_user.posts.new(post_params)

    if post.save
      render json: post
    else
      render json: department.errors, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
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

    def set_post
      @post = Post.find(params[:id])
    end
end
