package models.database

import play.api.libs.json._

case class User (id: Option[Long], name: String, is_payment: Boolean)

object User {
  implicit val messageWrites = Json.writes[User]
  implicit val messageReads = Json.reads[User]
}
