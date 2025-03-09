import { isPlatformBrowser, NgClass, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { afterRender, AfterRenderPhase, Component, DestroyRef, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageService } from '../../services/image/image.service';

@Component({
  selector: 'app-display-images',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.css']
})
export class DisplayImagesComponent {

  private platformId = inject(PLATFORM_ID);
  constructor() {
    afterRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.init();
      }
    }, { phase: AfterRenderPhase.Read });
    
  }
  
  imageId = 1;
  image!:Blob;
  imageURL!:SafeUrl;
  private destroyRef = inject(DestroyRef);
  private imageService = inject(ImageService);
  private sanitizer = inject(DomSanitizer)


  goToImage(i : number) {
    this.imageId = i;
    this.init();
  }
  onPrev() {
    if(this.imageId > 0) {
      this.imageId--;
      this.init();
    }
  }
  onNext() {
    if(this.imageId <= 5) {
      this.imageId++;
      this.init();
    }
  }
  init() {
    this.imageService.getImage(this.imageId)
    .pipe(
      takeUntilDestroyed(this.destroyRef)  
    )
    .subscribe({
    next:(res: Blob) => {
      if(typeof window !== undefined) {
        this.image = res;
        this.imageURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(res));
      }
    },
    error: (error: HttpErrorResponse) => {
      console.log(error);
    }
  })
  }
}

/**
 * working code
 * imageUrl: SafeUrl | undefined;
  start = 1;
  http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
 * ngOnInit() {
    this.init(this.start);
  }
  init(id: number) {
    this.imageUrl = '';
    this.http
      .get(`https://picsum.photos/id/${id}/200/300`, { responseType: 'blob' })
      .subscribe({
        next: (res: Blob) => {
          // this.imageUrl = URL.createObjectURL(res);
          const blobUrl = URL.createObjectURL(res);
          this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
          console.log('Blob URL:', blobUrl); // Debugging
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
      });
  }
  onNext() {
    this.start++;
    this.init(this.start);
  }
  onPrev() {
    if (this.start > 1) {
      this.start--;
      this.init(this.start);
    }
  }
    <button (click)="onPrev()" [disabled]="start === 1">Prev</button>
<div *ngIf="imageUrl; else loading">
  <img [src]="imageUrl" alt="not loaded" />
</div>
<ng-template #loading>
  <p class="text-lg font-semibold text-gray-500">Loading image...</p>
</ng-template>
<button (click)="onNext()" [disabled]="start === 5">Next</button>
 */