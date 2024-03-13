module CommandExecute {
    /**
     * 自定义命令执行
     * @param commandPage 事件页
     * @param cmd 当前的事件命令
     * @param trigger 触发器
     * @param triggerPlayer 触发器对应的玩家
     * @param playerInput 玩家输入值，用于暂停执行该触发器事件并等待玩家输入后获得的值，执行完该函数后会被清空
     * @param p 自定义命令参数
     */
    export function customCommand_15001(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_15001): void {



        let uiID_yyvhc = p.uiboxsizeDiyname_yyvhc.uiID
        let uiname_yyvhc = p.uiboxsizeDiyname_yyvhc.compName
        let ui_yyvhc = GameUI.get(uiID_yyvhc) as GUI_1;
        let uiname2_yyvhc = ui_yyvhc.compsIDInfo[p.uiboxsizeDiyname_yyvhc.compID]

        if (p.uiboxsizeXY_yyvhc == 1) {

            if (p.uiboxtween_yyvhc == 1) {
                clearInterval(TweenJL.tween);
                TweenJL.tween = Tween.to(uiname2_yyvhc, { scaleX: p.uiboxsizeDiyX_yyvhc, scaleY: p.uiboxsizeDiyY_yyvhc }, p.uiboxtweenmm_yyvhc, eval("Ease." + p.uiboxtween2_yyvhc));

            } else {

                uiname2_yyvhc.scaleX = p.uiboxsizeDiyX_yyvhc;
                uiname2_yyvhc.scaleY = p.uiboxsizeDiyY_yyvhc;

            }


        }
        if (p.uiboxsizeXY_yyvhc == 0) {

            if (p.uiboxtween_yyvhc == 1) {
                clearInterval(TweenJL.tween);
                TweenJL.tween = Tween.to(uiname2_yyvhc, { scaleX: p.uiboxsizeDiyXY_yyvhc, scaleY: p.uiboxsizeDiyXY_yyvhc }, p.uiboxtweenmm_yyvhc, eval("Ease." + p.uiboxtween2_yyvhc));

            } else {
                uiname2_yyvhc.scaleX = p.uiboxsizeDiyXY_yyvhc;
                uiname2_yyvhc.scaleY = p.uiboxsizeDiyXY_yyvhc;
            }

        }

    }

}

class TweenJL {
    static tween;
}