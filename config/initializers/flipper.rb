require 'flipper/middleware/memoizer'

unless Rails.env.test?
  Rails.application.config.middleware.use Flipper::Middleware::Memoizer,
    lambda { Feature.flipper }
end
