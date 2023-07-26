import { Component } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
})
export class FooterComponent {
    public showCopyright = false;
    public discordInvite = environment.discordInvite;
    public faDiscord = faDiscord;
}
