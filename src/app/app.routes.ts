import { Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';

export const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
    },
    {
        path: 'tdd',
        loadComponent: () => import('./components/template-driven/template-driven.component').then(td => td.TemplateDrivenComponent),
        title: 'Template Driven Form'
    },
    {
        path: 'reactive-form',
        loadComponent: () => import('./components/reactive-form/reactive-form.component').then(rf => rf.ReactiveFormComponent),
        title: 'Reactive Form'
    },
    {
        path: 'users-post',
        loadComponent: () => import('./components/user-post-details/user-post-details.component').then(up => up.UserPostDetailsComponent),
        title: 'User-Post Details'
    },
    {
        path: 'sort',
        loadComponent: () => import('./components/sorting-filtering/sorting-filtering.component').then(sf => sf.SortingFilteringComponent),
        title: 'Sorting'

    },
    {
        path: 'searching',
        loadComponent: () => import('./components/searching/searching.component').then(s => s.SearchingComponent),
        title: 'Searching'

    },
    {
        path: 'book-range',
        loadComponent: () => import('./components/books/books.component').then(b => b.BooksComponent),
        title: 'Book Range Filter'

    },
    {
        path: 'images',
        loadComponent: () => import('./components/display-images/display-images.component').then(di => di.DisplayImagesComponent),
        title: 'Show Images'
    },
    {
        path: 'activity',
        loadComponent: () => import('./components/activity/activity.component').then(a => a.ActivityComponent),
        title: 'User Activity'
    },
    {
        path: 'random-no',
        loadComponent: () => import('./components/random-no/random-no.component').then(rn => rn.RandomNoComponent),
        title: 'Random No Game'
    },
    {
        path: 'status-code',
        loadComponent: () => import('./components/http-status-code/http-status-code.component').then(sc => sc.HttpStatusCodeComponent),
        title: 'Status Codes'
    },
    {
        path: 'product-filters',
        loadComponent: () => import('./components/product-filters/product-filters.component').then(pf => pf.ProductFiltersComponent),
        title: 'Product Filters'
    },
    {
        path: 'contacts',
        loadComponent: () => import('./components/contact-list/contact-list.component').then(cl => cl.ContactListComponent),
        title: 'Contact List'
    },
    {
      path: 'todos',
      loadComponent: () => import('./components/todo/todo.component').then( td => td.TodoComponent),
      title: 'Todo Operation'
    }
];
