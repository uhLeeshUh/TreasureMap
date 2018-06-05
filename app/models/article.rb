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
  # def self.select_random_article
  #   article = Article.all.sample
  # end

end
