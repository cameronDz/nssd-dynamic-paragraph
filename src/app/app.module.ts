import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicParagraphComponent } from './components/dynamic-paragraph/dynamic-paragraph.component';
import { ParagraphSectionComponent } from './components/paragraph-section/paragraph-section.component';
import { StylePipe } from './pipes/style.pipe';

@NgModule({
    declarations: [
        AppComponent,
        DynamicParagraphComponent,
        ParagraphSectionComponent,
        StylePipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
