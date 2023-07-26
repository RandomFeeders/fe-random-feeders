import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        FontAwesomeModule,
    ],
    declarations: [],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        FontAwesomeModule,
    ],
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [],
        };
    }
}
