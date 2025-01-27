import { Component, computed, signal, Input, input, Output, EventEmitter, output } from '@angular/core';
import {type User} from './user.model'
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  @Input({required: true}) user! : User;
  @Input({required:true}) selected!: boolean;

  // avatar = input.required<string>();
  // name = input.required<string>();

  @Output() select = new EventEmitter<string>();
  // select = output<string>()

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
