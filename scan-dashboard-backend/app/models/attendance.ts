import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Attendance extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  // รหัสนักศึกษา
  @column()
  declare studentId: string

  // เวลาที่ทำการสแกน
  @column.dateTime()
  declare scanTime: DateTime

  // ประเภทการสแกน: in (เข้า) หรือ out (ออก)
  @column()
  declare scanType: 'in' | 'out'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
