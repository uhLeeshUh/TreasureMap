# == Schema Information
#
# Table name: article_edits
#
#  id         :integer          not null, primary key
#  article_id :integer          not null
#  editor_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ArticleEdit < ApplicationRecord

  belongs_to :editor,
    class_name: :User,
    foreign_key: :editor_id

  belongs_to :article,
    class_name: :Article,
    foreign_key: :article_id

end
