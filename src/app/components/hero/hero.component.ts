import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input()
  heroImage: string | undefined;
}
