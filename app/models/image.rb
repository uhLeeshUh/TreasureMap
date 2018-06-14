# == Schema Information
#
# Table name: images
#
#  id                 :integer          not null, primary key
#  article_id         :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Image < ApplicationRecord
  # validates :article_id, presence: true

  belongs_to :article,
    class_name: :Article,
    foreign_key: :article_id,
    inverse_of: :images

    has_attached_file :image, default_url: "toy_explorer.jpg"
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
