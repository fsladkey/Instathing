Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resources :users, only: [:show], param: :username
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :update, :index, :destroy]
  end

    get "/*path", to: "static_pages#root"
end
