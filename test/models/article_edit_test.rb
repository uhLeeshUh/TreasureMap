# == Schema Information
#
# Table name: article_edits
#
#  id         :integer          not null, primary key
#  article_id :integer          not null
#  editor_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ArticleEditTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
