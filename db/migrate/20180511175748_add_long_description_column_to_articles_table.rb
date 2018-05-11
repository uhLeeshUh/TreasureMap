class AddLongDescriptionColumnToArticlesTable < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :long_description, :string
  end
end
