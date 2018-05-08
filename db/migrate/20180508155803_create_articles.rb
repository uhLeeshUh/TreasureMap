class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.text :body, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :author_id, null: false
      t.integer :city_id, null: false

      t.timestamps
    end

    # add_reference :articles, :author_id, foreign_key: true
    # add_reference :articles, :city_id, foreign_key: true
    add_index :articles, :author_id
    add_index :articles, :city_id
  end
end
