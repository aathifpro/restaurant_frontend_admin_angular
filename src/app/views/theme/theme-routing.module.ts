import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { ProductsComponent } from './products.component';
import { UsersComponent } from './users.component';
import { OrdersComponent } from './orders.component';
import { PaymentsComponent } from './payments.component';
import { DeliveryComponent } from './delivery.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'colors',
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors',
        },
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography',
        },
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users',
        },
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'Products',
        },
      },
      {
        path: 'orders',
        component: OrdersComponent,
        data: {
          title: 'Orders',
        },
      },
      {
        path: 'payments',
        component: PaymentsComponent,
        data: {
          title: 'Payments',
        },
      },
      {
        path: 'delivery',
        component: DeliveryComponent,
        data: {
          title: 'Delivery',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
