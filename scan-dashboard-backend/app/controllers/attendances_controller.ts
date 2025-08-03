import type { HttpContext } from '@adonisjs/core/http'
import Attendance from '#models/attendance'

export default class AttendancesController {
  // แสดงรายการการเข้าร่วมทั้งหมด
  async index({ response }: HttpContext) {
    const attendances = await Attendance.all()
    return response.ok(attendances)
  }

  // บันทึกการเข้าร่วมใหม่
  async store({ request, response }: HttpContext) {
    const attendance = await Attendance.create({})
    return response.created(attendance)
  }

  // แสดงการเข้าร่วมตาม id
  async show({ params, response }: HttpContext) {
    const attendance = await Attendance.find(params.id)
    if (!attendance) {
      return response.notFound({ message: 'Attendance not found' })
    }
    return response.ok(attendance)
  }

  // ลบการเข้าร่วม
  async destroy({ params, response }: HttpContext) {
    const attendance = await Attendance.find(params.id)
    if (!attendance) {
      return response.notFound({ message: 'Attendance not found' })
    }

    await attendance.delete()
    return response.ok({ message: 'Deleted successfully' })
  }
}
