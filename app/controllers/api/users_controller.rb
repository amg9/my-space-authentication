class Api::UsersController < ApplicationController
  def index
  end

  def show
    render json: User.find(params[:id])
  end

  def update
  end
end
