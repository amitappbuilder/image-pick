import { Component } from '@angular/core';
import * as ImagePicker from '@nativescript/imagepicker';
import { ImageAsset } from '@nativescript/core';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public images: ImageAsset[] = [];

  pickImages() {
    const context = ImagePicker.create({
      mode: 'multiple', // "multiple" or "single"
    });

    context
      .authorize()
      .then(() => context.present())
      .then((selection) => {
        this.images = selection;
        console.log('Selected images:', this.images);
      })
      .catch((error) => {
        console.error('Image Picker Error:', error);
      });
  }
}
