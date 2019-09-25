class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def update
  end

  def update_friends
    current_user.friends << params[:id].to_i
    current_user.save
    render json: current_user.friends
  end
end
