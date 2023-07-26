import { Component } from '@angular/core';

@Component({
    templateUrl: 'not-found.component.html',
    styleUrls: ['not-found.component.scss'],
})
export class NotFoundComponent {
    public limit = 404;
    public count = this.limit;

    private recursiveCountUp(): void {
        this.count += Math.floor(Math.random() * 9) + 1;
        if (this.count >= this.limit) {
            this.count = this.limit;
            return;
        }
        setTimeout(() => this.recursiveCountUp(), 3);
    }

    public onMouseEnter(): void {
        this.count = 0;
        this.recursiveCountUp();
    }
}
