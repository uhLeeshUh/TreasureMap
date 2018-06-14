# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  country_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class City < ApplicationRecord
  validates :name, :country_id, presence: true

  has_many :articles,
    class_name: :Article,
    foreign_key: :city_id

  belongs_to :country,
    class_name: :Country,
    foreign_key: :country_id

  include PgSearch
  multisearchable :against => [:name], using: {
    tsearch: {
      prefix: true
    }
  }

  def self.top_cities_by_article_count
    City.select('cities.*').joins(:articles).group('cities.id').order('COUNT(articles.id) DESC').limit(12)
  end

  def self.existing_city(city_name, country_id)
    City.find_by(name: city_name, country_id: country_id)
  end

end
