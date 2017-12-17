package models.database

import play.api.libs.json._

case class Message (id: Int, text_name: String)

object Message {
  implicit val messageWrites = Json.writes[Message]
  implicit val messageReads = Json.reads[Message]
}
