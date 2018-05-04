ActionMailer::Base.smtp_settings = {
  address: "smtp.gmail.com",
  port: 587,
  domain: 'gmail.com',
  user_name: ENV['TYGUEN_EMAIL_ADDRESS'],
  password: ENV['TYGUEN_EMAIL_PASSWORD'],
  authentication: :plain,
  enable_starttls_auto: true
}

ActionMailer::Base.default_url_options = {
  host: "gmail.com"
}
