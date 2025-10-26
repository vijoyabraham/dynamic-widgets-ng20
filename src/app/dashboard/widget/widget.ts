import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget',
  imports: [CommonModule],
  templateUrl: './widget.html',
})
export class Widget {
  @Input() icon?: string;
  @Input() name = '';
  @Input() value = '';
}
