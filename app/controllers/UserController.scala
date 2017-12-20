package controllers

import play.api._
import play.api.mvc._

import play.api.libs.json._;

import javax.inject.Inject

import models.database.Message
import models.database.User
import models.MessageDAO
import models.UserDAO

import scala.concurrent._
import scala.concurrent.ExecutionContext.Implicits.global


class Application @Inject() (messageDao: MessageDAO,userDao: UserDAO) extends Controller {

  def message = Action.async {
    messageDao.all().map(messages => Ok(Json.toJson(Json.toJson(messages))))
  }

  def user = Action.async {
    userDao.all().map(users => Ok(Json.toJson(Json.toJson(users))))
  }

  def messageCreate = Action(parse.json){ request =>
    request.body.validate[Message].map { dto =>
      // オッケーの場合は作成する
      messageDao.create(dto.id_name,dto.text_name)
      Ok("ok")
    }.recoverTotal { e =>
      // バリデーションエラーを返す
      BadRequest("no"+e)
    }
  }

  def userCreate = Action(parse.json){ request =>
    request.body.validate[User].map { dto =>
      // オッケーの場合は作成する
      userDao.create(dto.name,dto.is_payment)
      Ok("ok")
    }.recoverTotal { e =>
      // バリデーションエラーを返す
      BadRequest("no"+e)
    }
  }

}
