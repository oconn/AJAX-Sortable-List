get '/' do
  @list = Item.order(:position)

  erb :index
end
