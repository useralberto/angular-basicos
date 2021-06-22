import { NgModule } from '@angular/core';
import { ContadorComponents  } from './contador/contador.components';


@NgModule({
  declarations: [
    ContadorComponents
  ],
  exports: [
    ContadorComponents
  ]
})

export class ContadorModule {}
