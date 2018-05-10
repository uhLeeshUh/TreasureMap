class City < ApplicationRecord

has_many :articles,
  class_name: :Article,
  foreign_key: :city_id

end
