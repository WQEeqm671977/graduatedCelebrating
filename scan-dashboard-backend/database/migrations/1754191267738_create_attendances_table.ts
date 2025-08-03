import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'attendances'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // รหัสนักศึกษา
      table.string('student_id').notNullable()

      // เวลาและประเภทการสแกน
      table.timestamp('scan_time', { useTz: true }).notNullable()
      table.enum('scan_type', ['in', 'out']).notNullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
