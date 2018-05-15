class Api::ImagesController < ApplicationController

  def create
    @image = Image.new(image_params)

    if @image.save
      render 'api/images/show'
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  private

  def image_params
    params.require(:image).permit(:image)
  end

end
