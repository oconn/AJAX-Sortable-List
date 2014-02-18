get '/' do
  @list = Item.order(:position)

  erb :index
end

post '/' do 
  params.inspect
  #Item.update_postition(params[:new_order])
end
