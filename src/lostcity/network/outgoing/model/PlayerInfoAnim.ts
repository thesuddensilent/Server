import InfoMessage from '#lostcity/network/outgoing/InfoMessage.js';

export default class PlayerInfoAnim extends InfoMessage {
    constructor(
        readonly anim: number,
        readonly delay: number
    ) {
        super();
    }
}