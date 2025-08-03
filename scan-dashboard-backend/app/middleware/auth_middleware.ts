import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { NextFn } from '@ioc:Adonis/Core/HttpContext'
import type { Authenticators } from '@ioc:Adonis/Addons/Auth'

export default class AuthMiddleware {
  /**
   * URL ที่จะ redirect เมื่อ authentication ล้มเหลว (สำหรับเว็บ)
   */
  protected redirectTo = '/login'

  public async handle(
    ctx: HttpContextContract,
    next: NextFn,
    options: { guards?: (keyof Authenticators)[] } = {}
  ) {
    try {
      // พยายาม authenticate ด้วย guard ที่ระบุ หรือ default guard
      await ctx.auth.authenticateUsing(options.guards, {
        loginRoute: this.redirectTo,
      })

      // ถ้า authenticate ผ่าน ให้ไป middleware ต่อ
      await next()
    } catch (error) {
      // กรณีไม่ผ่าน authenticate
      if (ctx.request.accepts(['json', 'html']) === 'json' || ctx.request.is('application/json')) {
        // กรณี API ขอ JSON ตอบ 401 Unauthorized
        return ctx.response.status(401).json({
          error: 'Unauthorized',
          message: 'Authentication is required to access this resource',
        })
      } else {
        // กรณีเว็บ redirect ไปหน้า login
        return ctx.response.redirect(this.redirectTo)
      }
    }
  }
}
