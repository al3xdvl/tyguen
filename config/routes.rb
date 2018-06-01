Rails.application.routes.draw do
  root to: 'pages#home'

  get '/pages/dispo', to: 'pages#dispo', as: 'dispo'
  get '/pages/tarifs', to: 'pages#tarifs', as: 'tarifs'
  get '/pages/tarifscs', to: 'pages#tarifscs', as: 'tarifscs'
  get '/pages/charges', to: 'pages#charges', as: 'charges'
  get '/pages/gite', to: 'pages#gite', as: 'gite'
  get '/pages/chambre', to: 'pages#chambre', as: 'chambre'
  get '/pages/salon', to: 'pages#salon', as: 'salon'
  get '/pages/sdb', to: 'pages#sdb', as: 'sdb'
  get '/pages/mezzanine', to: 'pages#mezzanine', as: 'mezzanine'
  get 'contact', to: 'messages#new', as: 'new_message'
  post 'contact', to: 'messages#create', as: 'create_message'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
