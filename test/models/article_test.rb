# == Schema Information
#
# Table name: articles
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  description      :string           not null
#  body             :text             not null
#  lat              :float            not null
#  lng              :float            not null
#  author_id        :integer          not null
#  city_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  long_description :string
#

require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
