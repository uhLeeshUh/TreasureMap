class Country < ApplicationRecord

  has_many :cities,
    class_name: :Country,
    foreign_key: :country_id


end
