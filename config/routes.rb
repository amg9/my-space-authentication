Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    resources :users, only: [:index, :show, :update] do
      resources :posts
    end
    get 'friends', to: 'users#friends'
    put 'add_friend/:id', to: 'users#add_friend'
    put 'remove_friend/:id', to: 'users#remove_friend'
  end
  
end
