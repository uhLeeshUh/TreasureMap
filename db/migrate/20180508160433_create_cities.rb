class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.integer :country_id, null: false

      t.timestamps
    end
    add_index :cities, :country_id
  end
end
