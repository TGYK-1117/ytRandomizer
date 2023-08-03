class Api::V1::VideosController < ApplicationController
	def index
		@video = Video.find(1)
		render json: @video
	end
end
