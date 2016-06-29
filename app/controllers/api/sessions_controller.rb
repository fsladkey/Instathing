class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params)
    if @user
      log_in!(@user)
      render "api/users/show"
    else
      render json: {
        base: ["Invalid username/password combination"]
      }
    end
  end

  def destroy
    log_out!
    render json: {}
  end

end
