class DropLikedPostsTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :liked_posts
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
