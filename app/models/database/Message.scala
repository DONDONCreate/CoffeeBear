package models.database

import play.api.libs.json._

case class Message (id: Option[Long], id_name: Int, text_name: String)

object Message {
  implicit val messageWrites = Json.writes[Message]
  implicit val messageReads = Json.reads[Message]
}
