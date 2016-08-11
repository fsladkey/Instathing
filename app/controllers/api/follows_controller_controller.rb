class Api::FollowsController < ApplicationController

  def create
    @follow = current_user.out_follows.create!(
      followed_user_id: params[:id]
    )
    render json: @follow
  end

  def destroy
    @follow = current_user.out_follows.find_by(
      followed_user_id: params[:id]
    ).destroy
    render json: @follow
  end

end
