import { getJWTConfig } from '../config/jwt.config'
import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModel } from './user.model'
import { JwtStrategy } from './strategies/auth.strategy'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigModule],
			useFactory: getJWTConfig
		}),
		SequelizeModule.forFeature([UserModel])
	],
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
