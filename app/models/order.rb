# == Schema Information
#
# Table name: orders
#
#  id           :integer          not null, primary key
#  quantity     :integer          not null
#  user_id      :integer          not null
#  furniture_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Order < ApplicationRecord

  has_many :furnitures,
    foreign_key: :furniture_id,
    class_name: :Furniture,
    dependent: :destroy
end
