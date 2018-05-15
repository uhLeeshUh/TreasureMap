class Image < ApplicationRecord
  # validates :article_id, presence: true

  belongs_to :article,
    class_name: :Article,
    foreign_key: :article_id,
    inverse_of: :images

    has_attached_file :image, default_url: "toy_explorer.jpg"
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
