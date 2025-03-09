import { Injectable, signal } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts = signal<Contact[]>([
    { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", phone: "555-123-4567" },
    { id: 4, name: "Bob Williams", email: "bob.williams@example.com", phone: "444-987-6543" },
    { id: 5, name: "Charlie Brown", email: "charlie.brown@example.com", phone: "333-222-1111" },
    { id: 6, name: "David Miller", email: "david.miller@example.com", phone: "777-888-9999" },
    { id: 7, name: "Emma Wilson", email: "emma.wilson@example.com", phone: "666-555-4444" },
    { id: 8, name: "Frank Thomas", email: "frank.thomas@example.com", phone: "111-222-3333" },
    { id: 9, name: "Grace Lee", email: "grace.lee@example.com", phone: "999-888-7777" },
    { id: 10, name: "Henry Adams", email: "henry.adams@example.com", phone: "555-666-7777" }
  ])

  getContacts() {
    return this.contacts.asReadonly();
  }
  
}
