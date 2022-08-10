import { ConfigModule, ConfigService } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { getSequelizeConfig } from './config/db.config'
import { AuthModule } from './auth/auth.module'
import { MovieModule } from './movie/movie.module'
import { ReviewModule } from './review/review.module'
import { ViewsModule } from './views/views.module'
import { MediaModule } from './media/media.module'
import { StatisticsModule } from './statistics/statistics.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		SequelizeModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getSequelizeConfig
		}),
		AuthModule,
		MovieModule,
		ReviewModule,
		ViewsModule,
		MediaModule,
		StatisticsModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
