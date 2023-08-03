class Api::V1::VideosController < ApplicationController
	def index
		@video = Video.find(Video.ids.sample)
		render json: @video
	end
end
