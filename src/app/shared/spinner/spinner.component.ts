import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Component({
    selector: 'app-spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: ['spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnDestroy {
    public visible = false;
    private spinnerStateChanged?: Subscription;

    constructor(private spinnerService: SpinnerService) {}

    public ngOnInit(): void {
        this.visible = false;
        this.spinnerStateChanged = this.spinnerService.spinnerState.subscribe(
            (state) => {
                if (state.visible) {
                    this.visible = true;
                } else {
                    this.visible = false;
                }
            }
        );
    }

    public ngOnDestroy(): void {
        this.spinnerStateChanged?.unsubscribe();
    }
}
