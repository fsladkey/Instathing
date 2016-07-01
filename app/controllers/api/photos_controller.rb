class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.order(created_at: :desc)
  end

end
