class RemoveImageUrlColumnFromImagesTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :images, :image_url
  end
end
