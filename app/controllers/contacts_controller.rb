class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Merci pour votre message. Nous vous contacterons dès que possible !'
      redirect_to gite_path
    else
      flash.now[:error] = "Votre message n'a pas pu être envoyé."
      render :new
    end
  end
end
