class Article < ApplicationRecord

  belongs_to :author,
  class_name: :User,
  foreign_key: :user_id

  has_many :edits,
    class_name: :ArticleEdit,
    foreign_key: :article_id

  has_many :editors,
    through: :edits,
    source: :editor
end
