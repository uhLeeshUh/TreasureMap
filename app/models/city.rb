class City < ApplicationRecord
  validates :name, :country_id, presence: true

has_many :articles,
  class_name: :Article,
  foreign_key: :city_id

belongs_to :country,
  class_name: :Country,
  foreign_key: :country_id

end
