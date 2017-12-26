package controllers

import play.api._
import play.api.mvc._

import play.api.libs.json._;

import javax.inject.Inject

import models.database.User
import models.UserDAO

import scala.concurrent._
import scala.concurrent.ExecutionContext.Implicits.global


class Application @Inject() (userDao: UserDAO) extends Controller {

  def user = Action.async {
    userDao.all().map(users => Ok(Json.toJson(Json.toJson(users))))
  }

  def userCreate = Action(parse.json){ request =>
    request.body.validate[User].map { dto =>
      userDao.create(dto)
      Ok("create")
    }.recoverTotal { e =>
      // バリデーションエラーを返す
      BadRequest("no_"+e)
    }
  }
  def userUpdate = Action(parse.json){ request =>
    request.body.validate[User].map { dto =>
      userDao.updatePayment(dto)
      Ok("updatePayment")
    }.recoverTotal { e =>
      // バリデーションエラーを返す
      BadRequest("no_"+e)
    }
  }
  //強引な引数の渡し方
  def userFindByName = Action.async(parse.json) { request =>
    val name = (request.body \ "name").asOpt[String]
    userDao.findByName(name.getOrElse("")).map(users => Ok(Json.toJson(Json.toJson(users))))
  }
  //デフォルトから
  def userFindById = Action.async(parse.json) { request =>
    val id = (request.body \ "id").asOpt[Long]
    userDao.findById(id.getOrElse(0)).map(users => Ok(Json.toJson(Json.toJson(users))))
  }
  //
  def userFindByPayment = Action.async(parse.json) { request =>
    val payment = (request.body \ "is_payment").asOpt[Boolean]
    userDao.findByPayment(payment.getOrElse(false)).map(users => Ok(Json.toJson(Json.toJson(users))))
  }
  //
  def userDelete = Action.async(parse.json) { request =>
    val name = (request.body \ "name").asOpt[String]
    userDao.delete(name.getOrElse("")).map(users => Ok(Json.toJson(Json.toJson(users))))

  }
}
