class Country < ApplicationRecord

  validates :name, presence: true

  has_many :cities,
    class_name: :City,
    foreign_key: :country_id

  has_many :articles,
    through: :cities,
    source: :articles

  def self.top_countries_by_article_count
    countries = Country.select(:id, :name).joins(:cities).joins(:articles).group('countries.id').order('COUNT(articles.id) DESC').limit(10)
  end

end
