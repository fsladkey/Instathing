class Api::PhotosController < ApplicationController

  def index
    @photos = Photo
      .order(created_at: :desc)
      .includes(:user, comments: :author)
  end

end
