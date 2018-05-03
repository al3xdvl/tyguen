class MessageMailer < ApplicationMailer
# require mailgun

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.contact.subject
  #
  default to: 'tyguen@gmail.com'

  def contact(message)
    @body = message.body
    # mail subject: message.subject, from: message.email
    # mg_client = Mailgun::Client.new ENV['MAILGUN_API_KEY']
    # message_params = {:from => message.email,
    #                   :to => ENV['email'],
    #                   :subject => 'Contact depuis tyguen.fr',
    #                   :text => message.body}
    # mg_client.send_message ENV['sandboxe8685e7a7abd42538c63bf2364ba76d9.mailgun.org'], message_params

    mail to: "tyguen@gmail.com", from: message.email
  end
end
