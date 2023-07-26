import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentTypeInterceptor } from './interceptors/contenttype.interceptor';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        FontAwesomeModule,
    ],
    declarations: [SpinnerComponent],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        SpinnerComponent,
        FontAwesomeModule,
    ],
    providers: [SpinnerService],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ContentTypeInterceptor,
                    multi: true,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthorizationInterceptor,
                    multi: true,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: SpinnerInterceptor,
                    multi: true,
                },
            ],
        };
    }
}
