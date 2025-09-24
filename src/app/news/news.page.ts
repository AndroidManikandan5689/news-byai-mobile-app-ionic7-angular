  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { IonContent, IonHeader, IonTitle,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  IonList,
  IonItem,
  IonLabel,
  IonText, IonToolbar } from '@ionic/angular/standalone';
  import { NewsService } from '../services/news.service';
  import { News } from '../models/news';

  @Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss'],
    standalone: true,
    imports: [IonContent,  IonHeader, IonTitle, IonToolbar,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  IonList,
  IonItem,
  IonLabel,
  IonText, CommonModule, FormsModule]
  })
  export class NewsPage implements OnInit {

    newsList: News[] = [];
    loading = true;

    constructor(private newsService: NewsService) {}

    ngOnInit() {
      this.loadNews();
    }

    loadNews() {
      this.newsService.getNews().subscribe({
        next: (data) => {
          this.newsList = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error loading news:', err);
          this.loading = false;
        }
      });
    }

  }
