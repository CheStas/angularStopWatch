import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-display',
  template: `{{time}}`,
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnChanges {

    @Input() time: string;

    ngOnChanges() {}
}
