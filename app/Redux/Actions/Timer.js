
import {START_TIMER, STOP_TIMER} from '../Middleware/Timer'

export const startApiWatch = () => {
    return {
        type: START_TIMER,
        payload: {
            actionName: 'API_WATCH_SERVER_CHANGE',
            timerName: 'apiwatchserver',
            timerInterval: 10000
        }
    }
}

export const stopApiWatch = () => {
    return {
        type: STOP_TIMER,
        payload: {
            actionName: 'API_WATCH_SERVER_CHANGE',
            timerName: 'apiwatchserver'
        }
    }
}