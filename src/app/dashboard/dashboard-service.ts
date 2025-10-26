import { Injectable } from '@angular/core';
import { WidgetData } from './widget/widget.model';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  
getWidgetData() {
    const mockApiData: WidgetData[] = [
      { name: 'Sales', value: '200' },
      { name: 'Profit', value: '20 mn', icon: '💰' },
      { name: 'Total Count', value: '2 bn' },
      { name: 'Growth', value: '2%', icon: '📈' },
      { name: 'Customers', value: '1.2k', icon: '👥' },
      { name: 'Orders', value: '480' },
      { name: 'Avg. Order Value', value: '$45', icon: '🧾' },
      { name: 'Churn', value: '1.5%', icon: '⚠️' },
    ];

    return of(mockApiData).pipe(delay(3000));
  }
}
