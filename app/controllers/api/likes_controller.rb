class Api::LikesController < ApplicationController

  def create
    @like = current_user.likes.create!(
      photo_id: params[:id]
    )
    render json: @like
  end

  def destroy
    like = current_user.likes.find_by(
      followed_user_id: params[:id]
    ).destroy
    render json: @like
  end

end
