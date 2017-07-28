import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    beautyTime(t: number): string {
        const d = new Date(t);
        return this.addZeroToNum(d.getUTCHours()) + ':' + this.addZeroToNum(d.getUTCMinutes()) +
        ':' + this.addZeroToNum(d.getUTCSeconds()) + ':' + this.addZeroToMilisec(d.getUTCMilliseconds());
    }

    beautyTimeLocal(t: number): string {
        const d = new Date(t);
        return this.addZeroToNum(d.getHours()) + ':' + this.addZeroToNum(d.getMinutes()) + ':' + this.addZeroToNum(d.getSeconds());
    }

    private addZeroToNum(num: number): string {
        if (num < 10) {
            return '0' + num;
        } else {
            return num.toString();
        }
    }

    private addZeroToMilisec(num: number): string {
        if ( num < 10) {
            return '00' + num;
        } else if ( num < 100) {
            return '0' + num;
        } else {
            return num.toString();
        }
    }
}
