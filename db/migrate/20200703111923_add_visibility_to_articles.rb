class AddVisibilityToArticles < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :visible, :boolean, null: false, default: false
  end
end
