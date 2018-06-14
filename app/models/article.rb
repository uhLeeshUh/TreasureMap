# == Schema Information
#
# Table name: articles
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  description      :string           not null
#  body             :text             not null
#  lat              :float            not null
#  lng              :float            not null
#  author_id        :integer          not null
#  city_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  long_description :string
#

class Article < ApplicationRecord

  validates :name, :description, :body, :lat, :lng, :author_id, :city_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  has_many :edits,
    class_name: :ArticleEdit,
    foreign_key: :article_id

  has_many :editors,
    through: :edits,
    source: :editor

  has_many :images,
    class_name: :Image,
    foreign_key: :article_id,
    inverse_of: :article

  belongs_to :city,
    class_name: :City,
    foreign_key: :city_id

  has_one :country,
    through: :city,
    source: :country

  accepts_nested_attributes_for :images, :edits

  include PgSearch
  multisearchable :against => [:name], using: {
    tsearch: {
      prefix: true
    }
  }


  def self.select_random_articles
    articles = Article.all.sample(7)
  end

  def images_attributes=(images_data)
    self.images.destroy_all
    super(images_data)
  end

end
