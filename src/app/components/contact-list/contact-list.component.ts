import { Component, computed, inject } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  private contactService = inject(ContactService);
  contacts = computed(() => {
    return this.contactService.contacts();
  })


}
