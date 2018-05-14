class Api::ImagesController < ApplicationController

  def create
    @image = Image.new(image_params)
    @image.article_id = params[:article_id]

    if @image.save
      render 'api/images/show'
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  private

  def image_params
    params.require(:image).permit(:article_id, :image)
  end

end
