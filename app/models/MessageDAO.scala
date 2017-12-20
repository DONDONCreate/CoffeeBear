package models

import javax.inject.Singleton
import javax.inject.Inject

import scala.concurrent.Future

import play.api.db.slick.DatabaseConfigProvider
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import slick.driver.JdbcProfile

import models.database.Message

import play.api.libs.json._

@Singleton
class MessageDAO @Inject()(val dbConfigProvider: DatabaseConfigProvider) {

  val dbConfig = dbConfigProvider.get[JdbcProfile]

  import dbConfig.driver.api._

  private class MessageTable(tag: Tag) extends Table[Message](tag, "message") {

    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def id_name = column[Int]("id_name")
    def text_name= column[String]("text_name")

    def * = (id.?,id_name, text_name) <> ((Message.apply _).tupled, Message.unapply)
  }

  private val messages = TableQuery[MessageTable]

  def all(): Future[List[Message]] = dbConfig.db.run(messages.result).map(_.toList)

  def create(id_name: Int, text_name: String){
    dbConfig.db.run(
      messages += Message(null,id_name,text_name)
    )
  }
}
