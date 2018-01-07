package controllers

import play.api._
import play.api.mvc._

import play.api.libs.json._;

import javax.inject.Inject

import models.database.User
import models.UserDAO

import scala.concurrent._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.duration.Duration
import scala.util.{ Success, Failure }


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

  // def userUpdate = Action(parse.json){ request =>
  //   request.body.validate[User].map { dto =>
  //     userDao.updatePayment(dto)
  //     Ok("updatePayment")
  //   }.recoverTotal { e =>
  //     // バリデーションエラーを返す
  //     BadRequest("no_"+e)
  //   }
  // }

  // 一部分だけ変更する(PUTをPATCHに変更)
  def userPatch(id: Long) = Action{ request =>
    val resultUsers = userDao.findById(id)
    Await.ready(resultUsers, Duration.Inf)
    resultUsers.value.get match {
      case Success(result) => {
        // 検索結果が空だった場合
        if(result.size == 0)
          BadRequest("no_"+id)
        else{
          result.map(user => userDao.patchPayment(user))
          Ok("updatePayment")
        }
      }
      case Failure(ex) => BadRequest("no_"+ex)
    }
  }

  //強引な引数の渡し方
  // def userFindByName(name: String) = Action { request =>
  //   val resultUsers = userDao.findByName(name)
  //   resultUsers.value.get match {
  //     case Success(result) => {
  //       // 検索結果が空だった場合
  //       if(result.size == 0)
  //         BadRequest("no_"+name)
  //       else{
  //         // result.map(users => Ok(Json.toJson(Json.toJson(users))))
  //         Ok("hello")
  //       }
  //     }
  //     case Failure(ex) => BadRequest("no_"+ex)
  //   }
  //   // userDao.findByName(name).map(users => Ok(Json.toJson(Json.toJson(users))))
  // }

  //デフォルトから
  def userFindById(id: Long) = Action { request =>
    println(id)
    val resultUsers = userDao.findById(id)
    Await.ready(resultUsers, Duration.Inf)
    resultUsers.value.get match {
      case Success(result) => {
        // 検索結果が空だった場合
        if(result.size == 0)
          BadRequest("no_"+id)
        else{
          Ok(Json.toJson(result))
        }
      }
      case Failure(ex) => BadRequest("no_"+ex)
    }
  }

  //
  // def userFindByPayment = Action.async(parse.json) { request =>
  //   val payment = (request.body \ "is_payment").asOpt[Boolean]
  //   userDao.findByPayment(payment.getOrElse(false)).map(users => Ok(Json.toJson(Json.toJson(users))))
  // }
  //
  // def userDelete = Action.async(parse.json) { request =>
  //   val name = (request.body \ "name").asOpt[String]
  //   userDao.delete(name.getOrElse("")).map(users => Ok(Json.toJson(Json.toJson(users))))
  // }

  //idを指定してそのUserをDeleteする
  def userDelete(id: Long) = Action { request =>
    userDao.delete(id)
    Ok("deleteUser")
  }
}
