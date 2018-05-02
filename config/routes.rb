Rails.application.routes.draw do
  root to: 'pages#home'

  get '/pages/dispo', to: 'pages#dispo', as: 'dispo'
  get '/pages/contact', to: 'pages#contact', as: 'contact'
  get 'messages', to: 'messages#new'
  post 'messages', to: 'messages#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
