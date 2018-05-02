class MessageMailer < ApplicationMailer
require mailgun

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.contact.subject
  #
  def contact(message)
    @body = message.body
    mg_client = Mailgun::Client.new ENV['mailgun_api_key']
    message_params = {:from => message.email,
                      :to => ENV['email'],
                      :subject => 'Contact Form',
                      :text => message.body}
    mg_client.send_message ENV['sandboxe8685e7a7abd42538c63bf2364ba76d9.mailgun.org'], message_params

    mail to: "tyguen@gmail.com", from: message.email
  end
end
