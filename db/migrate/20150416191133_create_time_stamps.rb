class CreateTimeStamps < ActiveRecord::Migration
  def change
    create_table :time_stamps do |t|
      t.datetime :start_at
      t.datetime :end_et
      t.references :task, index: true

      t.timestamps null: false
    end
    add_foreign_key :time_stamps, :tasks
  end
end
