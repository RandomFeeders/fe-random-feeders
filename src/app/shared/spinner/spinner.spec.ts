import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';

describe('Spinner Component', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [SpinnerComponent],
            providers: [SpinnerService]
        })
    );

    it('should create the spinner', () => {
        const fixture = TestBed.createComponent(SpinnerComponent);
        const spinner = fixture.componentInstance;
        expect(spinner).toBeTruthy();
    });

    it('should have initial visible value as false', () => {
        const fixture = TestBed.createComponent(SpinnerComponent);
        const spinner = fixture.componentInstance;
        expect(spinner.visible).toEqual(false);
    });

    it('should render on spinner show', () => {
        const service = TestBed.inject(SpinnerService);
        const fixture = TestBed.createComponent(SpinnerComponent);
        fixture.detectChanges();
        service.show();
        const spinner = fixture.componentInstance;
        expect(spinner.visible).toEqual(true);
    });
});
