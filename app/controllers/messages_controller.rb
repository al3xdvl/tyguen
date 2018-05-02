class MessagesController < ApplicationController
  def new
    @message = Message.new
  end

  def create
    @message = Message.new
    if @message.valid?
      MessageMailer.contact(@message).deliver_now
      redirect_to messages_new_url, notice: "Nous avons bien reçu votre message. Nous y répondrons dès que possible."
    else
      redirect_to :root
    end
  end

private
  def message_params
    params.require(:message).permit(:name, :email, :phone_number, :address, :dates, :body)
  end

end
