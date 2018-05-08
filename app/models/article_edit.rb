class ArticleEdit < ApplicationRecord

  belongs_to :editor,
    class_name: :User,
    foreign_key: :editor_id

  belongs_to :article,
    class_name: :Article,
    foreign_key: :article_id


end
