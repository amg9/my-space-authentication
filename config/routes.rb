Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    resources :users, only: [:index, :show, :update] do
      resources :posts
    end
    get 'friends', to: 'users#friends'
    put 'friends/:id', to: 'users#update_friends'
  end

  
  
end
