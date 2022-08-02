import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { MovieService } from './movie.service'
import { MovieController } from './movie.controller'
import { MovieModel } from './movie.model'

@Module({
	imports: [SequelizeModule.forFeature([MovieModel])],
	controllers: [MovieController],
	providers: [MovieService]
})
export class MovieModule {}
