module OpenAPI{
  /**
   * 组件缩放倍率plus
   */
  export class ScaleCompsPlus {
    /**
     * 当前版本号
     */
    static Version = 1.2

    /**
     * 是否安装本插件
     */
    static Installed = true

    /**
     * 记录缓动
     */
    static tween: any
  }
}
module CommandExecute {
  export function customCommand_15002(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_15002): void {
    const uiID = p.select.uiID
    const ui = GameUI.get(uiID) as GUI_1
    const compID = ui.compsIDInfo[p.select.compID]
    if (!compID)
      return trace('【缩放组件倍率plus】请指定界面组件')

    // 设置数据
    const scaleX = (p.scaleType === 1 ? (p.scaleXType === 0 ? p.scaleX : Game.player.variable.getVariable(p.scaleXVar)) : (p.scaleXYType === 0 ? p.scaleXY : Game.player.variable.getVariable(p.scaleXYVar)))
    const scaleY = (p.scaleType === 1 ? (p.scaleYType === 0 ? p.scaleY : Game.player.variable.getVariable(p.scaleYVar)) : (p.scaleXYType === 0 ? p.scaleXY : Game.player.variable.getVariable(p.scaleXYVar)))
    const tweenTime = p.tweenTimeType === 0 ? p.tweenTime : Game.player.variable.getVariable(p.tweenTimeVar)

    // 如果使用过渡
    if (p.isTween) {
      clearInterval(OpenAPI.ScaleCompsPlus.tween)
      // 从字符串中获取过渡函数名称
      const tweenJson = JSON.parse(p.tween)
      if (!tweenJson || !tweenJson['tweenTypeName'])
        return trace('【缩放组件倍率plus】请指定过渡方式')
      // 过渡函数
      const easeFunctionName = JSON.parse(p.tween)['tweenTypeName'] as keyof typeof Ease
      const easeFunction = Ease[easeFunctionName]
      // 过渡
      if (easeFunction)
        OpenAPI.ScaleCompsPlus.tween = Tween.to(compID, { scaleX, scaleY }, tweenTime, easeFunction as any)
      else
        return trace(`【缩放组件倍率plus】过渡方式 ${easeFunctionName} 不存在`)
    }
    else {
      // 否则直接设置scaleX和scaleY的值
      compID.scaleX = scaleX
      compID.scaleY = scaleY
    }
  }
}
