class Message
  include ActiveModel::Model
  attr_accessor :name, :email, :phone_number, :address, :dates, :body
  validates :name, :email, :body, presence: true
end
