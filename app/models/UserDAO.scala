package models

import javax.inject.Singleton
import javax.inject.Inject

import scala.concurrent.Future

import play.api.db.slick.DatabaseConfigProvider
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import slick.driver.JdbcProfile

import models.database.User

import play.api.libs.json._

@Singleton
class UserDAO @Inject()(val dbConfigProvider: DatabaseConfigProvider) {

  val dbConfig = dbConfigProvider.get[JdbcProfile]

  import dbConfig.driver.api._

  private class UserTable(tag: Tag) extends Table[User](tag, "users") {

    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def name = column[String]("name")
    def is_payment= column[Boolean]("is_payment")

    def * = (id.?,name, is_payment) <> ((User.apply _).tupled, User.unapply)
  }

  private val users = TableQuery[UserTable]

  def all(): Future[List[User]] = dbConfig.db.run(users.result).map(_.toList)

  def create(name: String, is_payment: Boolean){
    dbConfig.db.run(
      users += User(null,name,is_payment)
    )
  }
}
