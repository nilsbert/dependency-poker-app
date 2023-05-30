import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backlog-item',
  templateUrl: './backlog-item.component.html',
  styleUrls: ['./backlog-item.component.css']
})
export class BacklogItemComponent {
  @Input() item: {title: string, description: string} = {title: '', description: ''};
}
