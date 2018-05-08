class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.integer :article_id, null: false
      t.string :image_url, null: false

      t.timestamps
    end
    add_index :images, :article_id
  end
end
