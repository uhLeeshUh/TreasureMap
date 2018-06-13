Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :articles, only: [:create, :show, :update, :destroy] do
      collection do
        get 'random_articles'
      end
      # resources :images, only: [:create]
    end

    resources :countries, only: [:create, :show, :index] do
      collection do
        get 'top_countries'
      end
      resources :cities, only: [:create]
    end

    resources :cities, only: [:show, :index] do
      collection do
        get 'top_cities'
      end
    end

    resources :pg_search_documents, only: [:create]
  end

end
