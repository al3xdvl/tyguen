class AddAnotherColumnToReview < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :location, :string
  end
end
