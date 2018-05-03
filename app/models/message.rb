class Message
  include ActiveModel::Model
  attr_accessor :name, :email, :phone_number, :address, :dates, :body
  validates :name, :email, :body, presence: true
  validates :email, format: { with: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i,
    message: "Ce n'est pas un adresse courriel valide." }
end
