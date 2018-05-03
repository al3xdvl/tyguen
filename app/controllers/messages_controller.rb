class MessagesController < ApplicationController
  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.valid?
      MessageMailer.contact(@message).deliver
      redirect_to :root, notice: "Nous avons bien reçu votre message. Nous y répondrons dès que possible."
    else
      render :new
    end
  end

private
  def message_params
    params.require(:message).permit(:name, :email, :phone_number, :address, :dates, :body)
  end

end
