require 'paypal-sdk-core'

module PayPal
  module SDK
    module Merchant

      autoload :VERSION,   "paypal-sdk/merchant/version"
      autoload :Services,  "paypal-sdk/merchant/services"
      autoload :DataTypes, "paypal-sdk/merchant/data_types"
      autoload :API,       "paypal-sdk/merchant/api"

      def self.new(*args)
        API.new(*args)
      end
    end
  end
end
