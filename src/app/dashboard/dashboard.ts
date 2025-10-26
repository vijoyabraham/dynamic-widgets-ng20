import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Widget } from './widget/widget';
import { WidgetData } from './widget/widget.model';
import { DashboardService } from './dashboard-service';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  @ViewChild('widgetContainer', { read: ViewContainerRef })
  widgetContainer!: ViewContainerRef;

   DashboardService = inject(DashboardService);
   private subscription!: Subscription;
   isLoading = true;

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.DashboardService.getWidgetData().subscribe({
      next: (widgets) => {
        this.isLoading = false;
        // Defer loading widgets until the next change detection cycle
        // so that the `widgetContainer` ViewChild is available.
        setTimeout(() => this.loadWidgets(widgets));
      },
      error: (err) => {
        console.error('Failed to load widgets', err);
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private loadWidgets(widgets: WidgetData[]): void {
    this.widgetContainer.clear();

    for (const widgetData of widgets) {
      const componentRef = this.widgetContainer.createComponent(Widget);
      componentRef.instance.name = widgetData.name;
      componentRef.instance.value = widgetData.value;
      componentRef.instance.icon = widgetData.icon;
    }
  }
}