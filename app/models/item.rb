class Item < ActiveRecord::Base
  
  def self.update_positions(ids)
    ids.each_with_index do |dbid, index|
      listitem = Item.find(dbid.to_i)
      listitem.position = index.to_i + 1
      listitem.save
    end
  end
end
