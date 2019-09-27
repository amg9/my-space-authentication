class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: current_user.errors, status: 422
    end
  end

  def friends
    render json: User.friended(current_user.friends)
  end

  def add_friend
    current_user.friends << params[:id].to_i
    current_user.save
    render json: current_user.friends
  end

  def remove_friend
    current_user.friends.delete(params[:id].to_i)
    current_user.save
  end

  private
    def user_params
      params.require(:user).permit(:email, :name, :nickname, :image)
    end
end
