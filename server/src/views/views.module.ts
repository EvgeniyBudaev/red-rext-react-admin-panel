import { ViewsModel } from './views.model'
import { SequelizeModule } from '@nestjs/sequelize'
import { Module } from '@nestjs/common'
import { ViewsService } from './views.service'
import { ViewsController } from './views.controller'

@Module({
	imports: [SequelizeModule.forFeature([ViewsModel])],
	controllers: [ViewsController],
	providers: [ViewsService]
})
export class ViewsModule {}
