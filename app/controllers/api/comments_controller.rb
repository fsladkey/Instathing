class Api::CommentsController < ApplicationController

  def create
    @comment = current_user.comments.create!(comment_params)
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:photo_id, :body)
  end

end
