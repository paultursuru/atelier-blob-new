class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :material
      t.string :year
      t.string :article_text
      t.string :ext_url
      t.string :article_type

      t.timestamps
    end
  end
end
