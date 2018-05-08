class CreateArticleEdits < ActiveRecord::Migration[5.1]
  def change
    create_table :article_edits do |t|
      t.integer :article_id, null: false
      t.integer :editor_id, null: false

      t.timestamps
    end

    add_index :article_edits, [:article_id, :editor_id]
    add_index :article_edits, :editor_id

  end
end
