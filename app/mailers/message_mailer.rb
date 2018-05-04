class MessageMailer < ApplicationMailer
require "mailgun"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.contact.subject
  #
  default to: 'tyguen@gmail.com'

  def contact(message)
    @body = message.body
    # mail subject: message.subject, from: message.email
    mg_client = Mailgun::Client.new ENV['MAILGUN_API_KEY']
    message_params = {:from => message.email,
                      :to => ENV['TYGUEN_EMAIL_ADDRESS'],
                      :text => message.body}
    mg_client.send_message ENV['MAIGUN_DOMAIN'], message_params

    mail to: "tyguen@gmail.com", from: message.email
  end
end
