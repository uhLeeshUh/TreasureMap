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

  # belongs_to :city,
  #   class_name: :City,
  #   foreign_key: :city_id


end
