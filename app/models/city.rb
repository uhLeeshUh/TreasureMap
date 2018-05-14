class City < ApplicationRecord
  validates :name, :country_id, presence: true

has_many :articles,
  class_name: :Article,
  foreign_key: :city_id

belongs_to :country,
  class_name: :Country,
  foreign_key: :country_id

  def self.top_cities_by_article_count
    cities = City.select(:id, :name).joins(:articles).group('cities.id').order('COUNT(articles.id) DESC').limit(10)
  end

end
