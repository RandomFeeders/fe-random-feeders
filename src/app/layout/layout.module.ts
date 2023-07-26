import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [SharedModule],
    declarations: [LayoutComponent, HeaderComponent, FooterComponent],
})
export class LayoutModule {}
