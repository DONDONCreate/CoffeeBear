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

  //
  def all(): Future[List[User]] = dbConfig.db.run(users.to[List].result)

  //作成
  def create(user: User):
  Future[Int] = dbConfig.db.run(users += User(null,user.name,user.is_payment))

  def updatePayment(user: User):
  Future[Int] = dbConfig.db.run(users.to[List].filter(_.name === user.name).map(_.is_payment).update(user.is_payment))

  def findByName(name: String):
  Future[List[User]] = dbConfig.db.run(users.to[List].filter(_.name === name).result)

  def findById(id: Long):
  Future[List[User]] = dbConfig.db.run(users.to[List].filter(_.id === id).result)

  def findByPayment(payment: Boolean):
  Future[List[User]] = dbConfig.db.run(users.to[List].filter(_.is_payment === payment).result)

  def delete(name: String):
  Future[Int] = dbConfig.db.run(users.to[List].filter(_.name === name).delete)

}
