class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :pseudonym
      t.string :link
      t.integer :patient
      t.integer :gender
      t.date :birthdate
      t.date :begin
      t.date :end
      t.references :departement, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end