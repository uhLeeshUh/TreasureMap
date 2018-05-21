class Country < ApplicationRecord

  validates :name, presence: true

  has_many :cities,
    class_name: :City,
    foreign_key: :country_id

  has_many :articles,
    through: :cities,
    source: :articles

  include PgSearch
  multisearchable :against => [:name], using: {
    tsearch: {
      prefix: true
    }
  }

  def self.top_countries_by_article_count
    countries = Country.select('countries.*').joins(:cities).joins(:articles).group('countries.id').order('COUNT(articles.id) DESC').limit(6)
  end

  # SELECT countries.*
  # FROM countries
  # JOIN cities on cities.country_id = countries.id
  # JOIN articles on articles.city_id = cities.id
  # GROUP BY countries.id
  # ORDER BY COUNT(articles.id) DESC
  # LIMIT 8

end
